// Pattern: equipment-grid
// Registry deps: scroll-area, tooltip, giga-primitives
'use client'

import {
  EquipmentStrip,
  RarityTag,
  ScrollArea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@gigaverse/ui'

type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'relic' | 'giga'

const INVENTORY: { id: string; name: string; rarity: Rarity }[] = [
  { id: '1', name: 'BRONZE HELM', rarity: 'common' },
  { id: '2', name: 'IRON SHIELD', rarity: 'uncommon' },
  { id: '3', name: 'RUNIC GAUNTLET', rarity: 'rare' },
  { id: '4', name: 'SHADOWBLADE', rarity: 'epic' },
  { id: '5', name: 'CROWN OF ARCHONS', rarity: 'legendary' },
  { id: '6', name: 'VOID SIGIL', rarity: 'relic' },
  { id: '7', name: 'GIGA-CORE', rarity: 'giga' },
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

export function EquipmentGrid() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 p-10">
      <div>
        <h2 className="mb-4 text-[20px] tracking-[3px] text-giga-gold uppercase">EQUIPPED</h2>
        <EquipmentStrip
          slots={[
            { label: 'Helm', filled: true, rarity: 'rare' },
            { label: 'Chest', filled: true, rarity: 'epic' },
            { label: 'Weapon', filled: true, rarity: 'legendary' },
            { label: 'Ring', filled: false },
            { label: 'Boots', filled: true, rarity: 'common' },
            { label: 'Relic', filled: false },
          ]}
        />
      </div>

      <div>
        <h2 className="mb-4 text-[20px] tracking-[3px] text-giga-gold uppercase">INVENTORY</h2>
        <ScrollArea className="h-[360px] rounded-giga border border-giga-border bg-giga-panel/40 p-3">
          <TooltipProvider delayDuration={100}>
            <div className="grid grid-cols-6 gap-2">
              {INVENTORY.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={`relative flex aspect-square flex-col items-end justify-between rounded-giga border-2 bg-giga-card p-2 ${rarityBorder[item.rarity]}`}
                    >
                      <RarityTag rarity={item.rarity} />
                      <span className="text-[10px] font-bitcell uppercase tracking-[2px] text-giga-muted">
                        {item.name.split(' ')[0]}
                      </span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>{item.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </ScrollArea>
      </div>
    </div>
  )
}
