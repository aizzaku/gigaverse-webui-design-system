export const colors = {
  navy: '#060b14',
  panel: '#081420',
  card: '#0a1e2e',
  darkCard: '#070d18',
  overlay: '#02060c',
  borderDark: '#0c2030',
  border: 'rgba(4,131,171,0.2)',

  heading: '#e0e0e0',
  muted: '#7a8a9e',
  buttonText: '#3a1e00',
  gray200: '#e5e7eb',
  red400: '#f87171',

  gold: '#F5C563',
  goldLight: '#F5D06B',
  goldDark: '#E89B0C',

  teal: '#0483AB',
  cyan: '#02C7D7',
  green: '#3dd94e',
  greenLight: '#78FD95',
  sky: '#4FC3F7',
  lavender: '#CC86CB',
  discord: '#7C3AED',

  live: '#ff7a7a',
  liveBg: '#5a1111',
  liveText: '#ffb2b2',
} as const

export type ColorToken = keyof typeof colors
