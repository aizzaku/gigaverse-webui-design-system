import * as React from 'react'
import { cn } from '../lib/cn'

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-giga bg-giga-panel/60', className)}
      {...props}
    />
  )
}
