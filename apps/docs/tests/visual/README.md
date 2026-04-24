# Visual regression — Gigaverse docs

Playwright-driven screenshot regression for `/docs/<slug>` pages. Screenshots
live under `tests/visual/docs.spec.ts-snapshots/` (committed to the repo) and
diff against the live dev server on port 3333.

## First-time setup

1. Install the Chromium browser binary used by Playwright:
   ```sh
   pnpm --filter @gigaverse/docs exec playwright install chromium
   ```
2. Start the docs dev server (must be running on :3333):
   ```sh
   pnpm --filter @gigaverse/docs dev
   ```
3. Establish the baseline:
   ```sh
   pnpm --filter @gigaverse/docs test:visual:update
   ```
   Commit the generated `*-snapshots/*.png` files.

## Regression run

```sh
pnpm --filter @gigaverse/docs test:visual
```

Fails on any pixel diff above `maxDiffPixelRatio: 0.01` (1%). Review the HTML
report it drops to reopen diffs side-by-side.

## Adding coverage

Extend `SNAPSHOT_SLUGS` in `docs.spec.ts`. Keep the list curated — baseline
churn balloons disk usage fast. Prefer adding entries only for components with
load-bearing visual logic (buttons, primitives, modals, factions).
