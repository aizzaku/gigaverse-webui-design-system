'use client'

import * as React from 'react'
import { cn } from '../lib/cn'

export interface PixelBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tailwind border-color class applied to both axes. Defaults to teal. */
  borderClass?: string
  /** 6px notch (default) for cards/sections; 4px for compact components. */
  size?: 'sm' | 'md'
}

export const PixelBorder = React.forwardRef<HTMLDivElement, PixelBorderProps>(
  (
    { className, borderClass = 'border-giga-teal/60', size = 'md', children, ...props },
    ref,
  ) => {
    const yBorder = size === 'sm' ? 'border-y-[4px]' : 'border-y-[6px]'
    const xBorder = size === 'sm' ? '-mx-[4px] border-x-[4px]' : '-mx-[6px] border-x-[6px]'

    return (
      <div
        ref={ref}
        className={cn('relative rounded-none', yBorder, borderClass, className)}
        {...props}
      >
        <div
          className={cn('absolute inset-0 pointer-events-none', xBorder, borderClass)}
          aria-hidden
        />
        {children}
      </div>
    )
  },
)
PixelBorder.displayName = 'PixelBorder'
