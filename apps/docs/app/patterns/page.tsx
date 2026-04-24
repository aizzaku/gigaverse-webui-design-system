import Link from 'next/link'

const PATTERNS: { slug: string; title: string; blurb: string }[] = [
  { slug: 'landing-hero', title: 'LANDING HERO', blurb: 'ShimmerButton + StatBlock + cert row' },
  { slug: 'faction-select', title: 'FACTION SELECT', blurb: '8-tile chooser with population counters' },
  { slug: 'login-modal', title: 'LOGIN MODAL', blurb: 'Wallet-or-email connect dialog' },
  { slug: 'equipment-grid', title: 'EQUIPMENT GRID', blurb: '6-slot strip + inventory scroll' },
  { slug: 'rarity-inventory', title: 'RARITY INVENTORY', blurb: 'Filterable item grid, rarity borders' },
  { slug: 'status-hud', title: 'STATUS HUD', blurb: 'Corner HUD: HP, energy, status pips' },
  { slug: 'leaderboard-table', title: 'LEADERBOARD TABLE', blurb: 'Top-N table with faction + pagination' },
  { slug: 'settings-sheet', title: 'SETTINGS SHEET', blurb: 'Right drawer with sliders + switches' },
]

export default function PatternsIndex() {
  return (
    <main className="mx-auto max-w-5xl px-10 py-16">
      <p className="mb-3 text-[13px] uppercase tracking-[3px] text-giga-teal">
        GIGAVERSE — PATTERNS
      </p>
      <h1 className="mb-4 text-[56px] leading-none text-white">COMPOSE</h1>
      <p className="mb-10 max-w-xl text-[18px] leading-[1.3] text-giga-muted">
        Prebuilt compositions of library components. Ship a screen in one paste.
      </p>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PATTERNS.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/patterns/${p.slug}`}
              className="block rounded-giga border border-giga-border bg-giga-panel/60 p-5 transition-colors hover:border-giga-cyan/60"
            >
              <div className="text-[18px] tracking-wider text-giga-gold uppercase">
                {p.title}
              </div>
              <p className="mt-1 text-[14px] text-giga-muted">{p.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          href="/"
          className="text-[13px] uppercase tracking-[2px] text-giga-teal hover:text-giga-cyan"
        >
          ← BACK TO COMPONENTS
        </Link>
      </div>
    </main>
  )
}
