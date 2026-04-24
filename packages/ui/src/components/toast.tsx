'use client'

import * as React from 'react'
import { Toaster as SonnerToaster, toast } from 'sonner'
import { cn } from '../lib/cn'

export interface ToasterProps extends React.ComponentPropsWithoutRef<typeof SonnerToaster> {}

export const Toaster: React.FC<ToasterProps> = ({ className, toastOptions, ...props }) => (
  <SonnerToaster
    theme="dark"
    position="bottom-right"
    className={cn('font-bitcell', className)}
    toastOptions={{
      classNames: {
        toast:
          'group toast font-bitcell rounded-giga border border-giga-border bg-giga-card text-giga-heading shadow-[0_0_24px_rgba(0,0,0,0.6)]',
        description: 'text-giga-muted',
        actionButton:
          'bg-giga-gold-grad text-giga-button-text font-bold tracking-[2px] rounded-giga-md',
        cancelButton: 'bg-giga-panel text-giga-muted border border-giga-border',
        error: 'border-giga-live text-giga-live-text',
        success: 'border-giga-green/60 text-giga-green-light',
      },
      ...toastOptions,
    }}
    {...props}
  />
)

export { toast }