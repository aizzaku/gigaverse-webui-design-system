// Pattern: rarity-inventory
// Registry deps: tabs, toggle-group, card, scroll-area, badge, giga-primitives
'use client'

import { useMemo, useState } from 'react'
import {
  Badge,
  Card,
  CardContent,
  RarityTag,
  ScrollArea,
  Tabs,
  TabsList,
  TabsTrigger,
  ToggleGroup,
  ToggleGroupItem,
} from '@gigaverse/ui'

type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'relic' | 'giga'
type Slot = 'all' | 'weapon' | 'armor' | 'relic'

type Item = {
  id: string
  name: string
  slot: Exclude<Slot, 'all'>
  rarity: Rarity
  power: number
}

const SAMPLE_LOOT: Item[] = [
  { id: '1', name: 'BRONZE HELM', slot: 'armor', rarity: 'common', power: 12 },
  { id: '2', name: 'IRON BLADE', slot: 'weapon', rarity: 'uncommon', power: 24 },
  { id: '3', name: 'RUNIC GAUNTLET', slot: 'armor', rarity: 'rare', power: 48 },
  { id: '4', name: 'SHADOWBLADE', slot: 'weapon', rarity: 'epic', power: 91 },
  { id: '5', name: 'CROWN OF ARCHONS', slot: 'armor', rarity: 'legendary', power: 140 },
  { id: '6', name: 'VOID SIGIL', slot: 'relic', rarity: 'relic', power: 210 },
  { id: '7', name: 'GIGA-CORE', slot: 'relic', rarity: 'giga', power: 420 },
  { id: '8', name: 'STEEL CUIRASS', slot: 'armor', rarity: 'uncommon', power: 30 },
  { id: '9', name: 'CRUSADER LONGSWORD', slot: 'weapon', rarity: 'rare', power: 55 },
  { id: '10', name: 'ARCHON CIRCLET', slot: 'armor', rarity: 'epic', power: 88 },
  { id: '11', name: 'CHOBO TALISMAN', slot: 'relic', rarity: 'common', power: 8 },
  { id: '12', name: 'SUMMONER ROD', slot: 'weapon', rarity: 'legendary', power: 152 },
]

const RARITY_OPTIONS: Rarity[] = [
  'common',
  'uncommon',
  'rare',
  'epic',
  'legendary',
  'relic',
  'giga',
]

const rarityBorder: Record<Rarity, string> = {
  common: 'border-rarity-common/60',
  uncommon: 'border-rarity-uncommon/60',
  rare: 'border-rarity-rare/60',
  epic: 'border-rarity-epic/60',
  legendary: 'border-rarity-legendary/60',
  relic: 'border-rarity-relic/60',
  giga: 'border-rarity-giga/60',
}

export function RarityInventory() {
  const [slot, setSlot] = useState<Slot>('all')
  const [rarityFilter, setRarityFilter] = useState<Rarity[]>([])

  const items = useMemo(() => {
    return SAMPLE_LOOT.filter((i) => {
      if (slot !== 'all' && i.slot !== slot) return false
      if (rarityFilter.length > 0 && !rarityFilter.includes(i.rarity)) return false
      return true
    })
  }, [slot, rarityFilter])

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[13px] uppercase tracking-[3px] text-giga-teal">VAULT</p>
          <h1 className="mt-1 text-[40px] leading-none text-white uppercase">INVENTORY</h1>
        </div>
        <Badge variant="cyan">{items.length} ITEMS</Badge>
      </div>

      <Tabs value={slot} onValueChange={(v) => setSlot(v as Slot)}>
        <TabsList>
          <TabsTrigger value="all">ALL</TabsTrigger>
          <TabsTrigger value="weapon">WEAPONS</TabsTrigger>
          <TabsTrigger value="armor">ARMOR</TabsTrigger>
          <TabsTrigger value="relic">RELICS</TabsTrigger>
        </TabsList>
      </Tabs>

      <ToggleGroup
        type="multiple"
        value={rarityFilter}
        onValueChange={(v) => setRarityFilter(v as Rarity[])}
        className="flex-wrap justify-start"
      >
        {RARITY_OPTIONS.map((r) => (
          <ToggleGroupItem key={r} value={r} aria-label={`Filter ${r}`}>
            <RarityTag rarity={r} />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <ScrollArea className="h-[480px] rounded-giga border border-giga-border bg-giga-panel/40 p-4">
        {items.length === 0 ? (
          <div className="flex h-full items-center justify-center text-giga-muted uppercase tracking-[2px]">
            NO ITEMS MATCH
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className={`border-2 bg-giga-card ${rarityBorder[item.rarity]}`}
              >
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="flex items-start justify-between">
                    <RarityTag rarity={item.rarity} />
                    <Badge variant="default">{item.slot.toUpperCase()}</Badge>
                  </div>
                  <div className="aspect-square rounded-giga-sm bg-giga-navy/60" />
                  <div>
                    <h3 className="text-[14px] text-white uppercase tracking-[1px]">
                      {item.name}
                    </h3>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="text-[11px] uppercase tracking-[2px] text-giga-muted">
                        POWER
                      </span>
                      <span className="text-giga-gold text-[18px]">{item.power}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
