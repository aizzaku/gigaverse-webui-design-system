'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

export const textareaVariants = cva(
  'w-full min-h-[96px] rounded-giga border bg-transparent px-4 py-3 text-[16px] font-bitcell text-giga-heading ' +
    'placeholder:text-giga-muted focus-visible:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-giga-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-giga-navy ' +
    'disabled:opacity-50 disabled:pointer-events-none resize-y',
  {
    variants: {
      state: {
        default: 'border-giga-teal/30',
        available: 'border-giga-green/50',
        error: 'border-giga-live',
      },
    },
    defaultVariants: { state: 'default' },
  },
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, state, ...props }, ref) => (
    <textarea ref={ref} className={cn(textareaVariants({ state }), className)} {...props} />
  ),
)
Textarea.displayName = 'Textarea'
