/**
 * Database access point. Every route handler and `lib/server/*` file
 * should import `db` from here — nothing else in the app should import an
 * ORM client directly. That keeps swapping databases (or ORMs) a one-file
 * change.
 *
 * ── This is a stub. Replace the body below with a real client. ──────────
 *
 * Option A — Prisma (recommended if you want a schema-driven ORM):
 *   1. `npm install @prisma/client && npm install -D prisma`
 *   2. Use `prisma/schema.prisma` in this repo as a starting schema.
 *   3. `npx prisma generate` then `npx prisma migrate dev`
 *   4. Replace this file with:
 *
 *      import { PrismaClient } from "@prisma/client";
 *      const globalForPrisma = global as unknown as { prisma?: PrismaClient };
 *      export const db = globalForPrisma.prisma ?? new PrismaClient();
 *      if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
 *
 * Option B — Drizzle, a raw Postgres client (`pg`/`postgres`), or a
 * hosted DB SDK (Supabase, PlanetScale, Turso) — same idea: construct the
 * client here, once, using `serverEnv.databaseUrl`, and export it.
 *
 * Until you pick one, every function in `lib/server/*.ts` reads from the
 * feature `mock.ts` files instead — see the TODOs in those files.
 */

export const db = {
  /** Placeholder so imports don't break before a real client is wired up. */
  isConfigured: false as boolean,
};
