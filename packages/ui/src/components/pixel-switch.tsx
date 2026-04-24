'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '../lib/cn'

const TRACK_Y = 'border-y-[4px]'
const TRACK_X = '-mx-[4px] border-x-[4px]'

export const PixelSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      'group peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none',
      TRACK_Y,
      'border-giga-teal/50 bg-giga-panel/70 transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:border-giga-gold data-[state=checked]:bg-giga-gold-grad',
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        'absolute inset-0 pointer-events-none',
        TRACK_X,
        'border-giga-teal/50',
        'group-data-[state=checked]:border-giga-gold',
      )}
      aria-hidden
    />
    <SwitchPrimitives.Thumb
      className={cn(
        'relative pointer-events-none block h-4 w-4 rounded-none bg-giga-heading shadow-lg',
        'transition-transform duration-150',
        'data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-0.5',
        'data-[state=checked]:bg-giga-button-text',
      )}
    />
  </SwitchPrimitives.Root>
))
PixelSwitch.displayName = SwitchPrimitives.Root.displayName
