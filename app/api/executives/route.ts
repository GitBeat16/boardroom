import { NextResponse } from "next/server";
import { listExecutives } from "@/lib/server/executives";
import type { ExecutiveListResponse } from "@/types/api";

export async function GET() {
  const executives = await listExecutives();
  return NextResponse.json<ExecutiveListResponse>({ executives });
}
