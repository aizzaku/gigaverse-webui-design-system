# @gigaverse/tokens — Token Reference

All values are available as JS constants and as Tailwind utilities via `gigaversePreset`.

## Colors — core palette

| Token | Hex | Tailwind |
|---|---|---|
| navy | `#060b14` | `bg-giga-navy` |
| panel | `#081420` | `bg-giga-panel` |
| card | `#0a1e2e` | `bg-giga-card` |
| dark-card | `#070d18` | `bg-giga-dark-card` |
| overlay | `#02060c` | `bg-giga-overlay` (use at `/90`) |
| border | `rgba(4,131,171,0.2)` | `border-giga-border` |
| border-dark | `#0c2030` | `border-giga-border-dark` |

## Colors — text

| Token | Hex | Tailwind |
|---|---|---|
| heading | `#e0e0e0` | `text-giga-heading` |
| muted | `#7a8a9e` | `text-giga-muted` |
| button-text | `#3a1e00` | `text-giga-button-text` |

## Colors — accents

| Token | Hex | Tailwind |
|---|---|---|
| gold | `#F5C563` | `bg-giga-gold` / `text-giga-gold` |
| gold-light | `#F5D06B` | gradient top stop |
| gold-dark | `#E89B0C` | gradient bottom stop |
| teal | `#0483AB` | `bg-giga-teal` |
| cyan | `#02C7D7` | `text-giga-cyan` |
| green | `#3dd94e` | `bg-giga-green` |
| green-light | `#78FD95` | `text-giga-green-light` |
| sky | `#4FC3F7` | Dungeons accent |
| lavender | `#CC86CB` | Athena/Market accent |
| discord | `#7C3AED` | Discord brand |

## Colors — status (live/combat)

| Token | Hex |
|---|---|
| live | `#ff7a7a` |
| live-bg | `#5a1111` |
| live-text | `#ffb2b2` |

## Factions — `bg-faction-<name>` / `border-faction-<name>` / `text-faction-<name>`

```
crusader  primary #C32454  light #FA4D4D
overseer  primary #EB4F36  light #EB8575
athena    primary #9026CD  light #CC86CB
archon    primary #0383AC  light #88FFEB
foxglove  primary #229062  light #78FD95
chobo     primary #C7DCD0  light #FFFFFF
summoner  primary #FEC733  light #FFE066
gigus     primary #562344  light #A85E8E
```

For shiny faction surfaces use `factionShinyGradient(name)` — returns a 4-stop
metallic gradient (light / light / primary / darkened-primary) that pairs with
`shadow-giga-bevel` + the shimmer `after` overlay.

## Rarity tiers

```
common    #E6E6E6
uncommon  #4DCC4D
rare      #4D4DFF
epic      #CC33CC
legendary #FFCC00
relic     #CC4D00
giga      #FFCC33
```

## Gradients (Tailwind classes)

| Class | Value |
|---|---|
| `bg-giga-gold-grad` | 4-stop gold CTA gradient (`#ffe070 → #c08010`) |
| `bg-giga-gold-accept-grad` | 2-stop accept-pill (`#F5D06B → #E89B0C`) |
| `bg-giga-progress-grad` | gold → teal progress fill |
| `bg-giga-divider` | teal-centered horizontal divider |
| `bg-giga-shimmer` | diagonal shimmer overlay (120deg) |
| `bg-giga-modal-teal-header` | teal modal header gradient |
| `bg-giga-modal-gold-header` | gold modal header gradient |

JS helpers: `gradients.gold`, `gradients.goldAccept`, `factionGradient(name)`, `factionShinyGradient(name)`, `shade(hex, amount)`.

## Shadows

- `shadow-giga-bevel` — `inset 0 1px 0 rgba(255,245,204,0.45), 0 2px 0 0 rgba(0,0,0,0.4)`
- `shadow-giga-pip-gold` — `0 0 10px rgba(245,197,99,0.5)`
- `shadow-giga-pip-cyan` — `0 0 10px rgba(2,199,215,0.45)`
- `shadow-giga-pip-green` — `0 0 10px rgba(61,217,78,0.45)`
- `shadow-giga-pip-live` — `0 0 10px rgba(255,122,122,0.5)`
- `shadow-giga-modal-cyan` / `shadow-giga-modal-gold` — subtle ambient glow on modals

## Radii

