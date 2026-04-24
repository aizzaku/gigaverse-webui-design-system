'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '../lib/cn'

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border',
      'border-giga-teal/50 bg-giga-panel/70 transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:border-giga-gold data-[state=checked]:bg-giga-gold-grad',
      className,
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-4 w-4 rounded-full bg-giga-heading shadow-lg transition-transform',
        'data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-0.5',
        'data-[state=checked]:bg-giga-button-text',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName
