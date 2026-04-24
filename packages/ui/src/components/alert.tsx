'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

export const alertVariants = cva(
  'relative w-full rounded-giga border p-4 font-bitcell [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 ' +
    '[&>svg+*]:pl-8 [&>svg]:h-5 [&>svg]:w-5',
  {
    variants: {
      variant: {
        default: 'border-giga-border bg-giga-panel/60 text-giga-heading',
        info: 'border-giga-cyan/40 bg-giga-cyan/5 text-giga-cyan [&>svg]:text-giga-cyan',
        success: 'border-giga-green/40 bg-giga-green/5 text-giga-green [&>svg]:text-giga-green',
        warning: 'border-giga-gold/40 bg-giga-gold/5 text-giga-gold [&>svg]:text-giga-gold',
        destructive:
          'border-giga-live/40 bg-giga-live/5 text-giga-live [&>svg]:text-giga-live',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  ),
)
Alert.displayName = 'Alert'

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'mb-1 text-[15px] uppercase tracking-[2px] leading-none',
      className,
    )}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-[14px] [&_p]:leading-relaxed', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'
