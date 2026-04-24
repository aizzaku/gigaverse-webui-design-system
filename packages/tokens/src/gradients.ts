import { factions, type FactionName } from './factions'

/**
 * Shade a hex color. `amount` is -1..1; negative darkens, positive lightens.
 * Used to synthesize metallic gradient stops for factions whose primary/light
 * pair is too close in value to produce visible depth (e.g. Summoner).
 */
export function shade(hex: string, amount: number): string {
  const m = hex.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  if (!m) return hex
  const [r, g, b] = [m[1], m[2], m[3]].map((c) => parseInt(c!, 16)) as [
    number,
    number,
    number,
  ]
  const adjust = (c: number) => {
    const v = amount < 0 ? c * (1 + amount) : c + (255 - c) * amount
    return Math.max(0, Math.min(255, Math.round(v)))
  }
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(adjust(r))}${toHex(adjust(g))}${toHex(adjust(b))}`
}

/**
 * Metallic 4-stop "shiny" gradient (light top / primary bottom with a hard
 * highlight break at 50%, plus a darkened bottom for depth). Modeled on the
 * gold PlayNowButton gradient.
 */
export function factionShinyGradient(name: FactionName): string {
  const { primary, light } = factions[name]
  const bottom = shade(primary, -0.22)
  return `linear-gradient(180deg, ${light} 0%, ${light} 48%, ${primary} 52%, ${bottom} 100%)`
}

/** Hard-stop version — top/bottom halves snap at exactly 50% (pixel art style). */
export function factionShinyPixelGradient(name: FactionName): string {
  const { primary, light } = factions[name]
  const bottom = shade(primary, -0.22)
  return `linear-gradient(180deg, ${light} 0%, ${light} 50%, ${primary} 50%, ${bottom} 100%)`
}

export const gradients = {
  gold: 'linear-gradient(180deg, #ffe070 0%, #f0c040 50%, #d8a020 50%, #c08010 100%)',
  goldPixel: 'linear-gradient(180deg, #ffe070 0%, #f0c040 50%, #d8a020 50%, #c08010 100%)',
  goldAccept: 'linear-gradient(180deg, #F5D06B 0%, #E89B0C 100%)',
  progress: 'linear-gradient(90deg, #F5C563, #0483AB)',
  sectionDivider:
    'linear-gradient(90deg, transparent 0%, rgba(4,131,171,0.4) 50%, transparent 100%)',
  shimmer:
    'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 48%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.25) 52%, transparent 70%)',
  modalHeaderTeal: 'linear-gradient(180deg, #0d2334 0%, #081420 52%, #060b14 100%)',
  modalHeaderGold: 'linear-gradient(180deg, #30220a 0%, #121820 52%, #060b14 100%)',
} as const

export function factionGradient(name: FactionName): string {
  const { primary, light } = factions[name]
  return `linear-gradient(180deg, ${light} 0%, ${primary} 100%)`
}
