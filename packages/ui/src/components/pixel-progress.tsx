'use client'

import * as React from 'react'
import { cn } from '../lib/cn'

const TRACK_Y = 'border-y-[4px]'
const TRACK_X = '-mx-[4px] border-x-[4px]'

// ---------------------------------------------------------------------------
// PixelProgress — smooth pixel-bordered progress bar
// ---------------------------------------------------------------------------

export interface PixelProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100 */
  value: number
  animated?: boolean
}

export const PixelProgress = React.forwardRef<HTMLDivElement, PixelProgressProps>(
  ({ className, value, animated = true, ...props }, ref) => {
    const clamped = Math.max(0, Math.min(100, value))

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          'relative rounded-none border-giga-border bg-giga-navy',
          TRACK_Y,
          className,
        )}
        {...props}
      >
        <div
          className={cn('absolute inset-0 pointer-events-none', TRACK_X, 'border-giga-border')}
          aria-hidden
        />
        <div
          className={cn(
            'relative h-full origin-left bg-giga-progress-grad transition-[width] duration-500 ease-out',
            animated && 'animate-giga-progress-glow',
          )}
          style={{ width: `${clamped}%` }}
        />
      </div>
    )
  },
)
PixelProgress.displayName = 'PixelProgress'

// ---------------------------------------------------------------------------
// PixelStepProgressBar — labeled step bar built on PixelProgress
// ---------------------------------------------------------------------------

export interface PixelStepProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: { label: string }[]
  current: number
}

export const PixelStepProgressBar = React.forwardRef<HTMLDivElement, PixelStepProgressBarProps>(
  ({ className, steps, current, ...props }, ref) => {
    const progress = steps.length <= 1 ? 100 : (current / (steps.length - 1)) * 100

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <PixelProgress value={progress} className="h-2 w-full" />
        <div className="mt-2 flex justify-between">
          {steps.map((s, i) => {
            const status = i < current ? 'complete' : i === current ? 'active' : 'pending'
            return (
              <span
                key={s.label + i}
                className={cn(
                  'font-bitcell text-[10px] tracking-[1.5px] uppercase',
                  status === 'complete' && 'text-giga-green-light',
                  status === 'active' && 'text-giga-cyan',
                  status === 'pending' && 'text-giga-muted/50',
                )}
              >
                {s.label}
              </span>
            )
          })}
        </div>
      </div>
    )
  },
)
PixelStepProgressBar.displayName = 'PixelStepProgressBar'

// ---------------------------------------------------------------------------
// PixelBlockProgress — segmented block bar (8bitcn health/XP bar style)
// Filled segments use the pixel gradient; empty segments are dark.
// Each block is itself pixel-bordered with a 2px hard border.
// ---------------------------------------------------------------------------

export interface PixelBlockProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Total number of blocks. */
  segments?: number
  /** How many blocks are filled (0–segments). */
  filled: number
  /** Color theme for filled blocks. */
  color?: 'gold' | 'cyan' | 'green' | 'live'
  /** Height class for each block. Defaults to h-5. */
  blockHeight?: string
}

const BLOCK_FILL: Record<NonNullable<PixelBlockProgressProps['color']>, string> = {
  gold: 'bg-giga-gold-pixel-grad border-giga-gold/60',
  cyan: 'bg-giga-cyan/80 border-giga-cyan/60',
  green: 'bg-giga-green/80 border-giga-green/60',
  live: 'bg-giga-live border-giga-live/70',
}

export const PixelBlockProgress = React.forwardRef<HTMLDivElement, PixelBlockProgressProps>(
  (
    { segments = 10, filled, color = 'gold', blockHeight = 'h-5', className, ...props },
    ref,
  ) => {
    const clampedFilled = Math.max(0, Math.min(segments, filled))

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={clampedFilled}
        aria-valuemin={0}
        aria-valuemax={segments}
        className={cn('flex gap-[3px]', className)}
        {...props}
      >
        {Array.from({ length: segments }, (_, i) => (
          <div
            key={i}
            className={cn(
              'flex-1 border-[2px] transition-colors duration-200',
              blockHeight,
              i < clampedFilled
                ? BLOCK_FILL[color]
                : 'bg-giga-navy border-giga-border/40',
            )}
          />
        ))}
      </div>
    )
  },
)
PixelBlockProgress.displayName = 'PixelBlockProgress'

// ---------------------------------------------------------------------------
// PixelLoadingBar — animated variant of PixelBlockProgress that cycles blocks
// ---------------------------------------------------------------------------

export interface PixelLoadingBarProps extends React.HTMLAttributes<HTMLDivElement> {
  segments?: number
  color?: PixelBlockProgressProps['color']
  blockHeight?: string
  /** Speed in ms per full cycle. Defaults to 1200. */
  speed?: number
}

export function PixelLoadingBar({
  segments = 10,
  color = 'gold',
  blockHeight = 'h-5',
  speed = 1200,
  className,
  ...props
}: PixelLoadingBarProps) {
  const [filled, setFilled] = React.useState(0)
  const [growing, setGrowing] = React.useState(true)

  React.useEffect(() => {
    const interval = Math.round(speed / segments)
    const id = setInterval(() => {
      setFilled((prev) => {
        if (growing) {
          if (prev >= segments) {
            setGrowing(false)
            return prev - 1
          }
          return prev + 1
        } else {
          if (prev <= 0) {
            setGrowing(true)
            return prev + 1
          }
          return prev - 1
        }
      })
    }, interval)
    return () => clearInterval(id)
  }, [segments, speed, growing])

  return (
    <PixelBlockProgress
      segments={segments}
      filled={filled}
      color={color}
      blockHeight={blockHeight}
      className={className}
      {...props}
    />
  )
}
