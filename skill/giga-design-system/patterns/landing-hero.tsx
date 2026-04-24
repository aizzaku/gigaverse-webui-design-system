// Pattern: landing-hero
// Registry deps: button, giga-primitives
'use client'

import {
  AccentDivider,
  Button,
  CertificationRow,
  SectionHeader,
  ShimmerButton,
  StatBlock,
} from '@gigaverse/ui'

export function LandingHero() {
  return (
    <main className="mx-auto max-w-6xl px-10 py-20">
      <p className="mb-3 text-[13px] uppercase tracking-[3px] text-giga-teal">
        ONCHAIN DUNGEON CRAWLER
      </p>
      <h1 className="mb-6 font-bitcell text-[72px] leading-[0.95] text-white uppercase">
        ENTER THE
        <br />
        GIGAVERSE
      </h1>
      <p className="mb-10 max-w-2xl font-m5x7 text-[18px] leading-[1.4] text-giga-muted">
        Pick a faction. Roll the dungeon. Trade your loot. Eight factions, seven rarity tiers, one
        permanent choice.
      </p>

      <div className="mb-14 flex items-center gap-4">
        <ShimmerButton>PLAY NOW</ShimmerButton>
        <Button variant="secondary" size="lg">
          WATCH TRAILER
        </Button>
      </div>

      <AccentDivider />

      <section className="mt-14">
        <SectionHeader
          number={1}
          subtitle="PLAYERS"
          title="THE WARRIORS"
          description="Daily active players, dungeon runs, and items minted since launch."
          accentColor="#0483AB"
        />
        <div className="mt-8 flex flex-wrap items-end gap-16">
          <StatBlock value="80,241" label="DAILY ACTIVE" sublabel="+3.2% 24h" />
          <StatBlock value="22.1M" label="DUNGEON RUNS" />
          <StatBlock value="1.2M" label="ITEMS MINTED" />
        </div>
      </section>

      <div className="mt-20">
        <CertificationRow
          items={[
            { label: 'BUILT ON ABSTRACT' },
            { label: 'PAYMENTS BY STRIPE' },
            { label: 'PROOF OF PLAY' },
          ]}
        />
      </div>
    </main>
  )
}
