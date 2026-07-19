import { NextResponse } from "next/server";
import { createMeeting } from "@/lib/server/meetings";
import type { CreatePitchRequest, CreatePitchResponse, ApiError } from "@/types/api";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<CreatePitchRequest>;

  if (!body.startupName || !body.oneLiner || !body.pitch || !body.executiveIds?.length) {
    return NextResponse.json<ApiError>(
      { error: "startupName, oneLiner, pitch, and at least one executiveId are required.", code: "INVALID_INPUT" },
      { status: 400 },
    );
  }

  const { meetingId } = await createMeeting(body as CreatePitchRequest);

  // TODO: kick off the first debate turn here (or from a queue/webhook)
  // rather than waiting for the client to call
  // POST /api/meetings/[id]/debate — see lib/ai/board-orchestrator.ts.

  return NextResponse.json<CreatePitchResponse>({ meetingId, status: "in-progress" }, { status: 201 });
}
