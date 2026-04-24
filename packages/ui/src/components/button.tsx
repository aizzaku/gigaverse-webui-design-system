'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const buttonBase =
  'inline-flex items-center justify-center font-bitcell tracking-[2px] uppercase cursor-pointer ' +
  'transition-colors transition-opacity transition-transform ' +
  'active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-giga-navy'

export const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      primary:
        'relative overflow-hidden border-2 border-giga-gold text-giga-button-text font-bold ' +
        'bg-giga-gold-grad shadow-giga-bevel hover:opacity-90 ' +
        'focus-visible:ring-giga-gold/40',
      secondary:
        'rounded-giga-md border border-giga-cyan bg-giga-panel/80 text-giga-cyan ' +
        'hover:bg-giga-teal/10 focus-visible:ring-giga-cyan/40',
      tertiary:
        'text-giga-muted bg-transparent border-0 hover:text-giga-heading ' +
        'focus-visible:text-giga-heading focus-visible:underline focus-visible:underline-offset-4',
      ghost:
        'rounded-full border border-giga-border bg-giga-dark-card/80 text-giga-muted ' +
        'hover:border-giga-cyan/50 hover:text-giga-heading ' +
        'focus-visible:ring-giga-cyan/40',
      acceptPill:
        'rounded-full border-2 border-giga-gold bg-giga-gold-accept-grad text-giga-button-text ' +
        'hover:opacity-90 focus-visible:ring-giga-gold/40',
      tealPill:
        'rounded-full border border-giga-cyan/70 bg-giga-teal/10 text-giga-cyan ' +
        'hover:bg-giga-teal/20 focus-visible:ring-giga-cyan/40',
      option:
        'flex-col items-start text-left rounded-giga border-2 border-giga-teal/30 ' +
        'bg-giga-panel/60 text-white hover:border-giga-cyan/60 ' +
        'focus-visible:ring-giga-cyan/40',
      destructive:
        'rounded-giga-md border border-giga-live/70 bg-giga-live-bg/60 text-giga-live-text ' +
        'hover:bg-giga-live-bg/80 focus-visible:ring-giga-live/40',
    },
    size: {
      sm: 'h-8 px-5 text-[16px] tracking-[1.8px]',
      md: 'h-10 px-6 text-[16px]',
      lg: 'h-12 px-8 text-[20px] sm:text-[24px] sm:tracking-[3px] md:px-12',
      pill: 'h-7 px-4 text-[10px] tracking-[1.6px]',
      optionBox: 'min-h-[72px] px-5 py-3.5 text-[16px] tracking-wide normal-case',
    },
    shape: {
      md: 'rounded-giga-md',
      lg: 'rounded-giga',
      full: 'rounded-full',
      none: 'rounded-none',
    },
  },
  compoundVariants: [
    { variant: 'primary', shape: 'md', class: 'rounded-giga-md' },
    { variant: 'tertiary', class: 'h-auto px-0' },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    shape: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, shape }), className)}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
