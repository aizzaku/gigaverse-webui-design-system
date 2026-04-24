'use client'

import * as React from 'react'
import { cn } from '../lib/cn'

// ---------------------------------------------------------------------------
// Pixel art chevron icons — pure SVG with crispEdges rendering.
// Each "pixel" in the staircase is a 2×2 unit rect.
// viewBox "0 0 8 14" → scales cleanly to any rem size.
// ---------------------------------------------------------------------------

export function PixelChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 14"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden
      className={className}
    >
      <rect x="0" y="0" width="2" height="14" />
      <rect x="2" y="2" width="2" height="10" />
      <rect x="4" y="4" width="2" height="6" />
      <rect x="6" y="6" width="2" height="2" />
    </svg>
  )
}

export function PixelChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 14"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden
      className={className}
    >
      <rect x="6" y="0" width="2" height="14" />
      <rect x="4" y="2" width="2" height="10" />
      <rect x="2" y="4" width="2" height="6" />
      <rect x="0" y="6" width="2" height="2" />
    </svg>
  )
}

export function PixelChevronUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden
      className={className}
    >
      <rect x="0" y="6" width="14" height="2" />
      <rect x="2" y="4" width="10" height="2" />
      <rect x="4" y="2" width="6" height="2" />
      <rect x="6" y="0" width="2" height="2" />
    </svg>
  )
}

export function PixelChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden
      className={className}
    >
      <rect x="0" y="0" width="14" height="2" />
      <rect x="2" y="2" width="10" height="2" />
      <rect x="4" y="4" width="6" height="2" />
      <rect x="6" y="6" width="2" height="2" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// PixelArrowButton — square nav button wrapping a pixel chevron
// ---------------------------------------------------------------------------

const PIXEL_Y = 'border-y-[4px]'
const PIXEL_X = '-mx-[4px] border-x-[4px]'

export interface PixelArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: 'left' | 'right' | 'up' | 'down'
}

export const PixelArrowButton = React.forwardRef<HTMLButtonElement, PixelArrowButtonProps>(
  ({ className, direction = 'right', children, ...props }, ref) => {
    const Icon =
      direction === 'left'
        ? PixelChevronLeft
        : direction === 'up'
          ? PixelChevronUp
          : direction === 'down'
            ? PixelChevronDown
            : PixelChevronRight

    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex h-10 w-10 items-center justify-center rounded-none',
          'border-giga-border bg-giga-dark-card/80 text-giga-gold',
          'transition-colors hover:border-giga-gold/70 hover:text-giga-gold hover:brightness-110',
          'disabled:opacity-40 disabled:pointer-events-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan',
          PIXEL_Y,
          className,
        )}
        {...props}
      >
        <div
          className={cn('absolute inset-0 pointer-events-none', PIXEL_X, 'border-giga-border')}
          aria-hidden
        />
        {children ?? <Icon className="h-3.5 w-3.5" />}
      </button>
    )
  },
)
PixelArrowButton.displayName = 'PixelArrowButton'
