# `mock/`

Cross-feature mock data lives here — datasets more than one feature reads
(e.g. the shared list of 100 investors, referenced by both `features/reports`
and `features/pitch-deck`). Data used by only one feature belongs in that
feature's own `mock.ts` instead (see `features/README.md`).

**Nothing has been generated yet.** This folder is reserved for the
datasets described in the PRD's Mock Data section (200 startup ideas, 100
investors, 100 executive meetings, financial reports, competitor analysis,
pitch decks, SWOT reports) — those are built alongside the pages that
consume them, not ahead of time, so every field in the dataset maps to a
real prop on a real component.

## Conventions when data lands here

- One file per dataset: `mock/startups.ts`, `mock/investors.ts`,
  `mock/meetings.ts`.
- Export typed arrays using the shared types in `types/` or the relevant
  feature's `types.ts` — never inline `any[]`.
- Keep generation deterministic (fixed seed or hand-authored) so
  screenshots and Storybook-style previews don't shift between runs.
