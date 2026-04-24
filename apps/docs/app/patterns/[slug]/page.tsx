import type * as React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LandingHero } from '@/components/patterns/landing-hero'
import { FactionSelect } from '@/components/patterns/faction-select'
import { LoginModal } from '@/components/patterns/login-modal'
import { EquipmentGrid } from '@/components/patterns/equipment-grid'
import { RarityInventory } from '@/components/patterns/rarity-inventory'
import { StatusHud } from '@/components/patterns/status-hud'
import { LeaderboardTable } from '@/components/patterns/leaderboard-table'
import { SettingsSheet } from '@/components/patterns/settings-sheet'

type PatternComponent = React.ComponentType<Record<string, never>>

const PATTERNS: Record<string, { title: string; component: PatternComponent }> = {
  'landing-hero': { title: 'LANDING HERO', component: LandingHero as PatternComponent },
  'faction-select': { title: 'FACTION SELECT', component: FactionSelect as PatternComponent },
  'login-modal': { title: 'LOGIN MODAL', component: LoginModal as PatternComponent },
  'equipment-grid': { title: 'EQUIPMENT GRID', component: EquipmentGrid as PatternComponent },
  'rarity-inventory': { title: 'RARITY INVENTORY', component: RarityInventory as PatternComponent },
  'status-hud': { title: 'STATUS HUD', component: StatusHud as PatternComponent },
  'leaderboard-table': { title: 'LEADERBOARD TABLE', component: LeaderboardTable as PatternComponent },
  'settings-sheet': { title: 'SETTINGS SHEET', component: SettingsSheet as PatternComponent },
}

export function generateStaticParams() {
  return Object.keys(PATTERNS).map((slug) => ({ slug }))
}

export default async function PatternPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = PATTERNS[slug]
  if (!entry) notFound()

  const Pattern = entry.component

  return (
    <div className="min-h-screen bg-giga-bg">
      <nav className="sticky top-0 z-50 border-b border-giga-border bg-giga-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link
            href="/patterns"
            className="text-[12px] uppercase tracking-[3px] text-giga-teal hover:text-giga-cyan"
          >
            ← PATTERNS
          </Link>
          <span className="text-[13px] uppercase tracking-[3px] text-giga-gold">
            {entry.title}
          </span>
          <Link
            href="/"
            className="text-[12px] uppercase tracking-[3px] text-giga-teal hover:text-giga-cyan"
          >
            COMPONENTS
          </Link>
        </div>
      </nav>

      <Pattern />
    </div>
  )
}
