import { NextResponse } from "next/server";
import { getMeeting, appendTranscriptMessage } from "@/lib/server/meetings";
import { advanceDebate } from "@/lib/ai/board-orchestrator";
import { executivePersonas } from "@/lib/ai/executives";
import type { AdvanceDebateRequest, AdvanceDebateResponse, ApiError } from "@/types/api";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = (await request.json().catch(() => ({}))) as AdvanceDebateRequest;

  const meeting = await getMeeting(id);
  if (!meeting) {
    return NextResponse.json<ApiError>({ error: "Meeting not found", code: "NOT_FOUND" }, { status: 404 });
  }

  try {
    const result = await advanceDebate(
      {
        meetingId: meeting.id,
        startupName: meeting.startupName,
        pitch: "", // TODO: persist and load the original pitch text alongside the meeting
        seatedExecutiveIds: executivePersonas.map((p) => p.id),
        transcript: meeting.transcript,
      },
      body.founderMessage,
    );

    if (result.message) appendTranscriptMessage(id, result.message);

    return NextResponse.json<AdvanceDebateResponse>({
      message: result.message ?? {
        id: `msg_${Date.now()}`,
        speakerId: "system",
        speakerName: "Board",
        role: "System",
        message: "The board has finished debating this pitch.",
        createdAt: new Date().toISOString(),
      },
      isComplete: result.isComplete,
    });
  } catch (error) {
    // lib/ai/client.ts is still a stub until you wire up a real provider —
    // this branch fires until then. Remove once generateExecutiveReply()
    // has a real implementation.
    return NextResponse.json<ApiError>(
      { error: error instanceof Error ? error.message : "AI client not configured yet.", code: "AI_NOT_CONFIGURED" },
      { status: 501 },
    );
  }
}
