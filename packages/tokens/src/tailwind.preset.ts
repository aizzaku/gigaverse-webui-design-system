import type { Config } from 'tailwindcss'
import { colors } from './colors'
import { factions } from './factions'
import { rarities } from './rarities'
import { fontFamilies, fontSizes } from './typography'
import { radii } from './radii'
import { shadows } from './shadows'
import { gradients } from './gradients'
import { keyframes, animations } from './keyframes'

const factionColors = Object.fromEntries(
  Object.entries(factions).flatMap(([name, { primary, light }]) => [
    [`faction-${name}`, primary],
    [`faction-${name}-light`, light],
  ]),
)

const rarityColors = Object.fromEntries(
  Object.entries(rarities).map(([name, hex]) => [`rarity-${name}`, hex]),
)

export const gigaversePreset = {
  content: [],
  theme: {
    extend: {
      colors: {
        'giga-navy': colors.navy,
        'giga-panel': colors.panel,
        'giga-card': colors.card,
        'giga-dark-card': colors.darkCard,
        'giga-overlay': colors.overlay,
        'giga-border-dark': colors.borderDark,
        'giga-border': colors.border,
        'giga-heading': colors.heading,
        'giga-muted': colors.muted,
        'giga-button-text': colors.buttonText,
        'giga-gold': colors.gold,
        'giga-gold-light': colors.goldLight,
        'giga-gold-dark': colors.goldDark,
        'giga-teal': colors.teal,
        'giga-cyan': colors.cyan,
        'giga-green': colors.green,
        'giga-green-light': colors.greenLight,
        'giga-sky': colors.sky,
        'giga-lavender': colors.lavender,
        'giga-discord': colors.discord,
        'giga-live': colors.live,
        'giga-live-bg': colors.liveBg,
        'giga-live-text': colors.liveText,
        ...factionColors,
        ...rarityColors,
      },
      fontFamily: {
        bitcell: fontFamilies.bitcell as unknown as string[],
        m5x7: fontFamilies.m5x7 as unknown as string[],
        vt323: fontFamilies.vt323 as unknown as string[],
      },
      fontSize: fontSizes as unknown as Record<string, [string, { lineHeight?: string }]>,
      borderRadius: {
        giga: radii.lg,
        'giga-sm': radii.sm,
        'giga-md': radii.md,
        'giga-xl': radii.xl,
        'giga-strip': radii.strip,
        'giga-2xl': radii['2xl'],
        'giga-3xl': radii['3xl'],
      },
      boxShadow: {
        'giga-bevel': shadows.buttonBevel,
        'giga-pip-gold': shadows.pipGoldGlow,
        'giga-pip-cyan': shadows.pipCyanGlow,
        'giga-pip-green': shadows.pipGreenGlow,
        'giga-pip-live': shadows.pipLiveGlow,
        'giga-modal-cyan': shadows.modalCyan,
        'giga-modal-gold': shadows.modalGold,
      },
      backgroundImage: {
        'giga-gold-grad': gradients.gold,
        'giga-gold-pixel-grad': gradients.goldPixel,
        'giga-gold-accept-grad': gradients.goldAccept,
        'giga-progress-grad': gradients.progress,
        'giga-divider': gradients.sectionDivider,
        'giga-shimmer': gradients.shimmer,
        'giga-modal-teal-header': gradients.modalHeaderTeal,
        'giga-modal-gold-header': gradients.modalHeaderGold,
      },
      keyframes: keyframes as unknown as Record<string, Record<string, Record<string, string>>>,
      animation: {
        'giga-shimmer': animations.shimmer,
        'giga-progress-glow': animations.progressGlow,
        'giga-pingpong': animations.pingpong,
        'giga-pulse': animations.pulse,
      },
    },
  },
  plugins: [],
} satisfies Partial<Config>

export default gigaversePreset
