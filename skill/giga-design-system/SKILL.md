---
name: giga-design-system
description: Scaffold Gigaverse-styled React projects. Installs @gigaverse/ui + @gigaverse/tokens, wires Tailwind and fonts, adds individual components from the shadcn-style registry, and scaffolds complete compositions (login modal, faction select, equipment grid, landing hero, etc.). Use when the user says "scaffold a Gigaverse project", "add gigaverse component X", or "build a gigaverse <pattern>".
---

# giga-design-system

This skill scaffolds and extends Gigaverse-styled React projects. It is the **authoring** counterpart to `giga-this-ui` — this one **builds Gigaverse-native apps from scratch**, whereas `giga-this-ui` retheme **existing** projects to match the Gigaverse aesthetic.

## What this skill can do

Three commands, all are additive — they only write/patch files, they never delete application code.

1. **`/giga-design-system init`** — bootstrap a React project (Next.js or Vite) with Gigaverse UI:
   - Install `@gigaverse/ui`, `@gigaverse/tokens`, `tailwindcss`, `tailwindcss-animate`
   - Write `tailwind.config.ts` with the `gigaverse-preset`
   - Append VT323 `<link>` to the app's root layout / `index.html`
   - Create `components.json` pointing at the Gigaverse registry URL so `npx shadcn add` works

2. **`/giga-design-system add <names...>`** — add one or more components from the registry:
   - Accepts friendly names: `button`, `dialog`, `faction-badge`, `giga-primitives`
   - Runs `npx shadcn@latest add <registry-url>/<name>.json` for each
   - Falls back to writing via fetch+file if `shadcn` CLI unavailable

3. **`/giga-design-system compose <pattern>`** — scaffold a complete UX composition:
   - Patterns live in `patterns/` (see `references/patterns.md`)
   - `login-modal`, `faction-select`, `equipment-grid`, `rarity-inventory`, `status-hud`, `landing-hero`, `leaderboard-table`, `settings-sheet`
   - Each pattern is a tsx template wired to library components; drop into any page

## When to invoke

Trigger on these user phrases (or their intent):
- "Set up a Gigaverse UI project"
- "Add the [button/dialog/form] component"
- "Scaffold a faction-select page"
- "Build me a Gigaverse landing hero"
- "Give me a login modal that looks like Gigaverse"
- "Install @gigaverse/ui here"

Do **not** invoke this skill when:
- The user asks to re-theme an existing non-Gigaverse project → use `giga-this-ui` instead.
- The user asks about what Gigaverse *is* or game mechanics → answer directly, don't scaffold.
- The user wants to edit the `@gigaverse/ui` library itself → edit `packages/ui/src/components/` in this monorepo.

## How to execute

### Command 1: init

1. Detect project framework by checking for `next.config.*`, `vite.config.*`, or `package.json` `dependencies` for `next` / `vite`. If neither: ask the user.
2. Run:
   ```bash
   pnpm add @gigaverse/ui @gigaverse/tokens
   pnpm add -D tailwindcss tailwindcss-animate postcss autoprefixer
   ```
   (swap to `npm i` / `yarn add` based on `pnpm-lock.yaml` / `yarn.lock` / `package-lock.json`)
3. Write `tailwind.config.ts` (see `references/install-snippets.md` → *tailwind-preset*)
4. Write `postcss.config.js` if missing
5. Write `app/globals.css` (Next) or `src/index.css` (Vite) with `@tailwind base/components/utilities` + VT323 import
6. Append the VT323 `<link rel="preconnect">` + `<link rel="stylesheet">` to the root layout (Next `app/layout.tsx`) or `index.html` (Vite)
7. Write `components.json` using snippet in `references/install-snippets.md` → *components-json*
8. Print a "next steps" summary with two sample commands:
   - `/giga-design-system add button dialog`
   - `/giga-design-system compose landing-hero`

### Command 2: add

For each name passed:
1. Normalize to registry slug (lowercase, kebab-case). `factionBadge` → `faction-badge`.
2. If a `components.json` exists and points at the Gigaverse registry, run:
   ```bash
   npx shadcn@latest add <slug>
   ```
3. Otherwise fetch `{REGISTRY_URL}/r/<slug>.json`, parse, write each file in `files[]` to `components/ui/<file>`, run install for anything in `dependencies` that isn't already installed.
4. Recurse registry dependencies (e.g. `toggle-group` needs `toggle`; `form` needs `label`).

### Command 3: compose

1. Look up `<pattern>` in `references/patterns.md`.
2. Ensure all components the pattern uses are present — auto-invoke *Command 2: add* for any missing ones.
3. Write the composition file to `components/patterns/<pattern>.tsx` (Next) or `src/patterns/<pattern>.tsx` (Vite).
4. Report the path + a one-line usage hint.

## Registry URL

Default: `https://ui.gigaverse.gg` (production).
Local dev default: `http://localhost:3333`.
Respect an env override `GIGAVERSE_UI_REGISTRY` if set.

## References

- [components.md](references/components.md) — full catalog of every registry entry with props
- [tokens.md](references/tokens.md) — color / typography / motion token reference
- [patterns.md](references/patterns.md) — available compose patterns + descriptions
- [install-snippets.md](references/install-snippets.md) — Tailwind preset, components.json, VT323 link

## What NOT to do

- Do **not** modify existing user application code beyond the root layout / css import.
- Do **not** overwrite files silently — if a target exists, diff and ask.
- Do **not** commit.
- Do **not** invoke on a repo that already has `@gigaverse/ui` imports unless the user explicitly asks to re-init.
