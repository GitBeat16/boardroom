# Merge: backend (GitBeat16/boardroom) + frontend (Hack_Agent-Hackathon)

Date: 2026-07-20. This commit merges the two repos into one app. Decisions made:

## What was kept from where
- **Frontend (Member 1) wins:** `app/layout.tsx`, `app/page.tsx`, `app/globals.css`,
  `tailwind.config.ts`, `tsconfig.json`, `next.config.mjs`, all pages under
  `app/(app)` and `app/(marketing)`, `components/`, `features/`, `providers/`.
- **Backend (Member 3) wins:** everything under `app/api/pitches` and
  `app/api/meetings` (real, Supabase-backed), `app/auth`, `app/login`, `app/signup`,
  `middleware.ts`, `lib/supabase/`, `lib/api.ts`, `lib/hooks/useMeetingStream.ts`,
  `supabase/` schema files, `docs/BACKEND.md`.
- **package.json:** union of both dependency lists, on Next 16.2.

## Deleted (and why)
- `app/dashboard/page.tsx` (backend placeholder) — collided with
  `app/(app)/dashboard/page.tsx`; both resolve to `/dashboard` and Next refuses to build.
- `next.config.ts` (backend) — duplicate of frontend's `next.config.mjs`.
- `package-lock.json` — regenerated for the merged dependency set.

## Bugs fixed during merge (all pre-existing in frontend repo)
- `types/api.ts`: the header comment contained `**/` which terminated the block
  comment early and broke the entire file. The frontend repo never passed
  `tsc --noEmit` because of this.
- `lib/motion.ts`: easing tuples typed via `Transition["ease"]` (not a thing in
  framer-motion v11) → now `as const`; `withReducedMotion` produced `undefined` variants.
- `features/market-research/components/market-size-chart.tsx`: recharts v3
  Tooltip formatter signature mismatch.

## Still TODO for integration (Member 5 / Member 1)
- Frontend pages still render **mock data** from `features/*/mock.ts`. Wire them to
  the real API per `docs/BACKEND.md`.
- Member 1's stub API routes still exist and should be migrated/deleted:
  `app/api/reports`, `app/api/executives`, `app/api/history`, `app/api/health`,
  `app/api/meetings/[id]/debate`. The real contract is in `docs/BACKEND.md`.
- `lib/db.ts`, `prisma/`, `lib/server/*` are stubs superseded by Supabase — delete
  once nothing imports them.
- `lib/ai/*` (client, executives, board-orchestrator) is scaffolding that belongs
  to Member 2 — review against the message contract in `docs/BACKEND.md`.
- Next 16 deprecation warning: rename `middleware.ts` convention to `proxy` when
  convenient (still works as-is).
