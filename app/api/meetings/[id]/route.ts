import { NextResponse } from "next/server";
import { getMeeting } from "@/lib/server/meetings";
import type { MeetingResponse, ApiError } from "@/types/api";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    return NextResponse.json<ApiError>({ error: "Meeting not found", code: "NOT_FOUND" }, { status: 404 });
  }

  return NextResponse.json<MeetingResponse>(meeting);
}
