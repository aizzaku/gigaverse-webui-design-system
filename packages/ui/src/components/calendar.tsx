'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  DayPicker,
  type DayPickerProps,
  type DayPickerSingleProps,
  type DayPickerMultipleProps,
  type DayPickerRangeProps,
} from 'react-day-picker'
import { cn } from '../lib/cn'

export type CalendarProps = DayPickerProps

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('font-bitcell p-3 text-giga-heading', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-4 relative',
        month: 'space-y-4',
        month_caption: 'flex items-center justify-center pt-1 pb-2 relative',
        caption_label: 'text-[14px] uppercase tracking-[2px] text-giga-gold',
        nav: 'flex items-center gap-1',
        button_previous: cn(
          'absolute left-1 top-1 inline-flex h-7 w-7 items-center justify-center rounded-giga-sm',
          'border border-giga-border bg-giga-panel text-giga-muted',
          'transition-colors hover:border-giga-cyan/50 hover:text-giga-heading',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan/40',
        ),
        button_next: cn(
          'absolute right-1 top-1 inline-flex h-7 w-7 items-center justify-center rounded-giga-sm',
          'border border-giga-border bg-giga-panel text-giga-muted',
          'transition-colors hover:border-giga-cyan/50 hover:text-giga-heading',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan/40',
        ),
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday:
          'w-9 font-bitcell text-[11px] uppercase tracking-[2px] text-giga-muted',
        week: 'flex w-full mt-1',
        day: 'relative h-9 w-9 p-0 text-center focus-within:relative focus-within:z-20',
        day_button: cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-giga-sm text-[14px]',
          'text-giga-heading transition-colors',
          'hover:bg-giga-teal/15 hover:text-giga-cyan',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan/40',
        ),
        selected:
          'bg-giga-gold text-giga-button-text font-bold rounded-giga-sm shadow-giga-bevel',
        today: 'text-giga-gold',
        outside: 'text-giga-muted/40 aria-selected:text-giga-muted/40',
        disabled: 'text-giga-muted/30 line-through',
        range_start: 'rounded-l-giga-sm',
        range_end: 'rounded-r-giga-sm',
        range_middle:
          'bg-giga-teal/20 text-giga-heading rounded-none hover:bg-giga-teal/30',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...rest }) =>
          orientation === 'left' ? (
            <ChevronLeft className="h-4 w-4" {...rest} />
          ) : (
            <ChevronRight className="h-4 w-4" {...rest} />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

// Re-export useful props types for consumers.
export type { DayPickerSingleProps, DayPickerMultipleProps, DayPickerRangeProps }
