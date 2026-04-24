export const rarities = {
  common: '#E6E6E6',
  uncommon: '#4DCC4D',
  rare: '#4D4DFF',
  epic: '#CC33CC',
  legendary: '#FFCC00',
  relic: '#CC4D00',
  giga: '#FFCC33',
} as const

export type RarityName = keyof typeof rarities
export const rarityOrder: RarityName[] = [
  'common',
  'uncommon',
  'rare',
  'epic',
  'legendary',
  'relic',
  'giga',
]
