import { NextResponse } from "next/server";
import { listHistory } from "@/lib/server/history";
import type { HistoryListResponse } from "@/types/api";

export async function GET() {
  const entries = await listHistory();
  return NextResponse.json<HistoryListResponse>({ entries });
}
