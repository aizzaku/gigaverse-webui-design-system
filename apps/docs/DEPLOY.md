# Hosting Gigaverse UI docs on GitHub Pages

The docs app can produce a fully static site (plain HTML + JS, no Node server
required) that you can push to any GitHub Pages repo.

## One-time setup

1. **Pick a host pattern:**
   - **User / org site** (`<user>.github.io` or `<org>.github.io`): leave
     `BASE_PATH` empty.
   - **Project site** (`<user>.github.io/gigaverse-ui`): set
     `BASE_PATH=/gigaverse-ui` (match your repo name).

2. **Enable GitHub Pages** on the target repo → Settings → Pages →
   Source: *Deploy from branch* → `gh-pages` / `root` (or `docs/` inside
   `main` — either works).

## Build

From the monorepo root:

```sh
# Build tokens + UI + registry first so the docs consume fresh workspace packages.
pnpm --filter @gigaverse/tokens build
pnpm --filter @gigaverse/ui build
pnpm --filter @gigaverse/registry build

# Static export (writes apps/docs/out/).
pnpm --filter @gigaverse/docs build:export
```

If hosting under a subpath:

```sh
BASE_PATH=/gigaverse-ui pnpm --filter @gigaverse/docs build:export
```

## Deploy options

### Option A — `gh-pages` branch on the same repo

```sh
cd apps/docs
npx gh-pages -d out -b gh-pages
```

(Install once: `pnpm add -Dw gh-pages`.)

### Option B — mirror `out/` to a separate repo

```sh
cd apps/docs/out
git init -b main
git remote add origin git@github.com:<org>/<repo>.git
git add . && git commit -m "Publish Gigaverse UI docs"
git push --force origin main
```

### Option C — move `out/` into `docs/` on main

Copy `apps/docs/out/` into a `docs/` folder on `main` and point GitHub Pages
at `main` / `/docs`. Cleaner if you want the site tied to a specific commit.

## What ships

Every route in `/app` is pre-rendered to HTML:

- `/` — home with categorized index
- `/all/` — **single-page showcase of every component** (share this link)
- `/docs/<slug>/` — 44 component pages (Preview / Usage / Install / Source tabs)
- `/patterns/<slug>/` — 8 composition demos
- `/r/<name>/` — registry JSON (also available as `/r/<name>.json` via the
  static files mirror)

## Caveats

- The `@axe-core/react` dev-only overlay auto-disables in production builds.
- The `/r/[name]` route is pre-baked for every entry in `public/r/`; if you
  add a new component, rebuild both `@gigaverse/registry` and
  `@gigaverse/docs` before publishing.
