'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { factionNames, type FactionName } from '@gigaverse/tokens'

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-bitcell tracking-[2px] uppercase rounded-giga-md px-2.5 py-0.5 text-[12px]',
  {
    variants: {
      variant: {
        default: 'bg-giga-panel border border-giga-border text-giga-muted',
        gold: 'bg-giga-gold-grad text-giga-button-text border border-giga-gold',
        cyan: 'bg-giga-teal/15 text-giga-cyan border border-giga-cyan/60',
        green: 'bg-giga-green/15 text-giga-green border border-giga-green/60',
        live: 'bg-giga-live-bg text-giga-live-text border border-giga-live',
        rarity: 'border',
        faction: 'border-2 text-white',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

type RarityTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'relic' | 'giga'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  rarity?: RarityTier
  faction?: FactionName
}

const rarityTextClass: Record<RarityTier, string> = {
  common: 'text-rarity-common border-rarity-common/60 bg-rarity-common/10',
  uncommon: 'text-rarity-uncommon border-rarity-uncommon/60 bg-rarity-uncommon/10',
  rare: 'text-rarity-rare border-rarity-rare/60 bg-rarity-rare/15',
  epic: 'text-rarity-epic border-rarity-epic/60 bg-rarity-epic/15',
  legendary: 'text-rarity-legendary border-rarity-legendary/60 bg-rarity-legendary/10',
  relic: 'text-rarity-relic border-rarity-relic/60 bg-rarity-relic/15',
  giga: 'text-rarity-giga border-rarity-giga/60 bg-rarity-giga/10',
}

const factionClass: Record<FactionName, string> = Object.fromEntries(
  factionNames.map((n) => [n, `border-faction-${n} bg-faction-${n}/30`]),
) as Record<FactionName, string>

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, rarity, faction, ...props }, ref) => {
    const resolvedClass =
      variant === 'rarity' && rarity
        ? rarityTextClass[rarity]
        : variant === 'faction' && faction
          ? factionClass[faction]
          : undefined
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), resolvedClass, className)}
        {...props}
      />
    )
  },
)
Badge.displayName = 'Badge'