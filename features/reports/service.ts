import type { ReportListResponse } from "@/types/api";
import type { ReportDetail } from "@/features/reports/types";

/**
 * TEMPLATE — this is the pattern every feature's `service.ts` should
 * follow once the backend is real, copied here as a concrete example.
 *
 * **Not wired in yet**: `app/(app)/reports/page.tsx` and
 * `.../reports/[id]/page.tsx` still import directly from `./mock` so the
 * demo keeps working with zero setup. Once `/api/reports` returns real
 * data (see `lib/server/reports.ts`), switch those two page files to call
 * the functions below instead of importing `reportSummaries` /
 * `reportDetails` from `./mock`.
 */

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export async function fetchReports(): Promise<ReportListResponse["reports"]> {
  const res = await fetch(`${BASE_URL}/api/reports`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load reports (${res.status})`);
  const data = (await res.json()) as ReportListResponse;
  return data.reports;
}

export async function fetchReport(id: string): Promise<ReportDetail | null> {
  const res = await fetch(`${BASE_URL}/api/reports/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load report ${id} (${res.status})`);
  return (await res.json()) as ReportDetail;
}
