import { db } from "@/lib/db";
import { versionHistory } from "@/features/history/mock";

export async function listHistory() {
  if (db.isConfigured) {
    // TODO: this likely becomes a union query across Report/Meeting
    // updatedAt timestamps rather than its own table — model it however
    // fits your schema.
    throw new Error("db.isConfigured is true but listHistory() has no real implementation yet.");
  }
  return versionHistory;
}
