# `features/`

Every route in the app owns a folder here: `dashboard`, `boardroom`,
`meeting-new`, `reports`, `market-research`, `financials`, `startup-health`,
`executives`, `pitch-deck`, `prd-generator`, `kanban`, `hackathon`,
`history`, `settings`, `landing`. Each currently follows this shape:

```
features/reports/
  components/       # feature-only UI, composed from components/ui and components/shared
  mock.ts           # realistic mock dataset
  types.ts          # this feature's domain types (Report, SwotItem, RiskMatrixRow, ...)
```

## Current simplification — read before adding a backend

Every component today imports directly from its feature's `mock.ts`. There
is no `service.ts` or `hooks/` layer yet because there's no backend to
abstract toward — adding one now would be indirection with nothing behind
it.

**When a real backend arrives**, introduce per feature:

```
features/reports/
  service.ts        # fetch/RSC calls — the only file that changes
  hooks/            # e.g. useReportFilters, if the feature needs client state beyond useState
```

and change component imports from `./mock` to `./service`. Nothing else
about a feature's folder should need to move.

## Rules

- Feature components may import from `components/ui`, `components/shared`,
  `hooks/`, and `lib/` freely. They should **not** import from another
  feature's folder — shared logic that two features need belongs in
  `components/shared`, `hooks/`, or `lib/` instead. (One accepted
  exception today: `/pricing` and `/about` reuse sections directly from
  `features/landing/components/` since they're the same marketing content
  surfaced on a second route — that's a deliberate reuse, not a new
  dependency direction to copy elsewhere.)
- Keep files small. If a feature's `components/` folder exceeds ~8 files,
  give it subfolders (e.g. `features/boardroom/components/transcript/`).
- `types.ts` should model what a future API response would look like where
  that's a natural fit (`ReportDetail`, `ExecutiveProfile`) — this is what
  lets `mock.ts` be swapped later without reshaping every consumer.
