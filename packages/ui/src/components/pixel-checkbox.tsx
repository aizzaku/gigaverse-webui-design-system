'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '../lib/cn'

const PIXEL_Y = 'border-y-[4px]'
const PIXEL_X = '-mx-[4px] border-x-[4px]'

export const PixelCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer group relative h-5 w-5 shrink-0 rounded-none bg-giga-panel/70',
      PIXEL_Y,
      'border-giga-teal/50',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:border-giga-gold data-[state=checked]:bg-giga-gold-grad',
      'data-[state=checked]:text-giga-button-text',
      className,
    )}
    {...props}
  >
    {/* pixel side borders — group-data mirrors checked state from Root */}
    <span
      className={cn(
        'absolute inset-0 pointer-events-none',
        PIXEL_X,
        'border-giga-teal/50',
        'group-data-[state=checked]:border-giga-gold',
      )}
      aria-hidden
    />
    <CheckboxPrimitive.Indicator className="relative flex items-center justify-center">
      <Check className="h-3 w-3" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
PixelCheckbox.displayName = 'PixelCheckbox'
