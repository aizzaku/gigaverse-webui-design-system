'use client'

import { useState } from 'react'
import { Combobox } from '@gigaverse/ui'

const FACTIONS = [
  { value: 'crusader', label: 'CRUSADER' },
  { value: 'overseer', label: 'OVERSEER' },
  { value: 'athena', label: 'ATHENA' },
  { value: 'archon', label: 'ARCHON' },
  { value: 'foxglove', label: 'FOXGLOVE' },
  { value: 'chobo', label: 'CHOBO' },
  { value: 'summoner', label: 'SUMMONER' },
  { value: 'gigus', label: 'GIGUS' },
]

export function ComboboxDemo() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-3">
      <Combobox
        options={FACTIONS}
        value={value}
        onChange={setValue}
        placeholder="SELECT A FACTION…"
        searchPlaceholder="Search factions…"
        width={260}
      />
      <p className="text-[12px] uppercase tracking-[2px] text-giga-muted">
        SELECTED: <span className="text-giga-gold">{value || '—'}</span>
      </p>
    </div>
  )
}
