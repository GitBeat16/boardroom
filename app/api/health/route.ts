import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    dbConfigured: db.isConfigured,
    timestamp: new Date().toISOString(),
  });
}
