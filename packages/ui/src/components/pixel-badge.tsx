'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { factionNames, type FactionName } from '@gigaverse/tokens'

const PIXEL_Y = 'border-y-[4px]'
const PIXEL_X = '-mx-[4px] border-x-[4px]'

export const pixelBadgeVariants = cva(
  'relative inline-flex items-center gap-1.5 rounded-none font-bitcell tracking-[2px] uppercase px-2.5 py-0.5 text-[12px] ' +
    PIXEL_Y,
  {
    variants: {
      variant: {
        default: 'bg-giga-panel border-giga-border text-giga-muted',
        gold: 'bg-giga-gold-grad text-giga-button-text border-giga-gold',
        cyan: 'bg-giga-teal/15 text-giga-cyan border-giga-cyan/60',
        green: 'bg-giga-green/15 text-giga-green border-giga-green/60',
        live: 'bg-giga-live-bg text-giga-live-text border-giga-live',
        rarity: 'border',
        faction: 'text-white',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

type RarityTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'relic' | 'giga'

export interface PixelBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pixelBadgeVariants> {
  rarity?: RarityTier
  faction?: FactionName
}

const rarityBorderClass: Record<RarityTier, string> = {
  common: 'border-rarity-common/60',
  uncommon: 'border-rarity-uncommon/60',
  rare: 'border-rarity-rare/60',
  epic: 'border-rarity-epic/60',
  legendary: 'border-rarity-legendary/60',
  relic: 'border-rarity-relic/60',
  giga: 'border-rarity-giga/60',
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

export const PixelBadge = React.forwardRef<HTMLSpanElement, PixelBadgeProps>(
  ({ className, variant, rarity, faction, children, ...props }, ref) => {
    const resolvedClass =
      variant === 'rarity' && rarity
        ? rarityTextClass[rarity]
        : variant === 'faction' && faction
          ? factionClass[faction]
          : undefined

    const xBorderColor =
      variant === 'gold'
        ? 'border-giga-gold'
        : variant === 'cyan'
          ? 'border-giga-cyan/60'
          : variant === 'green'
            ? 'border-giga-green/60'
            : variant === 'live'
              ? 'border-giga-live'
              : variant === 'rarity' && rarity
                ? rarityBorderClass[rarity]
                : variant === 'faction' && faction
                  ? `border-faction-${faction}`
                  : 'border-giga-border'

    return (
      <span
        ref={ref}
        className={cn(pixelBadgeVariants({ variant }), resolvedClass, className)}
        {...props}
      >
        <span
          className={cn('absolute inset-0 pointer-events-none', PIXEL_X, xBorderColor)}
          aria-hidden
        />
        {children}
      </span>
    )
  },
)
PixelBadge.displayName = 'PixelBadge'
