import { db } from "@/lib/db";
import { reportSummaries, reportDetails } from "@/features/reports/mock";
import type { ReportDetail } from "@/features/reports/types";

export async function listReports() {
  if (db.isConfigured) {
    // TODO: return db.report.findMany({ orderBy: { generatedAt: "desc" } });
    throw new Error("db.isConfigured is true but listReports() has no real implementation yet.");
  }
  return reportSummaries;
}

export async function getReport(id: string): Promise<ReportDetail | null> {
  if (db.isConfigured) {
    // TODO: return db.report.findUnique({ where: { id } });
    throw new Error("db.isConfigured is true but getReport() has no real implementation yet.");
  }
  return reportDetails[id] ?? null;
}
