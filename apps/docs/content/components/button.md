# Button

The Button is the foundational interactive surface in the Gigaverse design language. It ships 8 variants covering every CTA tier observed across the product: from the gold `primary` hero button down through secondary/teal pill utilities, faction-themed join buttons, and a live-red destructive variant.

## Variants

| Variant | Use for |
|---|---|
| `primary` | Primary gold CTA (no shimmer — use `ShimmerButton` for the animated PlayNow). |
| `secondary` | Outlined teal action. |
| `tertiary` | Text-only inline action. |
| `ghost` | Muted pill for tertiary chrome actions (decline, cancel). |
| `acceptPill` | Gold gradient pill for accept/agree flows. |
| `tealPill` | Tiny cyan pill for compact connect-style actions. |
| `option` | Full-width option-card button used in login flow step pickers. |
| `destructive` | Live-red action for irreversible operations. |

Sizes: `sm` / `md` / `lg` / `pill` / `optionBox`.

## Usage

```tsx
import { Button } from '@gigaverse/ui'

<Button variant="primary" size="lg">PLAY NOW</Button>
<Button variant="secondary">JOIN DISCORD</Button>
<Button variant="tertiary">VIEW DOCS</Button>
```

## Props

- `variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'acceptPill' | 'tealPill' | 'option' | 'destructive'`
- `size?: 'sm' | 'md' | 'lg' | 'pill' | 'optionBox'`
- `shape?: 'md' | 'lg' | 'full' | 'none'`
- `asChild?: boolean` — Render as the passed child (via Radix Slot). Use to turn a Next.js `<Link />` into a Button without wrapping.
- All standard HTML button props.

## Focus & states

- Per-variant focus ring color (gold for `primary`/`acceptPill`, cyan for `secondary`/`ghost`/`option`/`tealPill`, live-red for `destructive`).
- `active:scale-[0.98]` on all variants.
- `disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none`.
