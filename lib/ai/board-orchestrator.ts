import { generateExecutiveReply } from "@/lib/ai/client";
import { getPersona } from "@/lib/ai/executives";
import type { MeetingTranscriptMessage } from "@/types/api";

export interface DebateState {
  meetingId: string;
  startupName: string;
  pitch: string;
  seatedExecutiveIds: string[];
  transcript: MeetingTranscriptMessage[];
}

/**
 * Picks the next executive to speak (simplest useful policy: whoever
 * hasn't spoken yet, in seating order) and asks the LLM for their reply.
 * Replace `pickNextSpeaker` with a smarter policy later (e.g. let the CEO
 * agent decide who should respond to the founder's last message).
 */
function pickNextSpeaker(state: DebateState): string | null {
  const spoken = new Set(state.transcript.map((m) => m.speakerId));
  return state.seatedExecutiveIds.find((id) => !spoken.has(id)) ?? null;
}

export async function advanceDebate(
  state: DebateState,
  founderMessage?: string,
): Promise<{ message: MeetingTranscriptMessage | null; isComplete: boolean }> {
  const nextSpeakerId = pickNextSpeaker(state);
  if (!nextSpeakerId) {
    return { message: null, isComplete: true };
  }

  const persona = getPersona(nextSpeakerId);

  const conversation = [
    ...state.transcript.map((m) => ({
      role: (m.speakerId === "founder" ? "founder" : "executive") as "founder" | "executive",
      content: m.message,
    })),
    ...(founderMessage ? [{ role: "founder" as const, content: founderMessage }] : []),
  ];

  const systemPrompt = `${persona.systemPrompt}\n\nThe founder is pitching "${state.startupName}": ${state.pitch}`;

  // TODO: once lib/ai/client.ts has a real implementation, this call goes
  // live. Until then it throws — callers should catch and fall back to
  // mock transcript data (see app/api/meetings/[id]/debate/route.ts).
  const replyText = await generateExecutiveReply({ systemPrompt, conversation });

  const message: MeetingTranscriptMessage = {
    id: `msg_${Date.now()}`,
    speakerId: persona.id,
    speakerName: persona.name,
    role: persona.role,
    message: replyText,
    createdAt: new Date().toISOString(),
  };

  const isComplete = pickNextSpeaker({ ...state, transcript: [...state.transcript, message] }) === null;

  return { message, isComplete };
}
