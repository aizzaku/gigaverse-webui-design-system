'use client'

import * as React from 'react'
import { cn } from '../lib/cn'
import { factions, factionShinyPixelGradient, shade, type FactionName } from '@gigaverse/tokens'

const PIXEL_Y = 'border-y-[4px]'
const PIXEL_X = '-mx-[4px] border-x-[4px]'

function factionTextColor(name: FactionName): string {
  return shade(factions[name].primary, -0.85)
}

// ---------------------------------------------------------------------------
// PixelFactionBadge — faction chip with pixel borders + hard-stop gradient
// ---------------------------------------------------------------------------

export interface PixelFactionBadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  faction: FactionName
  selected?: boolean
  asButton?: boolean
}

export const PixelFactionBadge = React.forwardRef<HTMLButtonElement, PixelFactionBadgeProps>(
  ({ className, faction, selected, children, asButton = false, style, ...props }, ref) => {
    const Comp = asButton ? 'button' : ('span' as const)
    const { primary } = factions[faction]
    const text = factionTextColor(faction)

    return (
      <Comp
        ref={ref as never}
        aria-pressed={asButton ? selected : undefined}
        className={cn(
          'relative inline-flex items-center gap-2 rounded-none font-bitcell text-[13px] uppercase tracking-[2px] shadow-giga-bevel',
          'px-3 py-1.5',
          PIXEL_Y,
          'transition-all',
          selected && 'ring-2 ring-offset-2 ring-offset-giga-navy',
          asButton && 'cursor-pointer hover:brightness-110 focus-visible:outline-none',
          className,
        )}
        style={{
          background: factionShinyPixelGradient(faction),
          borderColor: primary,
          color: text,
          ...(selected ? { boxShadow: `0 0 20px ${primary}66` } : null),
          ...style,
        }}
        {...(props as object)}
      >
        <span
          className={cn('absolute inset-0 pointer-events-none', PIXEL_X)}
          style={{ borderColor: primary }}
          aria-hidden
        />
        <span className="relative z-10">{children ?? faction.toUpperCase()}</span>
      </Comp>
    )
  },
)
PixelFactionBadge.displayName = 'PixelFactionBadge'

// ---------------------------------------------------------------------------
// PixelFactionJoinButton — pixel-bordered faction CTA with hard-stop gradient
// ---------------------------------------------------------------------------

export interface PixelFactionJoinButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  faction: FactionName
}

export const PixelFactionJoinButton = React.forwardRef<
  HTMLButtonElement,
  PixelFactionJoinButtonProps
>(({ className, faction, style, children, ...props }, ref) => {
  const { primary } = factions[faction]
  const textColor = factionTextColor(faction)

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'relative rounded-none px-6 py-2 font-bitcell text-[16px] uppercase tracking-[1.5px] font-bold cursor-pointer shadow-giga-bevel',
        PIXEL_Y,
        'transition-opacity hover:opacity-90 active:translate-y-[2px]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-giga-navy',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        className,
      )}
      style={{
        background: factionShinyPixelGradient(faction),
        borderColor: primary,
        color: textColor,
        ...style,
      }}
      {...props}
    >
      <span
        className={cn('absolute inset-0 pointer-events-none', PIXEL_X)}
        style={{ borderColor: primary }}
        aria-hidden
      />
      <span className="relative z-10">{children ?? `JOIN ${faction.toUpperCase()}`}</span>
    </button>
  )
})
PixelFactionJoinButton.displayName = 'PixelFactionJoinButton'
