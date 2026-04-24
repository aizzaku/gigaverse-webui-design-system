'use client'

import * as React from 'react'
import { cn } from '../lib/cn'

const TRACK_Y = 'border-y-[4px]'
const TRACK_X = '-mx-[4px] border-x-[4px]'

export interface PixelProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100 */
  value: number
  /** Show animated glow on the fill bar */
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
        {/* pixel side borders for track */}
        <div
          className={cn('absolute inset-0 pointer-events-none', TRACK_X, 'border-giga-border')}
          aria-hidden
        />
        {/* fill bar */}
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
