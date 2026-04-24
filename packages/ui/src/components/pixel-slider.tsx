'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../lib/cn'

const TRACK_Y = 'border-y-[4px]'
const TRACK_X = '-mx-[4px] border-x-[4px]'

export const PixelSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    {/* Track with pixel border */}
    <SliderPrimitive.Track
      className={cn(
        'relative h-2 w-full grow rounded-none bg-giga-panel',
        TRACK_Y,
        'border-giga-border',
      )}
    >
      {/* pixel side borders for track */}
      <span
        className={cn(
          'absolute inset-0 pointer-events-none rounded-none',
          TRACK_X,
          'border-giga-border',
        )}
        aria-hidden
      />
      <SliderPrimitive.Range className="absolute h-full bg-giga-gold-pixel-grad" />
    </SliderPrimitive.Track>

    {/* Square thumb with pixel border */}
    <SliderPrimitive.Thumb
      className={cn(
        'relative block h-5 w-5 rounded-none',
        'border-y-[4px] border-giga-gold bg-giga-gold-pixel-grad shadow-giga-bevel',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan',
        'disabled:pointer-events-none disabled:opacity-50',
      )}
    >
      {/* pixel side borders for thumb */}
      <span
        className={cn('absolute inset-0 pointer-events-none', TRACK_X, 'border-giga-gold')}
        aria-hidden
      />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
PixelSlider.displayName = SliderPrimitive.Root.displayName
