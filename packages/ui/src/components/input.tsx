'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

export const inputVariants = cva(
  'w-full rounded-giga border-2 bg-transparent px-4 py-2.5 text-center ' +
    'font-bitcell text-[18px] tracking-[1.5px] text-giga-heading outline-none ' +
    'placeholder:text-giga-muted/40 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan/40 ' +
    'focus-visible:ring-offset-2 focus-visible:ring-offset-giga-navy ' +
    'disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      state: {
        default: 'border-[rgba(4,131,171,0.3)]',
        available: 'border-[rgba(61,217,78,0.5)]',
        error: 'border-red-400',
        checking: 'border-[rgba(4,131,171,0.3)]',
      },
    },
    defaultVariants: { state: 'default' },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, state, type = 'text', ...props }, ref) => (
    <input ref={ref} type={type} className={cn(inputVariants({ state }), className)} {...props} />
  ),
)
Input.displayName = 'Input'
