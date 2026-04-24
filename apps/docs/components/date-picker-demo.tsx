'use client'

import { useState } from 'react'
import { Calendar, DatePicker } from '@gigaverse/ui'

export function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col gap-3">
      <DatePicker value={date} onChange={setDate} width={260} />
      <p className="text-[12px] uppercase tracking-[2px] text-giga-muted">
        SELECTED:{' '}
        <span className="text-giga-gold">
          {date ? date.toDateString() : '—'}
        </span>
      </p>
    </div>
  )
}

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="inline-block rounded-giga border border-giga-border bg-giga-panel">
      <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
    </div>
  )
}
