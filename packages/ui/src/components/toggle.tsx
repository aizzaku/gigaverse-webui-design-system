'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

export const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-giga-md text-[14px] font-bitcell tracking-[2px] uppercase ' +
    'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan ' +
    'disabled:pointer-events-none disabled:opacity-50 ' +
    'hover:bg-giga-panel hover:text-giga-heading ' +
    'data-[state=on]:bg-giga-teal/20 data-[state=on]:text-giga-cyan data-[state=on]:border-giga-cyan/60',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-giga-muted border border-transparent',
        outline:
          'border border-giga-border bg-giga-panel/60 text-giga-muted hover:bg-giga-teal/10',
      },
      size: {
        sm: 'h-8 px-2',
        md: 'h-10 px-3',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
)

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.Root.displayName
