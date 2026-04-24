import Link from 'next/link'
import { Button } from '@gigaverse/ui'

const p0Components = [
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
]

const p1Components = [
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
]

const p2Components = [
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
]

const nativeComponents = ['giga-primitives', 'giga-loader', 'landing-modal-shell']

const pixelComponents = [
  'pixel-button',
  'pixel-card',
  'pixel-badge',
  'pixel-border',
  'pixel-arrows',
  'pixel-checkbox',
  'pixel-switch',
  'pixel-slider',
  'pixel-progress',
  'pixel-pagination',
  'pixel-factions',
  'pixel-carousel',
]

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-10 py-16">
      <p className="mb-3 text-[13px] uppercase tracking-[3px] text-giga-teal">
        GIGAVERSE — DESIGN SYSTEM
      </p>
      <h1 className="mb-4 text-[56px] leading-none text-white">@GIGAVERSE/UI</h1>
      <p className="mb-10 max-w-xl text-[18px] leading-[1.3] text-giga-muted">
        shadcn-style React component library, styled in the Gigaverse visual language. Radix
        primitives underneath. Install via NPM or copy-paste via the shadcn registry.
      </p>

      <div className="mb-16 flex flex-wrap items-center gap-4">
        <Link href="/all">
          <Button variant="primary" size="lg">
            ALL ON ONE PAGE
          </Button>
        </Link>
        <Link href="/patterns">
          <Button variant="secondary">VIEW PATTERNS</Button>
        </Link>
        <Button variant="tertiary">JOIN DISCORD</Button>
      </div>

      <h2 className="mb-6 border-b border-giga-border pb-2 text-[24px] tracking-wider text-giga-gold">
        P0 — CORE
      </h2>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {p0Components.map((c) => (
          <li key={c}>
            <Link
              href={`/docs/${c}`}
              className="block rounded-giga border border-giga-border bg-giga-panel/60 px-4 py-3 text-[16px] tracking-wide uppercase text-giga-heading transition-colors hover:border-giga-cyan/60 hover:text-giga-cyan"
            >
              {c}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-6 mt-14 border-b border-giga-border pb-2 text-[24px] tracking-wider text-giga-gold">
        P1 — FORMS
      </h2>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {p1Components.map((c) => (
          <li key={c}>
            <Link
              href={`/docs/${c}`}
              className="block rounded-giga border border-giga-border bg-giga-panel/60 px-4 py-3 text-[16px] tracking-wide uppercase text-giga-heading transition-colors hover:border-giga-cyan/60 hover:text-giga-cyan"
            >
              {c}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-6 mt-14 border-b border-giga-border pb-2 text-[24px] tracking-wider text-giga-gold">
        P2 — ADVANCED
      </h2>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {p2Components.map((c) => (
          <li key={c}>
            <Link
              href={`/docs/${c}`}
              className="block rounded-giga border border-giga-border bg-giga-panel/60 px-4 py-3 text-[16px] tracking-wide uppercase text-giga-heading transition-colors hover:border-giga-cyan/60 hover:text-giga-cyan"
            >
              {c}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-6 mt-14 border-b border-giga-border pb-2 text-[24px] tracking-wider text-giga-gold">
        GIGAVERSE-NATIVE
      </h2>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {nativeComponents.map((c) => (
          <li key={c}>
            <Link
              href={`/docs/${c}`}
              className="block rounded-giga border border-giga-gold/40 bg-giga-gold/5 px-4 py-3 text-[16px] tracking-wide uppercase text-giga-gold transition-colors hover:border-giga-gold/80"
            >
              {c}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-6 mt-14 border-b border-giga-border pb-2 text-[24px] tracking-wider text-giga-gold">
        PIXEL BORDERS
      </h2>
      <p className="mb-6 max-w-xl text-[15px] leading-[1.4] text-giga-muted">
        8-bit variants — hard 4–6px block borders, no border radius, staircase chevrons. Drop-in alongside standard components.
      </p>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {pixelComponents.map((c) => (
          <li key={c}>
            <Link
              href={`/docs/${c}`}
              className="block rounded-none border-y-[3px] border-x-[3px] -mx-[3px] border-giga-gold/50 bg-giga-gold/5 px-4 py-3 text-[16px] tracking-wide uppercase text-giga-gold transition-colors hover:border-giga-gold/90 hover:bg-giga-gold/10"
            >
              {c}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-6 mt-14 border-b border-giga-border pb-2 text-[24px] tracking-wider text-giga-gold">
        INSTALL
      </h2>
      <pre className="rounded-giga border border-giga-border bg-giga-panel/60 p-4 text-[14px] text-giga-cyan overflow-x-auto">
        <code>{`# shadcn registry
npx shadcn@latest add https://aizzaku.github.io/gigaverse-webui-design-system/r/button.json

# npm
pnpm add @gigaverse/ui @gigaverse/tokens`}</code>
      </pre>
    </main>
  )
}
