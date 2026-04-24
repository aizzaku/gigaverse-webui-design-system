'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../lib/cn'

export type LandingModalAccent = 'teal' | 'gold'
export type LandingModalSize = 'sm' | 'lg'

export interface LandingModalShellProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  title?: React.ReactNode
  accent?: LandingModalAccent
  size?: LandingModalSize
  trigger?: React.ReactNode
  children?: React.ReactNode
  closeAriaLabel?: string
}

export function LandingModalShell({
  title,
  accent = 'teal',
  size = 'sm',
  trigger,
  children,
  closeAriaLabel = 'Close',
  ...rootProps
}: LandingModalShellProps) {
  return (
    <DialogPrimitive.Root {...rootProps}>
      {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[90] bg-giga-overlay/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-[91] w-full -translate-x-1/2 -translate-y-1/2',
            'rounded-giga border-[3px] bg-giga-panel font-bitcell text-giga-heading',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
            'data-[state=open]:zoom-in-[0.96] data-[state=closed]:zoom-out-[0.96]',
            'data-[state=open]:slide-in-from-bottom-6',
            'focus-visible:outline-none',
            size === 'sm' ? 'max-w-[440px]' : 'max-w-[960px]',
            accent === 'teal'
              ? 'border-giga-teal shadow-giga-modal-cyan'
              : 'border-giga-gold/40 shadow-giga-modal-gold',
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between gap-4 rounded-t-[5px] px-6 py-4',
              accent === 'teal' ? 'bg-giga-modal-teal-header' : 'bg-giga-modal-gold-header',
            )}
          >
            {title && (
              <DialogPrimitive.Title
                className={cn(
                  'font-bitcell text-[18px] uppercase tracking-[2px]',
                  accent === 'teal' ? 'text-giga-cyan' : 'text-giga-gold',
                )}
              >
                {title}
              </DialogPrimitive.Title>
            )}
            <DialogPrimitive.Close
              aria-label={closeAriaLabel}
              className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-giga-sm border border-giga-border bg-giga-navy/60 text-giga-muted transition-colors hover:border-giga-cyan/50 hover:text-giga-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan/40"
            >
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>
          <div className="px-6 py-5">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
LandingModalShell.displayName = 'LandingModalShell'
