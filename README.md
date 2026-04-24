# Gigaverse WebUI Design System

`@gigaverse/ui` — shadcn-style component library for Gigaverse. React + Tailwind + Radix, styled in the Gigaverse visual language (VT323 pixel type, navy backgrounds, gold shimmer, 8-faction palette, 7-tier rarity).

## Packages

| Path | Purpose |
|---|---|
| `packages/tokens` | `@gigaverse/tokens` — colors, typography, motion, gradients, Tailwind preset |
| `packages/ui` | `@gigaverse/ui` — React components (NPM distribution) |
| `packages/registry` | shadcn registry builder — emits per-component JSON |
| `apps/docs` | Next.js docs site + registry host |

## Install (for consumers)

**NPM:**
```sh
pnpm add @gigaverse/ui @gigaverse/tokens
```

**shadcn registry:**
```sh
npx shadcn@latest add https://ui.gigaverse.gg/r/button.json
```

## Develop

```sh
pnpm install
pnpm dev        # runs all dev tasks
pnpm build      # builds all packages
pnpm typecheck  # type-checks all packages
```

## Reference

Design tokens are lifted from `existing base/*.html`. See [the plan](../../Users/Aiz/.claude/plans/i-want-to-build-graceful-ritchie.md) for roadmap.
