'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const PIXEL_Y = 'border-y-[6px]'
const PIXEL_X = '-mx-[6px] border-x-[6px]'

export const pixelCardVariants = cva(
  'relative rounded-none font-bitcell text-white ' + PIXEL_Y,
  {
    variants: {
      variant: {
        standard: 'border-giga-teal/60 bg-giga-dark-card/85',
        gold: 'border-giga-gold bg-giga-dark-card/85',
        recessed: 'border-giga-border/50 bg-giga-dark-card/50',
        stat: 'border-giga-teal/30 bg-giga-dark-card/92',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-6',
      },
    },
    defaultVariants: { variant: 'standard', padding: 'md' },
  },
)

export interface PixelCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelCardVariants> {}

export const PixelCard = React.forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, variant, padding, children, ...props }, ref) => {
    const borderColor =
      variant === 'gold'
        ? 'border-giga-gold'
        : variant === 'recessed'
          ? 'border-giga-border/50'
          : variant === 'stat'
            ? 'border-giga-teal/30'
            : 'border-giga-teal/60'

    return (
      <div ref={ref} className={cn(pixelCardVariants({ variant, padding }), className)} {...props}>
        <div
          className={cn('absolute inset-0 pointer-events-none', PIXEL_X, borderColor)}
          aria-hidden
        />
        {children}
      </div>
    )
  },
)
PixelCard.displayName = 'PixelCard'

export const PixelCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col gap-1', className)} {...props} />
))
PixelCardHeader.displayName = 'PixelCardHeader'

export const PixelCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-[20px] text-giga-heading tracking-wide', className)}
    {...props}
  />
))
PixelCardTitle.displayName = 'PixelCardTitle'

export const PixelCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-[14px] text-giga-muted', className)} {...props} />
))
PixelCardDescription.displayName = 'PixelCardDescription'

export const PixelCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('mt-3', className)} {...props} />
))
PixelCardContent.displayName = 'PixelCardContent'

export const PixelCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('mt-4 flex items-center gap-4', className)} {...props} />
))
PixelCardFooter.displayName = 'PixelCardFooter'
