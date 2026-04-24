'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const PIXEL_Y = 'border-y-[4px]'
const PIXEL_X = '-mx-[4px] border-x-[4px]'

const pixelButtonBase =
  'relative inline-flex items-center justify-center rounded-none font-bitcell tracking-[2px] uppercase cursor-pointer ' +
  'transition-colors transition-opacity ' +
  'active:translate-y-[2px] disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-giga-navy ' +
  PIXEL_Y

export const pixelButtonVariants = cva(pixelButtonBase, {
  variants: {
    variant: {
      primary:
        'border-giga-gold text-giga-button-text font-bold bg-giga-gold-grad shadow-giga-bevel ' +
        'hover:opacity-90 focus-visible:ring-giga-gold/40',
      secondary:
        'border-giga-cyan bg-giga-panel/80 text-giga-cyan ' +
        'hover:bg-giga-teal/10 focus-visible:ring-giga-cyan/40',
      ghost:
        'border-giga-border bg-giga-dark-card/80 text-giga-muted ' +
        'hover:border-giga-cyan/50 hover:text-giga-heading focus-visible:ring-giga-cyan/40',
      destructive:
        'border-giga-live/70 bg-giga-live-bg/60 text-giga-live-text ' +
        'hover:bg-giga-live-bg/80 focus-visible:ring-giga-live/40',
    },
    size: {
      sm: 'h-8 px-5 text-[16px] tracking-[1.8px]',
      md: 'h-10 px-6 text-[16px]',
      lg: 'h-12 px-8 text-[20px] sm:text-[24px] sm:tracking-[3px] md:px-12',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {
  asChild?: boolean
}

export const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const borderColor =
      variant === 'secondary'
        ? 'border-giga-cyan'
        : variant === 'ghost'
          ? 'border-giga-border'
          : variant === 'destructive'
            ? 'border-giga-live/70'
            : 'border-giga-gold'

    return (
      <Comp
        ref={ref}
        className={cn(pixelButtonVariants({ variant, size }), className)}
        {...props}
      >
        <div
          className={cn('absolute inset-0 pointer-events-none', PIXEL_X, borderColor)}
          aria-hidden
        />
        {children}
      </Comp>
    )
  },
)
PixelButton.displayName = 'PixelButton'