| Class | Size |
|---|---|
| `rounded-giga-sm` | 4px |
| `rounded-giga-md` | 6px (CTA buttons) |
| `rounded-giga` | 8px (modals, inputs) |
| `rounded-giga-xl` | 12px (cards) |
| `rounded-giga-strip` | 14px (equipment strip) |
| `rounded-giga-2xl` | 16px (video, population boxes) |
| `rounded-giga-3xl` | 20px (large section panels) |

## Typography

Fonts:

- `font-bitcell` — **Bitcell** with VT323 fallback. All headings, labels, buttons, nav. **Always uppercase + `tracking-[2px]` or wider.**
- `font-m5x7` — **m5x7** with VT323 fallback. Body, descriptions, prose. Mixed case.
- `font-vt323` — explicit VT323 slot.

Font files: drop `Bitcell.woff2` and `m5x7.woff2` at `/public/fonts/` in the
consuming app. If absent, the `@font-face` rules silently fall through to
VT323 (loaded from Google Fonts via `<link>`).

### Font link (Google Fonts fallback)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=VT323&display=swap" />
```

### Responsive size tokens

Token IDs (available as Tailwind `text-*` utilities, e.g. `text-heroH1Md`):

- Hero H1: `heroH1` / `heroH1Sm` / `heroH1Md` / `heroH1Xl` / `heroH12xl`
- Section H2: `sectionH2` / `sectionH2Sm` / `sectionH2Md` / `sectionH22xl`
- Hero subtitle: `heroSubtitle` / `heroSubtitleMd` / `heroSubtitle2xl`
- CTA H2: `ctaH2` / `ctaH2Md` / `ctaH22xl`
- Paragraph: `paragraph` / `paragraphMd` / `paragraph2xl`
- Description: `description` / `descriptionLg` / `description2xl`
- Feature item: `featureItem` / `featureItem2xl`
- Legal body: `legalBody` / `legalBodySm`
- Section label: `sectionLabel` / `sectionLabelSm` / `sectionLabel2xl`
- Stat label: `statLabel` / `statLabelSm` / `statLabel2xl`
- Stat value: `statValue` / `statValueMd` / `statValue2xl`
- Nav link: `navLink` / `navLinkXl` / `navLink2xl`

Or just use arbitrary values: `text-[42px] leading-[0.9] tracking-[2px]`.

## Motion (Framer Motion presets) — `import ... from '@gigaverse/tokens'`

Entrance variants (two-state: hidden → visible):

```ts
import { variants } from '@gigaverse/tokens'

variants.fadeUp         // y: 20 → 0 + fade
variants.fadeUpFar      // y: 30 → 0 + fade (emphasized)
variants.fadeIn         // opacity only
variants.slideInLeft    // x: -30 → 0
variants.slideInRight   // x: 30 → 0
variants.scaleIn        // scale: 0.8 → 1
variants.crtReveal      // blur + brightness CRT-style
```

Content-swap variants (three-state: use with `<AnimatePresence mode="wait">`):

```ts
import { swapVariants } from '@gigaverse/tokens'

swapVariants.crossfade       // opacity
swapVariants.slideSwap       // x slide swap
swapVariants.crtRevealSwap   // CRT reveal with exit
swapVariants.modalIn         // scale + y for modals
swapVariants.spriteReveal    // sprite scale-in
```

Transition presets:

```ts
import { transitions } from '@gigaverse/tokens'

transitions.section    // 0.5s easeOut
transitions.column     // 0.6s easeOut
transitions.card       // 0.4s easeOut
transitions.thumb      // 0.3s easeOut
transitions.crt        // 0.5s easeOut
transitions.crtExit    // 0.6s easeIn
transitions.cycle      // 0.4s easeInOut
```

Springs:

```ts
import { SPRING, SPRING_SOFT, springs } from '@gigaverse/tokens'

SPRING       // stiffness: 400, damping: 30 — nav tabs, carousel
SPRING_SOFT  // stiffness: 300, damping: 30 — tweet slides
```

Constants: `STAGGER` (`0.08`), `INVIEW_MARGIN` (`'-100px'`), `SHIMMER_DURATION` (`2.8`).

Decorative loops: `loops.statFlicker`, `loops.statGlitch`.

### Usage

```tsx
import { motion } from 'motion/react'
import { variants, transitions, STAGGER } from '@gigaverse/tokens'

<motion.section
  variants={variants.fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  transition={{ ...transitions.section, delay: STAGGER * 2 }}
/>
```
