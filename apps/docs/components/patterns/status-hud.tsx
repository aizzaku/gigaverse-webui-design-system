// Pattern: status-hud
// Registry deps: avatar, card, progress, giga-primitives
'use client'

import {
  Avatar,
  AvatarFallback,
  Card,
  CardContent,
  Progress,
  StatusPip,
} from '@gigaverse/ui'

export function StatusHud() {
  return (
    <div className="fixed bottom-6 left-6 w-80">
      <Card className="bg-giga-card/90 backdrop-blur">
        <CardContent className="space-y-4 p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>G1</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-giga-heading">GIGACHAD_404</span>
                <StatusPip tone="online" />
              </div>
              <p className="text-[12px] uppercase tracking-[2px] text-giga-teal">LVL 24 · CRUSADER</p>
            </div>
          </div>

          <div>
            <div className="mb-1 flex justify-between text-[11px] font-bitcell uppercase tracking-[2px] text-giga-muted">
              <span>HP</span>
              <span>420 / 500</span>
            </div>
            <Progress value={84} />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-[11px] font-bitcell uppercase tracking-[2px] text-giga-muted">
              <span>ENERGY</span>
              <span>7 / 10</span>
            </div>
            <Progress value={70} />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <StatusPip tone="live" />
            <span className="text-[11px] uppercase tracking-[2px] text-giga-live">IN COMBAT</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
