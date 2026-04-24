import * as React from 'react'
import { MoreHorizontal } from 'lucide-react'
import { cn } from '../lib/cn'
import { PixelChevronLeft, PixelChevronRight } from './pixel-arrows'

const PIXEL_Y = 'border-y-[4px]'
const PIXEL_X = '-mx-[4px] border-x-[4px]'

export const PixelPagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
PixelPagination.displayName = 'PixelPagination'

export const PixelPaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn('flex flex-row items-center gap-2', className)} {...props} />
))
PixelPaginationContent.displayName = 'PixelPaginationContent'

export const PixelPaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />,
)
PixelPaginationItem.displayName = 'PixelPaginationItem'

type PixelPaginationLinkProps = React.ComponentProps<'a'> & { isActive?: boolean }

export const PixelPaginationLink = ({ className, isActive, ...props }: PixelPaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      'relative inline-flex h-9 min-w-9 items-center justify-center rounded-none px-3',
      'text-[14px] font-bitcell uppercase tracking-[2px] transition-colors',
      PIXEL_Y,
      'border-giga-border bg-giga-dark-card/80 text-giga-muted',
      'hover:border-giga-cyan/50 hover:text-giga-heading',
      isActive && 'border-giga-gold bg-giga-panel text-giga-gold',
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        'absolute inset-0 pointer-events-none',
        PIXEL_X,
        isActive ? 'border-giga-gold' : 'border-giga-border',
      )}
      aria-hidden
    />
    {props.children}
  </a>
)
PixelPaginationLink.displayName = 'PixelPaginationLink'

export const PixelPaginationPrevious = ({ className, ...props }: React.ComponentProps<'a'>) => (
  <PixelPaginationLink
    aria-label="Go to previous page"
    className={cn('gap-1.5 pl-3', className)}
    {...props}
  >
    <PixelChevronLeft className="h-3 w-3" />
    <span>PREV</span>
  </PixelPaginationLink>
)
PixelPaginationPrevious.displayName = 'PixelPaginationPrevious'

export const PixelPaginationNext = ({ className, ...props }: React.ComponentProps<'a'>) => (
  <PixelPaginationLink
    aria-label="Go to next page"
    className={cn('gap-1.5 pr-3', className)}
    {...props}
  >
    <span>NEXT</span>
    <PixelChevronRight className="h-3 w-3" />
  </PixelPaginationLink>
)
PixelPaginationNext.displayName = 'PixelPaginationNext'

export const PixelPaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn(
      'flex h-9 w-9 items-center justify-center font-bitcell text-[14px] tracking-widest text-giga-muted',
      className,
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PixelPaginationEllipsis.displayName = 'PixelPaginationEllipsis'
