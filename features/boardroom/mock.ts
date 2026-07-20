import type { SeatedExecutive, TranscriptMessage, PastSession, FollowUpReply } from "./types";

export const currentPitch = {
  startupName: "Loadbay",
  oneLiner: "Freight-matching marketplace for regional carriers",
  stage: "Seed",
  askAmount: "$1.8M",
};

export const seatedExecutives: SeatedExecutive[] = [
  { id: "ceo", name: "Elena Vasquez", role: "CEO Agent", presence: "speaking", vote: "yes" },
  { id: "cto", name: "Priya Nair", role: "CTO Agent", presence: "active", vote: "yes" },
  { id: "cfo", name: "Marcus Webb", role: "CFO Agent", presence: "active", vote: "conditional" },
  { id: "cmo", name: "Aiko Tanaka", role: "CMO Agent", presence: "active", vote: "yes" },
  { id: "vc", name: "Jonah Kessler", role: "VC Agent", presence: "active", vote: "conditional" },
  { id: "legal", name: "Diane Okafor", role: "Legal Agent", presence: "idle" },
  { id: "research", name: "Nadia Petrov", role: "Research Agent", presence: "active", vote: "yes" },
  { id: "growth", name: "Théo Marchand", role: "Growth Agent", presence: "idle" },
];

export const transcript: TranscriptMessage[] = [
  {
    id: "t1",
    speaker: "You",
    role: "Founder",
    message: "We match regional freight carriers with shippers who can't get quotes from the big brokers fast enough.",
    timestamp: "10:02 AM",
  },
  {
    id: "t2",
    speaker: "Elena Vasquez",
    role: "CEO Agent",
    message: "What's the one metric you'd want us to remember from this pitch?",
    timestamp: "10:02 AM",
  },
  {
    id: "t3",
    speaker: "You",
    role: "Founder",
    message: "Match time. We've cut average time-to-quote from 4 hours to 11 minutes.",
    timestamp: "10:03 AM",
  },
  {
    id: "t4",
    speaker: "Marcus Webb",
    role: "CFO Agent",
    message: "11 minutes is a strong wedge, but what's the take rate, and does it hold as carrier supply grows?",
    timestamp: "10:04 AM",
  },
  {
    id: "t5",
    speaker: "Priya Nair",
    role: "CTO Agent",
    message: "Matching engine — is that a real-time optimization model or rules-based routing today?",
    timestamp: "10:05 AM",
  },
  {
    id: "t6",
    speaker: "Nadia Petrov",
    role: "Research Agent",
    message: "Regional freight brokerage is estimated at roughly $42B. Worth confirming your TAM slide cites the same source.",
    timestamp: "10:06 AM",
  },
  {
    id: "t7",
    speaker: "Jonah Kessler",
    role: "VC Agent",
    message: "This reads well at seed. I'd want to see one more quarter of take-rate data before Series A conversations.",
    timestamp: "10:07 AM",
  },
];

/** Prior sessions for this founder/workspace — shown in the Boardroom's "Pitch history" panel. */
export const pastSessions: PastSession[] = [
  {
    id: "mtg_fieldnote",
    startupName: "Fieldnote",
    oneLiner: "Field-service scheduling for utilities",
    date: "Jul 17, 2026",
    status: "completed",
    investmentScore: 82,
  },
  {
    id: "mtg_marrow",
    startupName: "Marrow Health",
    oneLiner: "Async triage for rural clinics",
    date: "Jul 17, 2026",
    status: "completed",
    investmentScore: 64,
  },
  {
    id: "mtg_greenline",
    startupName: "Greenline",
    oneLiner: "Carbon accounting for mid-market manufacturers",
    date: "Jul 16, 2026",
    status: "completed",
    investmentScore: 45,
  },
  {
    id: "mtg_ledgerly",
    startupName: "Ledgerly",
    oneLiner: "Automated bookkeeping for creator LLCs",
    date: "Jul 14, 2026",
    status: "completed",
    investmentScore: 71,
  },
];

/**
 * Canned replies used to simulate the board responding to a founder's
 * live chat message during a session (see `transcript-feed.tsx`). Cycled
 * through round-robin rather than tied to message content — there's no
 * real model behind this yet (see `lib/ai/client.ts`).
 */
export const followUpReplies: FollowUpReply[] = [
  { executiveId: "ceo", speaker: "Elena Vasquez", role: "CEO Agent", message: "Noted. Keep that number close — you'll get asked for it again before this session ends." },
  { executiveId: "cfo", speaker: "Marcus Webb", role: "CFO Agent", message: "That helps, but I'd still want to see it hold for two more cohorts before I move off conditional." },
  { executiveId: "cto", speaker: "Priya Nair", role: "CTO Agent", message: "Fair. Does that change your engineering timeline, or does it run in parallel?" },
  { executiveId: "vc", speaker: "Jonah Kessler", role: "VC Agent", message: "Good context. Comparable seed rounds priced this kind of traction around where you're asking." },
  { executiveId: "research", speaker: "Nadia Petrov", role: "Research Agent", message: "I'll cross-check that figure against the source on your market-sizing slide after this session." },
  { executiveId: "cmo", speaker: "Aiko Tanaka", role: "CMO Agent", message: "That's a better line for your deck than the one you have now — say it exactly like that on the traction slide." },
];
