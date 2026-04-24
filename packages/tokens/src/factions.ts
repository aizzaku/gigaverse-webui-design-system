export const factions = {
  crusader: { primary: '#C32454', light: '#FA4D4D' },
  overseer: { primary: '#EB4F36', light: '#EB8575' },
  athena: { primary: '#9026CD', light: '#CC86CB' },
  archon: { primary: '#0383AC', light: '#88FFEB' },
  foxglove: { primary: '#229062', light: '#78FD95' },
  chobo: { primary: '#C7DCD0', light: '#FFFFFF' },
  summoner: { primary: '#FEC733', light: '#FFE066' },
  gigus: { primary: '#562344', light: '#A85E8E' },
} as const

export type FactionName = keyof typeof factions
export const factionNames = Object.keys(factions) as FactionName[]
