import { NextResponse } from "next/server";
import { listReports } from "@/lib/server/reports";
import type { ReportListResponse } from "@/types/api";

export async function GET() {
  const reports = await listReports();
  return NextResponse.json<ReportListResponse>({ reports });
}
