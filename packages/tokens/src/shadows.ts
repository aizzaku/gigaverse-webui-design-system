export const shadows = {
  buttonBevel: 'inset 0 1px 0 rgba(255,245,204,0.45), 0 2px 0 0 rgba(0,0,0,0.4)',
  pipGoldGlow: '0 0 10px rgba(245,197,99,0.5)',
  pipCyanGlow: '0 0 10px rgba(2,199,215,0.45)',
  pipGreenGlow: '0 0 10px rgba(61,217,78,0.45)',
  pipLiveGlow: '0 0 10px rgba(255,122,122,0.5)',
  progressGlowSm: '0 0 8px rgba(245,197,99,0.4)',
  progressGlowLg: '0 0 18px rgba(245,197,99,0.7)',
  modalCyan: '0 0 40px rgba(2,199,215,0.08)',
  modalGold: '0 0 40px rgba(245,197,99,0.12)',
} as const

export type ShadowToken = keyof typeof shadows
