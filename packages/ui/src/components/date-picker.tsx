'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '../lib/cn'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export interface DatePickerProps {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  /** date-fns format string. */
  displayFormat?: string
  className?: string
  /** Width of the trigger. */
  width?: number | string
}

export function DatePicker({
  value: controlled,
  defaultValue,
  onChange,
  placeholder = 'PICK A DATE',
  disabled,
  displayFormat = 'MMM d, yyyy',
  className,
  width = 240,
}: DatePickerProps) {
  const [uncontrolled, setUncontrolled] = React.useState<Date | undefined>(defaultValue)
  const [open, setOpen] = React.useState(false)

  const value = controlled !== undefined ? controlled : uncontrolled
  const setValue = (next: Date | undefined) => {
    if (controlled === undefined) setUncontrolled(next)
    onChange?.(next)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          disabled={disabled}
          className={cn('justify-start gap-3 font-bitcell tracking-[1.5px]', className)}
          style={{ width }}
        >
          <CalendarIcon className="h-4 w-4 shrink-0 opacity-70" aria-hidden="true" />
          <span className={cn(!value && 'text-giga-muted')}>
            {value ? format(value, displayFormat).toUpperCase() : placeholder}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(d) => {
            setValue(d)
            if (d) setOpen(false)
          }}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}
DatePicker.displayName = 'DatePicker'
