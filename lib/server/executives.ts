import { db } from "@/lib/db";
import { executiveRoster } from "@/features/executives/mock";

export async function listExecutives() {
  if (db.isConfigured) {
    // TODO: return db.executive.findMany();
    throw new Error("db.isConfigured is true but listExecutives() has no real implementation yet.");
  }
  return executiveRoster;
}
