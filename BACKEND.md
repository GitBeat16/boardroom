# Backend integration guide

This repo is still frontend-first — every page renders from
`features/*/mock.ts` and works with zero setup. This file adds the
**scaffolding** for a real backend alongside it, without touching how any
existing page currently renders. Nothing breaks if you never fill any of
this in.

Install these when you're ready (not installed yet, to keep the demo
dependency-free):

```bash
npm install @anthropic-ai/sdk
# and, if you go the Prisma route:
npm install @prisma/client && npm install -D prisma
```

## Where to add your logic — in the order you'll actually touch them

### 1. `.env.example` → copy to `.env.local`
Fill in `ANTHROPIC_API_KEY` and `DATABASE_URL`. Read by `lib/server/env.ts`.

### 2. `lib/ai/client.ts`
**The only file that makes an LLM call.** `generateExecutiveReply()` is a
stub that throws. Replace its body with a real `@anthropic-ai/sdk` call —
the exact code to paste in is in the file's own comment block.

### 3. `lib/ai/executives.ts`
Already has all 8 executive system prompts (`ceo`, `cto`, `cfo`, `cmo`,
`vc`, `legal`, `research`, `growth`). Edit the `systemPrompt` strings here
to change how an agent argues — nothing else needs to change.

### 4. `lib/ai/board-orchestrator.ts`
Decides who speaks next (`pickNextSpeaker`) and turns their reply into a
transcript message. The turn-taking policy is intentionally simple
(whoever hasn't spoken yet) — swap `pickNextSpeaker` for something smarter
once you have a real model in front of you.

### 5. `lib/db.ts`
**The only file that constructs a database client.** Pick Prisma, Drizzle,
a raw client, or a hosted DB SDK — instructions for each are in the file's
comment block. Until you fill this in, `db.isConfigured` stays `false` and
every `lib/server/*.ts` function falls back to reading `features/*/mock.ts`.

### 6. `prisma/schema.prisma` (optional)
A starting schema (`Executive`, `Meeting`, `Message`, `Vote`, `Report`) if
you go the Prisma route in step 5. Delete this folder if you pick anything
else.

### 7. `lib/server/*.ts` — one file per domain
`meetings.ts`, `reports.ts`, `executives.ts`, `history.ts`. Each has a
`db.isConfigured` branch with a `// TODO` showing the real query to write.
These are the **only** files route handlers call — route handlers never
import `mock.ts` or `db` directly.

### 8. `app/api/**/route.ts` — already wired, shouldn't need edits
```
POST /api/pitches                → create a meeting, seat executives
GET  /api/meetings/[id]           → live session state + transcript
POST /api/meetings/[id]/debate    → advance the debate by one executive turn
GET  /api/reports                 → list
GET  /api/reports/[id]            → full report detail
GET  /api/executives              → roster
GET  /api/history                 → version timeline
GET  /api/health                  → { status, dbConfigured, timestamp }
```
Request/response shapes are all in `types/api.ts` — change a field there
and both the route handler and any `service.ts` consuming it get a type
error if they fall out of sync.

### 9. `features/reports/service.ts` — copy this pattern to other features
The one example `service.ts` (fetch-based, calls `/api/reports`). **Not
wired into any page yet** — `app/(app)/reports/page.tsx` and
`.../reports/[id]/page.tsx` still import from `./mock` so the demo keeps
working. Once `/api/reports` returns real data, add the same `service.ts`
file to `features/dashboard/`, `features/boardroom/`, `features/executives/`,
`features/history/`, `features/meeting-new/` — and switch each page's
import from `./mock` to `./service`.

## What "done" looks like, feature by feature

| Feature | Today | Once wired |
|---|---|---|
| `meeting-new` | Form submits, `router.push("/boardroom")` after a fake delay | `PitchForm` calls `POST /api/pitches`, routes using the returned `meetingId` |
| `boardroom` | Static mock transcript/votes | Page polls `GET /api/meetings/[id]`, calls `POST /api/meetings/[id]/debate` to advance |
| `reports` | Reads `mock.ts` | Reads `service.ts` → `/api/reports` |
| `executives` | Reads `mock.ts` | Reads `service.ts` → `/api/executives` |
| `history` | Reads `mock.ts` | Reads `service.ts` → `/api/history` |

## A note on the in-memory meeting store

`lib/server/meetings.ts` keeps created meetings in a `Map` until `db.ts`
is configured — this resets on every server restart/deploy and won't work
across multiple server instances. It exists only so `POST /api/pitches` →
`GET /api/meetings/[id]` is testable end-to-end before a real database is
in place. Don't ship this to a multi-instance production deploy.
