// Pattern: faction-select
// Registry deps: button, card, giga-primitives
'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  FactionBadge,
  FactionPopulationCounter,
  StepProgress,
} from '@gigaverse/ui'

type FactionName =
  | 'crusader'
  | 'overseer'
  | 'athena'
  | 'archon'
  | 'foxglove'
  | 'chobo'
  | 'summoner'
  | 'gigus'

const FACTIONS: { name: FactionName; title: string; tagline: string; pop: string }[] = [
  { name: 'crusader', title: 'CRUSADER', tagline: 'Discipline. Steel. Tradition.', pop: '12,841' },
  { name: 'overseer', title: 'OVERSEER', tagline: 'Rules unbent, order above all.', pop: '8,120' },
  { name: 'athena', title: 'ATHENA', tagline: 'Strategy over brute force.', pop: '6,933' },
  { name: 'archon', title: 'ARCHON', tagline: 'Arcana, tides, and timing.', pop: '9,102' },
  { name: 'foxglove', title: 'FOXGLOVE', tagline: 'Outside the light, always ahead.', pop: '7,544' },
  { name: 'chobo', title: 'CHOBO', tagline: 'Nature first, clean hands.', pop: '4,218' },
  { name: 'summoner', title: 'SUMMONER', tagline: 'Bind what others fear.', pop: '3,907' },
  { name: 'gigus', title: 'GIGUS', tagline: 'The void listens. So do we.', pop: '2,611' },
]

export function FactionSelect({ onConfirm }: { onConfirm?: (faction: FactionName) => void }) {
  const [selected, setSelected] = useState<FactionName | null>(null)

  return (
    <main className="mx-auto max-w-6xl px-10 py-14">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-[13px] uppercase tracking-[3px] text-giga-teal">STEP 2 OF 4</p>
          <h1 className="mt-1 text-[48px] leading-none text-white">CHOOSE A FACTION</h1>
          <p className="mt-2 max-w-xl text-giga-muted">This choice is permanent.</p>
        </div>
        <StepProgress current={2} total={4} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {FACTIONS.map((f) => (
          <button
            key={f.name}
            type="button"
            onClick={() => setSelected(f.name)}
            className="text-left"
          >
            <Card
              className={
                selected === f.name
                  ? 'border-giga-gold/60 shadow-[0_0_24px_rgba(245,197,99,0.15)]'
                  : undefined
              }
            >
              <CardContent className="p-5">
                <FactionBadge faction={f.name} selected={selected === f.name} />
                <CardTitle className="mt-4">{f.title}</CardTitle>
                <p className="mt-2 text-[13px] text-giga-muted">{f.tagline}</p>
                <div className="mt-4">
                  <FactionPopulationCounter faction={f.name} count={f.pop} label="MEMBERS" />
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-end gap-3">
        <Button variant="ghost">BACK</Button>
        <Button
          variant="primary"
          size="lg"
          disabled={!selected}
          onClick={() => selected && onConfirm?.(selected)}
        >
          CONFIRM
        </Button>
      </div>
    </main>
  )
}
