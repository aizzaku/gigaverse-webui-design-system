export const radii = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  strip: '14px',
  '2xl': '16px',
  '3xl': '20px',
  full: '9999px',
} as const

export type RadiusToken = keyof typeof radii
