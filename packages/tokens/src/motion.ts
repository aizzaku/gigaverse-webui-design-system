/**
 * Framer Motion presets for the Gigaverse design language.
 *
 * Consumers import these as drop-in `variants={...}` / `transition={...}`
 * values. The shapes are structural and compatible with `motion/react` without
 * importing framer-motion types here (keeps @gigaverse/tokens framework-free).
 */

// ---------------------------------------------------------------------------
// Spring presets
// ---------------------------------------------------------------------------

export const springs = {
  /** Nav tabs, carousel dots, carousel strip, shared-layout elements */
  default: { type: 'spring' as const, stiffness: 400, damping: 30 },
  /** Tweet slide transitions, softer element swaps */
  soft: { type: 'spring' as const, stiffness: 300, damping: 30 },
} as const

export type SpringName = keyof typeof springs
export const SPRING = springs.default
export const SPRING_SOFT = springs.soft

// ---------------------------------------------------------------------------
// Transition presets (duration + ease)
// ---------------------------------------------------------------------------

export const transitions = {
  /** Section entrance */
  section: { duration: 0.5, ease: 'easeOut' as const },
  /** Secondary column entrance (+0.15s delay typically added at the call site) */
  column: { duration: 0.6, ease: 'easeOut' as const },
  /** Card reveals */
  card: { duration: 0.4, ease: 'easeOut' as const },
  /** Thumbnail / small element reveals */
  thumb: { duration: 0.3, ease: 'easeOut' as const },
  /** CRT-style reveal */
  crt: { duration: 0.5, ease: 'easeOut' as const },
  /** CRT-style exit */
  crtExit: { duration: 0.6, ease: 'easeIn' as const },
  /** Auto-cycling content swaps (faction skins, etc.) */
  cycle: { duration: 0.4, ease: 'easeInOut' as const },
} as const

export type TransitionName = keyof typeof transitions

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const STAGGER = 0.08 as const
export const INVIEW_MARGIN = '-100px' as const
export const SHIMMER_DURATION = 2.8 as const

export const stagger = {
  delay: STAGGER,
  inviewMargin: INVIEW_MARGIN,
} as const

// ---------------------------------------------------------------------------
// Entrance variants (one-way: hidden → visible)
// ---------------------------------------------------------------------------

export const variants = {
  fadeUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeUpFar: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInLeft: {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideInRight: {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  crtReveal: {
    hidden: { filter: 'blur(6px) brightness(1.6)', opacity: 0 },
    visible: { filter: 'blur(0px) brightness(1)', opacity: 1 },
  },
} as const

export type VariantName = keyof typeof variants

// ---------------------------------------------------------------------------
// Content-swap variants (three states: hidden → visible → exit)
// Use with <AnimatePresence mode="wait">.
// ---------------------------------------------------------------------------

export const swapVariants = {
  crossfade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideSwap: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  crtRevealSwap: {
    hidden: { opacity: 0, filter: 'blur(6px) brightness(1.6)' },
    visible: { opacity: 1, filter: 'blur(0px) brightness(1)' },
    exit: { opacity: 0, filter: 'blur(6px) brightness(1.6)' },
  },
  modalIn: {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  },
  spriteReveal: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
} as const

export type SwapVariantName = keyof typeof swapVariants

// ---------------------------------------------------------------------------
// Decorative loops (for keyframe-driven motion, not entrance)
// ---------------------------------------------------------------------------

export const loops = {
  /** 4s opacity flicker (stat glitch) */
  statFlicker: {
    opacity: [1, 0.7, 1, 0.6, 1, 0.75, 1],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
  },
  /** 6s x-shift + hue rotate (stat glitch) */
  statGlitch: {
    x: [-3, 2, 1, -2, 0],
    filter: [
      'hue-rotate(0deg)',
      'hue-rotate(30deg)',
      'hue-rotate(-30deg)',
      'hue-rotate(15deg)',
      'hue-rotate(0deg)',
    ],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
  },
} as const

export type LoopName = keyof typeof loops
