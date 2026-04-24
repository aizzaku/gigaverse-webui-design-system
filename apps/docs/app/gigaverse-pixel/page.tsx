'use client'

import * as React from 'react'
import {
  PixelButton,
  PixelCard, PixelCardHeader, PixelCardTitle, PixelCardDescription, PixelCardContent, PixelCardFooter,
  PixelBadge,
  PixelBorder,
  PixelFactionBadge,
  PixelFactionJoinButton,
  PixelBlockProgress,
  PixelArrowButton,
  PixelChevronRight,
} from '@gigaverse/ui'

const ALL_FACTIONS = [
  'crusader', 'overseer', 'athena', 'archon',
  'foxglove', 'chobo', 'summoner', 'gigus',
] as const

// ---------------------------------------------------------------------------
// Small reusable pieces
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bitcell text-[10px] tracking-[4px] uppercase text-giga-teal">
      {children}
    </span>
  )
}

function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-bitcell text-[28px] md:text-[36px] tracking-[4px] uppercase text-giga-heading leading-tight ${className ?? ''}`}>
      {children}
    </h2>
  )
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <PixelCard variant="stat" padding="sm" className="text-center min-w-[150px]">
      <div className="font-bitcell text-[22px] tracking-[2px] text-giga-gold">{value}</div>
      <div className="font-m5x7 text-[12px] text-giga-muted mt-0.5 uppercase tracking-wider leading-tight">{label}</div>
    </PixelCard>
  )
}

function DungeonFeatureCard({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <PixelCard variant="recessed" className="flex-1 min-w-[200px]">
      <PixelCardContent className="mt-0 flex flex-col gap-3">
        <div className="text-3xl">{icon}</div>
        <PixelCardTitle className="text-[16px] uppercase tracking-[2px]">{title}</PixelCardTitle>
        <PixelCardDescription className="font-m5x7 text-[13px] leading-relaxed">{body}</PixelCardDescription>
      </PixelCardContent>
    </PixelCard>
  )
}

// ---------------------------------------------------------------------------
// Skin thumbnail grid (NOOBS section)
// ---------------------------------------------------------------------------
const RARITY_COLORS = [
  'bg-giga-gold/20 border-giga-gold/40',
  'bg-giga-cyan/10 border-giga-teal/40',
  'bg-purple-500/15 border-purple-500/40',
  'bg-giga-live/10 border-giga-live/40',
  'bg-giga-teal/10 border-giga-teal/30',
]

function SkinGrid() {
  return (
    <div className="flex flex-wrap gap-1.5">
      {Array.from({ length: 40 }, (_, i) => (
        <div
          key={i}
          className={`w-9 h-9 rounded-none border ${RARITY_COLORS[i % RARITY_COLORS.length]} flex items-center justify-center`}
        >
          <span className="text-[16px]">
            {['🐉', '🦊', '⚔️', '🛡️', '🔮', '🌊', '🦋', '🎭'][i % 8]}
          </span>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function GigaversePixelPage() {
  const [selectedFaction, setSelectedFaction] = React.useState<typeof ALL_FACTIONS[number]>('crusader')

  const factionInfo: Record<typeof ALL_FACTIONS[number], { pop: string; desc: string }> = {
    crusader: { pop: '18.4K', desc: 'Warriors of light sworn to protect the realm. Honor above all — the Crusaders march where others fear to tread.' },
    overseer: { pop: '12.1K', desc: 'Watchers who see beyond the veil. Knowledge is power, and the Overseers have seen everything.' },
    athena: { pop: '9.7K', desc: 'Scholars and strategists. The Athena faction turns wisdom into unstoppable force on the battlefield.' },
    archon: { pop: '7.3K', desc: 'Ancient rulers of forgotten cities. Archon power flows from ruin and revival alike.' },
    foxglove: { pop: '11.2K', desc: 'Rogues and wanderers who thrive in chaos. Foxglove agents are everywhere — and nowhere.' },
    chobo: { pop: '5.8K', desc: 'Unassuming but resilient. Chobo players punch far above their weight class.' },
    summoner: { pop: '8.9K', desc: 'Masters of summoning and arcane arts. The Summoner faction commands forces unseen.' },
    gigus: { pop: '3.2K', desc: 'Rare and enigmatic. The Gigus faction operates in shadow with motives unknown.' },
  }

  return (
    <div className="min-h-screen bg-giga-navy text-giga-heading overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-giga-border/40 bg-giga-navy/95 backdrop-blur-sm px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎮</span>
            <span className="font-bitcell text-[16px] tracking-[3px] uppercase text-giga-gold">GIGAVERSE</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {['PLAY', 'NOOBS', 'FACTIONS', 'DUNGEONS', 'GIGAMARKET'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bitcell text-[10px] tracking-[2px] uppercase text-giga-muted hover:text-giga-heading transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PixelButton variant="secondary" size="sm">JOIN DISCORD</PixelButton>
          <PixelButton variant="primary" size="sm">CONNECT WALLET</PixelButton>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative px-8 pt-24 pb-28 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,220,180,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <PixelBadge variant="live" className="animate-pulse">● LIVE — Season 1 Starting Soon</PixelBadge>
          </div>
          <h1 className="font-bitcell text-[44px] md:text-[64px] tracking-[6px] uppercase text-giga-heading mb-5 leading-none">
            ENTER<br />
            <span className="text-giga-gold">GIGAVERSE</span>
          </h1>
          <p className="font-bitcell text-[12px] md:text-[14px] tracking-[2px] uppercase text-giga-teal mb-4 leading-relaxed">
            EXPLORE, TRADE &amp; OWN YOUR PLACE IN A LIVING WORLD WITH REAL STAKES
          </p>
          <p className="font-m5x7 text-[15px] text-giga-muted max-w-lg mx-auto mb-10 leading-relaxed">
            Join 80,000+ players in a nostalgic, ever-growing RPG full of risk, reward, and unexpected surprises.
          </p>
          <div className="flex items-center justify-center gap-6">
            <PixelButton variant="primary" size="lg">PLAY NOW</PixelButton>
            <PixelButton variant="secondary" size="lg">JOIN DISCORD</PixelButton>
          </div>
        </div>

        {/* Hero pixel grid decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-giga-teal/30 to-transparent" />
      </section>

      {/* ── NOOBS ── */}
      <section id="noobs" className="px-8 py-20 border-t border-giga-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>01 — NOOBS</SectionLabel>
              <SectionHeading className="mt-3 mb-4">FLEX YOUR STYLE</SectionHeading>
              <p className="font-m5x7 text-[14px] text-giga-muted leading-relaxed mb-8">
                Choose from 270+ unique skins. Your NOOB is your identity in the Gigaverse — rare NFT skins with real on-chain ownership.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <PixelButton variant="primary" size="sm">BROWSE SKINS</PixelButton>
                <PixelButton variant="ghost" size="sm">VIEW ROMS</PixelButton>
              </div>
              <SkinGrid />
              <p className="font-m5x7 text-[11px] text-giga-muted/50 mt-3">270+ unique skins</p>
            </div>
            <div className="flex flex-col gap-4">
              <PixelCard variant="gold" className="relative">
                <PixelCardHeader>
                  <div className="flex items-center justify-between">
                    <PixelCardTitle className="text-[18px]">Dragonfish Head</PixelCardTitle>
                    <PixelBadge variant="rarity" rarity="legendary">LEGENDARY</PixelBadge>
                  </div>
                  <PixelCardDescription>Ultra-rare cosmetic skin — only 12 in existence.</PixelCardDescription>
                </PixelCardHeader>
                <PixelCardContent>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-20 h-20 bg-giga-gold/10 border border-giga-gold/30 flex items-center justify-center text-4xl">
                      🐉
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-m5x7 text-[12px] text-giga-muted">Floor Price</span>
                        <span className="font-bitcell text-[14px] text-giga-gold">0.42 ETH</span>
                      </div>
                      <PixelBlockProgress segments={8} filled={8} color="gold" blockHeight="h-2" />
                    </div>
                  </div>
                </PixelCardContent>
                <PixelCardFooter>
                  <PixelButton variant="primary" size="sm">VIEW ON MARKET</PixelButton>
                </PixelCardFooter>
              </PixelCard>

              <PixelCard variant="standard">
                <PixelCardHeader>
                  <div className="flex items-center justify-between">
                    <PixelCardTitle className="text-[18px]">Dragonfish Body</PixelCardTitle>
                    <PixelBadge variant="rarity" rarity="legendary">LEGENDARY</PixelBadge>
                  </div>
                  <PixelCardDescription>Matching body piece for the Dragonfish set.</PixelCardDescription>
                </PixelCardHeader>
                <PixelCardContent>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-20 h-20 bg-giga-teal/10 border border-giga-teal/30 flex items-center justify-center text-4xl">
                      🦎
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-m5x7 text-[12px] text-giga-muted">Floor Price</span>
                        <span className="font-bitcell text-[14px] text-giga-gold">0.38 ETH</span>
                      </div>
                      <PixelBlockProgress segments={8} filled={6} color="cyan" blockHeight="h-2" />
                    </div>
                  </div>
                </PixelCardContent>
                <PixelCardFooter>
                  <PixelButton variant="secondary" size="sm">VIEW ON MARKET</PixelButton>
                </PixelCardFooter>
              </PixelCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTIONS ── */}
      <section id="factions" className="px-8 py-20 border-t border-giga-border/20 bg-giga-dark-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>02 — FACTIONS</SectionLabel>
            <SectionHeading className="mt-3">PICK YOUR ALLEGIANCE</SectionHeading>
          </div>

          {/* Faction selector chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {ALL_FACTIONS.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFaction(f)}
                className="p-0 border-0 bg-transparent cursor-pointer"
              >
                <PixelFactionBadge
                  faction={f}
                  selected={selectedFaction === f}
                  asButton
                />
              </button>
            ))}
          </div>

          {/* Selected faction detail */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <PixelCard variant="gold" className="min-h-[260px]">
              <PixelCardHeader>
                <div className="flex items-center justify-between">
                  <PixelCardTitle className="text-[24px] uppercase tracking-[3px]">
                    {selectedFaction.toUpperCase()}
                  </PixelCardTitle>
                  <PixelBadge variant="cyan">ACTIVE</PixelBadge>
                </div>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-m5x7 text-[12px] text-giga-muted uppercase tracking-wide">Population</span>
                  <span className="font-bitcell text-[18px] text-giga-gold">{factionInfo[selectedFaction].pop}</span>
                </div>
                <p className="font-m5x7 text-[14px] text-giga-muted leading-relaxed mb-6">
                  {factionInfo[selectedFaction].desc}
                </p>
                <PixelBlockProgress
                  segments={10}
                  filled={Math.round(parseFloat(factionInfo[selectedFaction].pop) / 2.5)}
                  color="gold"
                  blockHeight="h-2.5"
                />
                <p className="font-m5x7 text-[11px] text-giga-muted/50 mt-1.5">Faction strength</p>
              </PixelCardContent>
              <PixelCardFooter>
                <PixelFactionJoinButton faction={selectedFaction} />
              </PixelCardFooter>
            </PixelCard>

            <div className="flex flex-col gap-4">
              <PixelCard variant="recessed" padding="sm">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⚔️</div>
                  <div>
                    <div className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-heading">PvP Battles</div>
                    <div className="font-m5x7 text-[12px] text-giga-muted">Fight for faction dominance every season.</div>
                  </div>
                </div>
              </PixelCard>
              <PixelCard variant="recessed" padding="sm">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <div className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-heading">Faction Rewards</div>
                    <div className="font-m5x7 text-[12px] text-giga-muted">Top factions earn exclusive loot drops.</div>
                  </div>
                </div>
              </PixelCard>
              <PixelCard variant="recessed" padding="sm">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <div className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-heading">Territory Control</div>
                    <div className="font-m5x7 text-[12px] text-giga-muted">Capture zones to earn passive income.</div>
                  </div>
                </div>
              </PixelCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── DUNGEONS ── */}
      <section id="dungeons" className="px-8 py-20 border-t border-giga-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <SectionLabel>03 — DUNGEONS</SectionLabel>
          </div>
          <div className="text-center mb-2">
            <SectionHeading>CHALLENGE THE DUNGEONS</SectionHeading>
          </div>
          <p className="text-center font-bitcell text-[12px] tracking-[2px] uppercase text-giga-teal mb-2">
            More risk, more reward.
          </p>
          <p className="text-center font-m5x7 text-[14px] text-giga-muted/70 mb-12">
            22.1M dungeon runs and counting
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <DungeonFeatureCard
              icon="⚔️"
              title="Procedural Powerups"
              body="Every run is different. Randomized loot tables and powerup combinations keep strategy fresh every time you enter."
            />
            <DungeonFeatureCard
              icon="🛡️"
              title="Risk Your Loot"
              body="Bring in rare items to boost your power — but if you die, you lose them. High risk, massive reward."
            />
            <DungeonFeatureCard
              icon="🔮"
              title="Rank Up"
              body="Complete dungeon tiers to unlock permanent upgrades, unlock new areas, and climb the global leaderboard."
            />
          </div>

          <PixelBorder className="p-6" borderClass="border-giga-teal/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-bitcell text-[28px] tracking-[4px] text-giga-gold">22,100,000+</div>
                <div className="font-m5x7 text-[14px] text-giga-muted mt-1">Total dungeon runs across all players</div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-64">
                <div className="flex justify-between font-m5x7 text-[12px] text-giga-muted">
                  <span>Daily runs</span><span className="text-giga-gold">142K</span>
                </div>
                <PixelBlockProgress segments={10} filled={8} color="gold" blockHeight="h-3" />
                <div className="flex justify-between font-m5x7 text-[12px] text-giga-muted">
                  <span>Win rate</span><span className="text-giga-cyan">34%</span>
                </div>
                <PixelBlockProgress segments={10} filled={3} color="cyan" blockHeight="h-3" />
              </div>
              <PixelButton variant="primary" size="md">ENTER DUNGEON</PixelButton>
            </div>
          </PixelBorder>
        </div>
      </section>

      {/* ── GIGAMARKET ── */}
      <section id="gigamarket" className="px-8 py-20 border-t border-giga-border/20 bg-giga-dark-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <SectionLabel>04 — GIGAMARKET</SectionLabel>
          </div>
          <SectionHeading className="text-center mb-2">A REAL-MONEY PLAYER ECONOMY</SectionHeading>
          <p className="text-center font-bitcell text-[11px] tracking-[3px] uppercase text-giga-teal mb-10">
            Buy. Sell. Move rare items.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <StatPill value="23,700" label="Players in Market" />
            <StatPill value="561,700" label="Listings Posted" />
            <StatPill value="638,000" label="Sales Cleared" />
            <StatPill value="$1M+" label="Player Volume Earned" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PixelCard variant="standard" className="md:col-span-2">
              <PixelCardHeader>
                <PixelCardTitle className="text-[18px]">Live Market Feed</PixelCardTitle>
                <PixelCardDescription>Recent high-value trades on the Gigamarket</PixelCardDescription>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    { item: '🐉 Dragonfish Head', price: '0.42 ETH', rarity: 'legendary' as const, buyer: 'voxel_ape' },
                    { item: '⚔️ Pixel Blade +3', price: '0.18 ETH', rarity: 'epic' as const, buyer: 'crusader_88' },
                    { item: '🔮 Arcane Orb', price: '0.09 ETH', rarity: 'rare' as const, buyer: 'summoner_x' },
                    { item: '🛡️ Iron Shield', price: '0.03 ETH', rarity: 'uncommon' as const, buyer: 'noob_farmer' },
                  ].map(({ item, price, rarity, buyer }) => (
                    <div key={item} className="flex items-center justify-between py-2 border-b border-giga-border/20 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="font-m5x7 text-[13px] text-giga-heading">{item}</span>
                        <PixelBadge variant="rarity" rarity={rarity} className="text-[9px]">{rarity.toUpperCase()}</PixelBadge>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bitcell text-[13px] text-giga-gold">{price}</span>
                        <span className="font-m5x7 text-[11px] text-giga-muted/60">{buyer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </PixelCardContent>
              <PixelCardFooter>
                <PixelButton variant="secondary" size="sm">OPEN MARKET</PixelButton>
              </PixelCardFooter>
            </PixelCard>

            <PixelCard variant="gold">
              <PixelCardHeader>
                <PixelCardTitle className="text-[16px]">Your Portfolio</PixelCardTitle>
                <PixelCardDescription>Connect wallet to view</PixelCardDescription>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="flex flex-col gap-4 mt-2">
                  {[
                    { label: 'Items Owned', val: '—', color: 'text-giga-muted' },
                    { label: 'Est. Value', val: '—', color: 'text-giga-muted' },
                    { label: 'Active Listings', val: '—', color: 'text-giga-muted' },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="flex justify-between items-center py-1 border-b border-giga-border/20">
                      <span className="font-m5x7 text-[12px] text-giga-muted">{label}</span>
                      <span className={`font-bitcell text-[14px] ${color}`}>{val}</span>
                    </div>
                  ))}
                </div>
              </PixelCardContent>
              <PixelCardFooter>
                <PixelButton variant="primary" size="sm" className="w-full justify-center">CONNECT WALLET</PixelButton>
              </PixelCardFooter>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-8 py-16 border-t border-giga-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>COMMUNITY</SectionLabel>
          <SectionHeading className="mt-3 mb-10">WHAT PLAYERS ARE SAYING</SectionHeading>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { handle: '@jyp_nft', quote: 'Gigaverse: game of the year.' },
              { handle: '@pixel_hunter', quote: 'Best dungeon loop I\'ve played. Lost 3 legendaries and came back for more.' },
              { handle: '@wagmi_crusader', quote: 'My faction took top spot last season. The PvP is genuinely addictive.' },
            ].map(({ handle, quote }) => (
              <PixelCard key={handle} variant="recessed" className="max-w-[280px] text-left">
                <PixelCardContent className="mt-0">
                  <p className="font-m5x7 text-[13px] text-giga-heading leading-relaxed mb-3">&ldquo;{quote}&rdquo;</p>
                  <span className="font-bitcell text-[10px] tracking-[1.5px] text-giga-teal">{handle}</span>
                </PixelCardContent>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="px-8 py-24 border-t border-giga-border/20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,192,0,0.05) 0%, transparent 70%)' }}
        />
        <div className="relative z-10">
          <SectionLabel>READY?</SectionLabel>
          <h2 className="font-bitcell text-[36px] md:text-[52px] tracking-[5px] uppercase text-giga-heading my-5 leading-tight">
            ENTER GIGAVERSE<br />
            <span className="text-giga-gold">NOW</span>
          </h2>
          <p className="font-m5x7 text-[14px] text-giga-muted mb-10">
            Play Now. Season 1 Starting Soon.
          </p>
          <div className="flex items-center justify-center gap-6">
            <PixelButton variant="primary" size="lg">PLAY NOW</PixelButton>
            <PixelButton variant="secondary" size="lg">JOIN DISCORD</PixelButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-giga-border/40 px-8 py-10 bg-giga-dark-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🎮</span>
                <span className="font-bitcell text-[14px] tracking-[3px] uppercase text-giga-gold">GIGAVERSE</span>
              </div>
              <p className="font-m5x7 text-[12px] text-giga-muted/60 max-w-xs leading-relaxed">
                A nostalgic on-chain RPG with real stakes, real ownership, and real community.
              </p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="font-bitcell text-[10px] tracking-[2px] uppercase text-giga-muted/50 mb-3">Game</div>
                {['Play', 'Dungeons', 'Factions', 'Gigamarket'].map((l) => (
                  <div key={l}>
                    <a className="font-m5x7 text-[13px] text-giga-muted hover:text-giga-heading transition-colors cursor-pointer block mb-1.5">{l}</a>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bitcell text-[10px] tracking-[2px] uppercase text-giga-muted/50 mb-3">Collections</div>
                {['ROMS', 'Giglings', 'GLHFERS'].map((l) => (
                  <div key={l}>
                    <a className="font-m5x7 text-[13px] text-giga-muted hover:text-giga-heading transition-colors cursor-pointer block mb-1.5">{l}</a>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bitcell text-[10px] tracking-[2px] uppercase text-giga-muted/50 mb-3">Company</div>
                {['Documentation', 'Terms of Service', 'Privacy Policy'].map((l) => (
                  <div key={l}>
                    <a className="font-m5x7 text-[13px] text-giga-muted hover:text-giga-heading transition-colors cursor-pointer block mb-1.5">{l}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-giga-border/20">
            <span className="font-m5x7 text-[12px] text-giga-muted/40">© 2026 Gigaverse. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <PixelBadge variant="cyan" className="text-[9px] px-2">PROOF OF PLAY</PixelBadge>
              <PixelBadge variant="gold" className="text-[9px] px-2">GLHF</PixelBadge>
              <PixelBadge variant="green" className="text-[9px] px-2">STRIPE</PixelBadge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
