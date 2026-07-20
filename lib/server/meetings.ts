import { db } from "@/lib/db";
import { recentMeetings } from "@/features/dashboard/mock";
import { transcript as mockTranscript, seatedExecutives } from "@/features/boardroom/mock";
import type { CreatePitchRequest, MeetingResponse, MeetingTranscriptMessage } from "@/types/api";

/**
 * In-memory placeholder store so `POST /api/pitches` and
 * `GET /api/meetings/[id]` behave consistently within one server process
 * before a real database is wired up. This resets on every restart/deploy
 * — replace with `db` calls (see prisma/schema.prisma's Meeting model)
 * before relying on this for anything persistent.
 */
const inMemoryMeetings = new Map<string, MeetingResponse>();

export async function createMeeting(input: CreatePitchRequest): Promise<{ meetingId: string }> {
  if (db.isConfigured) {
    // TODO: replace with a real insert, e.g.
    //   const meeting = await db.meeting.create({ data: { ...input } });
    //   return { meetingId: meeting.id };
    throw new Error("db.isConfigured is true but createMeeting() has no real implementation yet.");
  }

  const meetingId = `mtg_${Date.now()}`;
  inMemoryMeetings.set(meetingId, {
    id: meetingId,
    startupName: input.startupName,
    status: "in-progress",
    transcript: [],
  });
  return { meetingId };
}

export async function getMeeting(id: string): Promise<MeetingResponse | null> {
  if (db.isConfigured) {
    // TODO: replace with a real query, e.g.
    //   return db.meeting.findUnique({ where: { id }, include: { transcript: true, votes: true } });
    throw new Error("db.isConfigured is true but getMeeting() has no real implementation yet.");
  }

  const created = inMemoryMeetings.get(id);
  if (created) return created;

  // Fall back to mock data so the route is usable during frontend
  // development before any real meeting has been created.
  const mockMeeting = recentMeetings.find((m) => m.id === id);
  if (!mockMeeting) return null;

  return {
    id: mockMeeting.id,
    startupName: mockMeeting.startupName,
    status: mockMeeting.status === "in-progress" ? "in-progress" : "completed",
    transcript: mockTranscript.map(
      (entry): MeetingTranscriptMessage => ({
        id: entry.id,
        speakerId: entry.role === "Founder" ? "founder" : entry.speaker.toLowerCase().replace(/\s+/g, "-"),
        speakerName: entry.speaker,
        role: entry.role,
        message: entry.message,
        createdAt: entry.timestamp,
      }),
    ),
    votes: Object.fromEntries(
      seatedExecutives.filter((e) => e.vote).map((e) => [e.id, e.vote as "yes" | "no" | "conditional"]),
    ),
  };
}

export function appendTranscriptMessage(meetingId: string, message: MeetingTranscriptMessage) {
  const meeting = inMemoryMeetings.get(meetingId);
  if (meeting) meeting.transcript.push(message);
}
