/**
 * End-to-end debate smoke test — runs the full pipeline from the terminal:
 *   sign in → create pitch → create meeting → Gemini debate → save all results
 *
 * Usage:
 *   npx tsx scripts/test-debate.ts your@email.com yourpassword
 *
 * Requires .env.local with NEXT_PUBLIC_SUPABASE_URL,
 * NEXT_PUBLIC_SUPABASE_ANON_KEY and GEMINI_API_KEY.
 */
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

// ---- load .env.local (must happen before importing the Gemini service) ----
try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    const key = m?.[1];
    const val = m?.[2];
    if (key && val !== undefined && !process.env[key]) {
      process.env[key] = val.replace(/^["']|["']$/g, "");
    }
  }
} catch {
  console.error("❌ Could not read .env.local — run this from the repo root.");
  process.exit(1);
}

const [email, password] = process.argv.slice(2);
if (!email || !password) {
  console.error("Usage: npx tsx scripts/test-debate.ts <email> <password>");
  process.exit(1);
}
for (const k of ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY", "GEMINI_API_KEY"]) {
  if (!process.env[k]) { console.error(`❌ Missing ${k} in .env.local`); process.exit(1); }
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ---- 1. sign in ----
const { data: auth, error: authErr } = await supabase.auth.signInWithPassword({ email, password });
if (authErr || !auth.user) { console.error("❌ Login failed:", authErr?.message); process.exit(1); }
console.log("✅ 1/5 Logged in as", auth.user.email);

// ---- 2. create pitch ----
const { data: pitch, error: pitchErr } = await supabase
  .from("pitches")
  .insert({
    user_id: auth.user.id,
    startup_name: "SmokeTest Startup",
    problem_statement: "Founders waste months building unvalidated ideas",
    solution: "An AI board of directors that stress-tests pitches in minutes",
    target_audience: "First-time startup founders",
    business_model: "B2C SaaS",
    revenue_model: "Monthly subscription",
  })
  .select()
  .single();
if (pitchErr || !pitch) { console.error("❌ Pitch insert failed:", pitchErr?.message); process.exit(1); }
console.log("✅ 2/5 Pitch created:", pitch.id);

// ---- 3. create meeting ----
const { data: meeting, error: mtgErr } = await supabase
  .from("board_meetings")
  .insert({ user_id: auth.user.id, pitch_id: pitch.id, status: "in_progress" })
  .select()
  .single();
if (mtgErr || !meeting) { console.error("❌ Meeting insert failed:", mtgErr?.message); process.exit(1); }
console.log("✅ 3/5 Meeting created:", meeting.id);

// ---- 4. run the Gemini debate (Member 2's engine, called directly) ----
console.log("⏳ 4/5 Calling Gemini — this takes 10-30 seconds...");
const { analyzeStartup } = await import("../src/services/boardroomService");
let analysis;
try {
  analysis = await analyzeStartup({
    startupName: pitch.startup_name,
    industry: "SaaS / AI",
    problem: pitch.problem_statement,
    solution: pitch.solution,
    targetMarket: pitch.target_audience,
    businessModel: `${pitch.business_model} — ${pitch.revenue_model}`,
    competition: "Not specified",
    fundingRequired: "Not specified",
  });
} catch (e) {
  console.error("❌ Gemini call failed:", e instanceof Error ? e.message : e);
  console.error("   → If this mentions API keys: your GEMINI_API_KEY is invalid.");
  console.error("   → Get a valid one at https://aistudio.google.com/apikey");
  process.exit(1);
}
console.log(`✅ 4/5 Debate generated: ${analysis.conversation.length} messages, verdict: ${analysis.decision.verdict}`);

// ---- 5. save everything (mirrors app/api/analyze/route.ts) ----
const { error: msgErr } = await supabase.from("debate_messages").insert(
  analysis.conversation.map((msg: { role: string; message: string }, i: number) => ({
    meeting_id: meeting.id,
    agent: msg.role.toLowerCase(),
    content: msg.message,
    round: 1,
    order_index: i,
  }))
);
if (msgErr) { console.error("❌ Message insert failed:", msgErr.message); process.exit(1); }

const { error: scoreErr } = await supabase.from("scores").upsert(
  (["ceo", "cto", "cfo", "cmo", "vc"] as const).map((agent) => ({
    meeting_id: meeting.id,
    agent,
    category: "overall",
    value: analysis.scores[agent].score * 10,
  })),
  { onConflict: "meeting_id,agent,category" }
);
if (scoreErr) {
  console.error("❌ Score insert failed:", scoreErr.message);
  console.error("   → If this mentions 'overall' or enum: run the migration in Supabase SQL Editor:");
  console.error("     alter type score_category add value if not exists 'overall';");
  process.exit(1);
}

const decisionMap: Record<string, string> = { INVEST: "invest", CONSIDER: "pivot", PASS: "reject" };
await supabase.from("reports").upsert(
  { meeting_id: meeting.id, content: { strengths: analysis.strengths, risks: analysis.risks, decision: analysis.decision, report: analysis.report } },
  { onConflict: "meeting_id" }
);
await supabase.from("board_meetings").update({
  status: "completed",
  completed_at: new Date().toISOString(),
  decision: decisionMap[analysis.decision.verdict],
  overall_score:
    (Object.values(analysis.scores) as Array<{ score: number }>).reduce((s, x) => s + x.score, 0) * 2,
}).eq("id", meeting.id);

console.log("✅ 5/5 Everything saved.");
console.log("\n🎉 FULL PIPELINE WORKS. Check Supabase Table Editor:");
console.log("   debate_messages, scores, reports — all under meeting", meeting.id);
console.log("\n--- First 3 debate messages ---");
for (const msg of analysis.conversation.slice(0, 3)) {
  console.log(`\n[${msg.role}]: ${msg.message.slice(0, 150)}...`);
}
process.exit(0);
