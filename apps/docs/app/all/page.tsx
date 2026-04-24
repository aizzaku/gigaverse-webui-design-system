import Link from 'next/link'
import { PREVIEWS, type ComponentSlug } from '../../components/previews'

// Stable ordering, grouped the same way as the home page.
const GROUPS: { heading: string; slugs: ComponentSlug[] }[] = [
  {
    heading: 'P0 — CORE',
    slugs: [
      'button',
      'card',
      'input',
      'label',
      'badge',
      'separator',
      'tabs',
      'dialog',
      'tooltip',
      'toast',
    ],
  },
  {
    heading: 'P1 — FORMS',
    slugs: [
      'checkbox',
      'radio-group',
      'switch',
      'slider',
      'textarea',
      'toggle',
      'toggle-group',
      'popover',
      'select',
      'command',
      'combobox',
      'form',
    ],
  },
  {
    heading: 'P2 — ADVANCED',
    slugs: [
      'accordion',
      'alert',
      'alert-dialog',
      'avatar',
      'breadcrumb',
      'calendar',
      'date-picker',
      'dropdown-menu',
      'hover-card',
      'pagination',
      'progress',
      'scroll-area',
      'sheet',
      'skeleton',
      'table',
      'carousel',
      'tweet-carousel',
    ],
  },
  {
    heading: 'GIGAVERSE-NATIVE',
    slugs: ['giga-primitives', 'giga-loader', 'landing-modal-shell'],
  },
]

export const metadata = {
  title: 'Gigaverse UI — all components',
  description:
    'Every Gigaverse UI component on a single page. Share this with the team.',
}

export default function AllComponentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
      <header className="mb-12">
        <p className="mb-3 text-[13px] uppercase tracking-[3px] text-giga-teal">
          GIGAVERSE — DESIGN SYSTEM
        </p>
        <h1 className="mb-4 text-[56px] leading-none text-white uppercase">
          ALL COMPONENTS
        </h1>
        <p className="max-w-2xl text-[18px] leading-[1.3] text-giga-muted">
          Every component in @gigaverse/ui, on one scrollable page. Jump via the
          table of contents below, or use your browser&rsquo;s find.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-[14px]">
          <Link
            href="/"
            className="text-giga-cyan underline-offset-4 hover:underline"
          >
            ← HOME
          </Link>
          <Link
            href="/patterns"
            className="text-giga-cyan underline-offset-4 hover:underline"
          >
            PATTERNS →
          </Link>
        </div>
      </header>

      {/* Table of contents */}
      <nav
        aria-label="Table of contents"
        className="mb-16 rounded-giga-xl border border-giga-border bg-giga-panel/40 p-6"
      >
        <h2 className="mb-4 font-bitcell text-[14px] uppercase tracking-[2px] text-giga-gold">
          TABLE OF CONTENTS
        </h2>
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-2 font-bitcell text-[12px] uppercase tracking-[2px] text-giga-teal">
                {group.heading}
              </h3>
              <ul className="space-y-1">
                {group.slugs.map((slug) => (
                  <li key={slug}>
                    <a
                      href={`#${slug}`}
                      className="font-bitcell text-[13px] uppercase tracking-[1.5px] text-giga-muted hover:text-giga-cyan"
                    >
                      {slug}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {/* Component sections */}
      {GROUPS.map((group) => (
        <section key={group.heading} className="mb-16">
          <h2 className="mb-8 border-b border-giga-border pb-2 text-[28px] tracking-wider text-giga-gold">
            {group.heading}
          </h2>
          <div className="space-y-14">
            {group.slugs.map((slug) => {
              const preview = PREVIEWS[slug]
              if (!preview) return null
              return (
                <article
                  key={slug}
                  id={slug}
                  className="scroll-mt-10 rounded-giga-xl border border-giga-border bg-giga-dark-card/60"
                >
                  <header className="flex flex-wrap items-center justify-between gap-4 border-b border-giga-border px-6 py-4">
                    <div>
                      <h3 className="text-[22px] uppercase tracking-wider text-giga-heading">
                        {slug}
                      </h3>
                      <p className="mt-1 max-w-2xl font-m5x7 text-[15px] leading-[1.35] text-giga-muted">
                        {preview.description}
                      </p>
                    </div>
                    <Link
                      href={`/docs/${slug}`}
                      className="font-bitcell text-[12px] uppercase tracking-[2px] text-giga-cyan hover:text-giga-heading"
                    >
                      OPEN FULL PAGE →
                    </Link>
                  </header>
                  <div className="p-8 sm:p-10">{preview.node}</div>
                </article>
              )
            })}
          </div>
        </section>
      ))}

      <footer className="mt-16 border-t border-giga-border pt-8 text-center">
        <p className="font-m5x7 text-[15px] text-giga-muted">
          <Link
            href="/"
            className="text-giga-cyan underline-offset-4 hover:underline"
          >
            Back to home
          </Link>{' '}
          · @gigaverse/ui
        </p>
      </footer>
    </main>
  )
}
