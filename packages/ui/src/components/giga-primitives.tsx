'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import {
  factions,
  factionShinyGradient,
  shade,
  type FactionName,
} from '@gigaverse/tokens'

// ---------------------------------------------------------------------------
// StatusPip — 7x7 colored dot with exact-spec glow shadows
// ---------------------------------------------------------------------------

export const statusPipVariants = cva(
  'inline-block h-[7px] w-[7px] rounded-full shrink-0',
  {
    variants: {
      tone: {
        gold: 'bg-giga-gold shadow-[0_0_10px_rgba(245,197,99,0.5)]',
        cyan: 'bg-giga-cyan shadow-[0_0_10px_rgba(2,199,215,0.45)]',
        green: 'bg-giga-green shadow-[0_0_10px_rgba(61,217,78,0.45)]',
        muted: 'bg-giga-muted/60',
        live: 'bg-giga-live shadow-[0_0_10px_rgba(255,122,122,0.5)] animate-giga-pulse',
        online: 'bg-giga-green shadow-[0_0_10px_rgba(61,217,78,0.45)]',
        pending: 'bg-giga-gold shadow-[0_0_10px_rgba(245,197,99,0.5)] animate-giga-pulse',
        idle: 'bg-giga-muted/60',
      },
    },
    defaultVariants: { tone: 'green' },
  },
)

export interface StatusPipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusPipVariants> {}

export const StatusPip = React.forwardRef<HTMLSpanElement, StatusPipProps>(
  ({ className, tone, ...props }, ref) => (
    <span ref={ref} className={cn(statusPipVariants({ tone }), className)} {...props} />
  ),
)
StatusPip.displayName = 'StatusPip'

// ---------------------------------------------------------------------------
// PingPongLoader — 4 dark blocks with a single sliding gold highlight
// ---------------------------------------------------------------------------

export interface PingPongLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

export const PingPongLoader = ({ className, label, ...props }: PingPongLoaderProps) => (
  <div
    role="status"
    aria-label={label ?? 'Loading'}
    className={cn('inline-flex flex-col items-start gap-2', className)}
    {...props}
  >
    <div className="relative inline-flex items-center gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="h-3 w-3 rounded-[2px] border border-giga-border-dark bg-giga-dark-card"
        />
      ))}
      <span
        className="absolute left-0 top-0 h-3 w-3 rounded-[2px] bg-giga-gold shadow-[0_0_10px_rgba(245,197,99,0.5)] animate-giga-pingpong"
        aria-hidden="true"
      />
    </div>
    {label && (
      <span className="font-m5x7 text-[13px] text-giga-muted">{label}</span>
    )}
  </div>
)

// ---------------------------------------------------------------------------
// FactionBadge — tinted chip, optional selected state (used for selector grids)
// ---------------------------------------------------------------------------

export interface FactionBadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  faction: FactionName
  selected?: boolean
  asButton?: boolean
}

/**
 * On-color text: a very dark shade of the faction's primary hex (~85% darker).
 * Reads as near-black but retains a warm/cool tint from the faction palette,
 * so each button feels self-consistent instead of generic white/black on paint.
 */
function factionTextColor(name: FactionName): string {
  return shade(factions[name].primary, -0.85)
}

export const FactionBadge = React.forwardRef<HTMLButtonElement, FactionBadgeProps>(
  ({ className, faction, selected, children, asButton = false, style, ...props }, ref) => {
    const Comp = asButton ? 'button' : ('span' as const)
    const { primary } = factions[faction]
    const text = factionTextColor(faction)
    return (
      <Comp
        ref={ref as never}
        aria-pressed={asButton ? selected : undefined}
        className={cn(
          'relative inline-flex items-center gap-2 overflow-hidden rounded-giga border-2 px-3 py-1.5 font-bitcell text-[13px] uppercase tracking-[2px] shadow-giga-bevel',
          'transition-all',
          "after:content-[''] after:absolute after:inset-0 after:pointer-events-none",
          'after:bg-giga-shimmer after:bg-[length:200%_100%] after:animate-giga-shimmer',
          selected && 'ring-2 ring-offset-2 ring-offset-giga-navy',
          asButton && 'cursor-pointer hover:brightness-110 focus-visible:outline-none',
          className,
        )}
        style={{
          background: factionShinyGradient(faction),
          borderColor: primary,
          color: text,
          ...(selected ? { boxShadow: `0 0 20px ${primary}66` } : null),
          ...style,
        }}
        {...(props as object)}
      >
        <span className="relative z-10">{children ?? faction.toUpperCase()}</span>
      </Comp>
    )
  },
)
FactionBadge.displayName = 'FactionBadge'

// ---------------------------------------------------------------------------
// FactionJoinButton — gradient CTA with inline faction colors (light→primary)
// ---------------------------------------------------------------------------

export interface FactionJoinButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  faction: FactionName
}

export const FactionJoinButton = React.forwardRef<HTMLButtonElement, FactionJoinButtonProps>(
  ({ className, faction, style, children, ...props }, ref) => {
    const { primary } = factions[faction]
    const textColor = factionTextColor(faction)
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'relative overflow-hidden rounded-giga-md border-2 px-6 py-2 font-bitcell text-[16px] uppercase tracking-[1.5px] font-bold cursor-pointer shadow-giga-bevel',
          "after:content-[''] after:absolute after:inset-0 after:pointer-events-none",
          'after:bg-giga-shimmer after:bg-[length:200%_100%] after:animate-giga-shimmer',
          'transition-opacity hover:opacity-90 active:scale-[0.98]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-giga-navy',
          'disabled:opacity-60 disabled:cursor-not-allowed',
          className,
        )}
        style={{
          background: factionShinyGradient(faction),
          borderColor: primary,
          color: textColor,
          ...style,
        }}
        {...props}
      >
        <span className="relative z-10">
          {children ?? `JOIN ${faction.toUpperCase()}`}
        </span>
      </button>
    )
  },
)
FactionJoinButton.displayName = 'FactionJoinButton'

// ---------------------------------------------------------------------------
// RarityTag — small corner tag for inventory tiles
// ---------------------------------------------------------------------------

type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'relic' | 'giga'

export interface RarityTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  rarity: Rarity
}

const rarityClass: Record<Rarity, string> = {
  common: 'text-rarity-common border-rarity-common/60 bg-rarity-common/10',
  uncommon: 'text-rarity-uncommon border-rarity-uncommon/60 bg-rarity-uncommon/10',
  rare: 'text-rarity-rare border-rarity-rare/60 bg-rarity-rare/15',
  epic: 'text-rarity-epic border-rarity-epic/60 bg-rarity-epic/15',
  legendary: 'text-rarity-legendary border-rarity-legendary/60 bg-rarity-legendary/10',
  relic: 'text-rarity-relic border-rarity-relic/60 bg-rarity-relic/15',
  giga: 'text-rarity-giga border-rarity-giga/60 bg-rarity-giga/10',
}

export const RarityTag = React.forwardRef<HTMLSpanElement, RarityTagProps>(
  ({ className, rarity, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-giga-sm border px-1.5 py-0.5 text-[10px] font-bitcell uppercase tracking-[2px]',
        rarityClass[rarity],
        className,
      )}
      {...props}
    >
      {children ?? rarity}
    </span>
  ),
)
RarityTag.displayName = 'RarityTag'

// ---------------------------------------------------------------------------
// ShimmerButton — the ONE button that gets the gold shimmer sweep (PlayNowButton)
// ---------------------------------------------------------------------------

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'relative inline-flex h-12 items-center justify-center overflow-hidden rounded-giga-md px-8',
      'border-2 border-giga-gold bg-giga-gold-grad text-giga-button-text shadow-giga-bevel',
      'text-[20px] font-bitcell uppercase tracking-[2px] font-bold',
      "after:content-[''] after:absolute after:inset-0 after:pointer-events-none",
      'after:bg-giga-shimmer after:bg-[length:200%_100%] after:animate-giga-shimmer',
      'transition-opacity hover:opacity-90 active:scale-[0.98]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-gold/40',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-giga-navy',
      'disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed',
      className,
    )}
    {...props}
  >
    <span className="relative z-10">{children}</span>
  </button>
))
ShimmerButton.displayName = 'ShimmerButton'

// ---------------------------------------------------------------------------
// AccentDivider — horizontal gold gradient rule
// ---------------------------------------------------------------------------

export const AccentDivider = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    role="separator"
    className={cn(
      'h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(245,197,99,0.8)_50%,transparent_100%)]',
      className,
    )}
    {...props}
  />
)
AccentDivider.displayName = 'AccentDivider'

// ---------------------------------------------------------------------------
// SectionDivider — teal gradient rule, centered container (spec: landing rail)
// ---------------------------------------------------------------------------

export const SectionDivider = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    role="separator"
    className={cn(
      'mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10',
      className,
    )}
    {...props}
  >
    <div className="h-px w-full bg-giga-divider opacity-40" />
  </div>
)
SectionDivider.displayName = 'SectionDivider'

// ---------------------------------------------------------------------------
// StepProgress — N-of-M discrete step dots (onboarding header)
// ---------------------------------------------------------------------------

export interface StepProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  current: number
  total: number
}

export const StepProgress = React.forwardRef<HTMLDivElement, StepProgressProps>(
  ({ className, current, total, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('inline-flex items-center gap-2', className)}
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      {...props}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            'h-1.5 w-8 rounded-full transition-colors',
            i < current ? 'bg-giga-gold' : 'bg-giga-border',
          )}
        />
      ))}
    </div>
  ),
)
StepProgress.displayName = 'StepProgress'

// ---------------------------------------------------------------------------
// StepProgressBar — login-flow continuous bar with pulsing teal glow
// ---------------------------------------------------------------------------

export interface StepProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: { label: string }[]
  current: number
}

export const StepProgressBar = React.forwardRef<HTMLDivElement, StepProgressBarProps>(
  ({ className, steps, current, ...props }, ref) => {
    const progress = steps.length <= 1 ? 100 : (current / (steps.length - 1)) * 100
    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div
          className="relative h-2 w-full rounded-full border border-giga-border"
          style={{ background: '#0c1620' }}
        >
          <div
            className="h-full rounded-full bg-giga-progress-grad animate-giga-progress-glow transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between">
          {steps.map((s, i) => {
            const status = i < current ? 'complete' : i === current ? 'active' : 'pending'
            return (
              <span
                key={s.label + i}
                className={cn(
                  'font-bitcell text-[10px] tracking-[1.5px] uppercase',
                  status === 'complete' && 'text-giga-green-light',
                  status === 'active' && 'text-giga-cyan',
                  status === 'pending' && 'text-giga-muted/50',
                )}
              >
                {s.label}
              </span>
            )
          })}
        </div>
      </div>
    )
  },
)
StepProgressBar.displayName = 'StepProgressBar'

// ---------------------------------------------------------------------------
// StatBlock — big-number + label + optional sublabel
// ---------------------------------------------------------------------------

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  sublabel?: string
}

export const StatBlock = React.forwardRef<HTMLDivElement, StatBlockProps>(
  ({ className, value, label, sublabel, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1', className)} {...props}>
      <span className="font-bitcell text-[34px] leading-none tracking-wider text-giga-gold md:text-[42px] 2xl:text-[54px]">
        {value}
      </span>
      <span className="font-bitcell text-[13px] uppercase tracking-[2px] text-giga-muted sm:text-[15px] 2xl:text-[19px]">
        {label}
      </span>
      {sublabel && <span className="text-[12px] text-giga-teal">{sublabel}</span>}
    </div>
  ),
)
StatBlock.displayName = 'StatBlock'

// ---------------------------------------------------------------------------
// SectionHeader — [accent-line] [NUMBER — SUBTITLE] [accent-line] + H2 + description
// ---------------------------------------------------------------------------

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string | number
  subtitle: string
  title: string
  description?: string
  accentColor?: string
  align?: 'left' | 'center'
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      number,
      subtitle,
      title,
      description,
      accentColor = '#F5C563',
      align = 'left',
      ...props
    },
    ref,
  ) => {
    const num =
      typeof number === 'number' ? String(number).padStart(2, '0') : number
    return (
      <div
        ref={ref}
        className={cn(
          'mb-2 sm:mb-4 md:mb-8',
          align === 'center' ? 'text-center' : 'text-left',
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            'flex items-center gap-3',
            align === 'center' && 'justify-center',
          )}
        >
          <span
            className="h-[2px] w-10"
            style={{ background: accentColor }}
            aria-hidden="true"
          />
          <span
            className="font-bitcell text-[11px] uppercase tracking-[2px] sm:text-[12px] 2xl:text-[15px]"
            style={{ color: accentColor }}
          >
            {num} — {subtitle}
          </span>
          <span
            className="h-[2px] w-10"
            style={{ background: accentColor }}
            aria-hidden="true"
          />
        </div>
        <h2 className="mt-2 font-bitcell text-[24px] uppercase leading-[0.9] tracking-[2px] text-giga-heading sm:mt-3 sm:text-[34px] md:text-[42px] md:tracking-[3px] 2xl:text-[54px]">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-2 max-w-[780px] font-m5x7 text-[17px] leading-[1.35] text-giga-muted sm:mt-3 sm:text-[19px] lg:text-[21px] 2xl:text-[26px]',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        )}
      </div>
    )
  },
)
SectionHeader.displayName = 'SectionHeader'

// Back-compat: keep the old flat "01 — TITLE" header as an alias.
export interface NumberedSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string | number
  title: string
}

export const NumberedSectionHeader = React.forwardRef<
  HTMLDivElement,
  NumberedSectionHeaderProps
>(({ className, number, title, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-baseline gap-3', className)} {...props}>
    <span className="font-bitcell text-[18px] tracking-[3px] text-giga-teal">
      {typeof number === 'number' ? String(number).padStart(2, '0') : number}
    </span>
    <span className="text-giga-muted">—</span>
    <h2 className="font-bitcell text-[24px] uppercase tracking-[3px] text-giga-heading">
      {title}
    </h2>
  </div>
))
NumberedSectionHeader.displayName = 'NumberedSectionHeader'

// ---------------------------------------------------------------------------
// LeftBorderAccent — descriptive text block with accent-colored left border
// ---------------------------------------------------------------------------

export interface LeftBorderAccentProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: 'cyan' | 'gold' | 'sky' | 'teal'
}

export const LeftBorderAccent = React.forwardRef<HTMLDivElement, LeftBorderAccentProps>(
  ({ className, accent = 'cyan', ...props }, ref) => {
    const border =
      accent === 'gold'
        ? 'border-giga-gold'
        : accent === 'sky'
          ? 'border-giga-sky'
          : accent === 'teal'
            ? 'border-giga-teal'
            : 'border-giga-cyan'
    return (
      <div
        ref={ref}
        className={cn('border-l-2 pl-4', border, className)}
        {...props}
      />
    )
  },
)
LeftBorderAccent.displayName = 'LeftBorderAccent'

// ---------------------------------------------------------------------------
// CertificationRow — row of logo/badge lockups
// ---------------------------------------------------------------------------

export interface CertificationRowProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { label: string; node?: React.ReactNode }[]
}

export const CertificationRow = React.forwardRef<HTMLDivElement, CertificationRowProps>(
  ({ className, items, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-6 rounded-giga border border-giga-border bg-giga-panel/40 px-6 py-4',
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 font-bitcell text-[12px] uppercase tracking-[3px] text-giga-muted"
        >
          {item.node && <span className="text-giga-cyan">{item.node}</span>}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  ),
)
CertificationRow.displayName = 'CertificationRow'

// ---------------------------------------------------------------------------
// FactionPopulationCounter — small faction-colored bar + count + label
// ---------------------------------------------------------------------------

export interface FactionPopulationCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  faction: FactionName
  count: number | string
  label?: string
}

export const FactionPopulationCounter = React.forwardRef<
  HTMLDivElement,
  FactionPopulationCounterProps
>(({ className, faction, count, label, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'inline-flex items-center gap-3 rounded-giga border border-giga-border bg-giga-panel/60 px-3 py-2',
      className,
    )}
    {...props}
  >
    <span className={cn('h-6 w-1 rounded-sm', `bg-faction-${faction}`)} />
    <div className="flex flex-col leading-tight">
      <span className="font-bitcell text-[16px] text-giga-heading">{count}</span>
      <span className="font-bitcell text-[10px] uppercase tracking-[2px] text-giga-muted">
        {label ?? faction}
      </span>
    </div>
  </div>
))
FactionPopulationCounter.displayName = 'FactionPopulationCounter'

// ---------------------------------------------------------------------------
// SnapSection — scroll-snap section wrapper
// ---------------------------------------------------------------------------

export const SnapSection = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('min-h-screen snap-start snap-always', className)}
      {...props}
    />
  ),
)
SnapSection.displayName = 'SnapSection'

// ---------------------------------------------------------------------------
// EquipmentStrip — horizontal 6-slot equipment row
// ---------------------------------------------------------------------------

export interface EquipmentStripProps extends React.HTMLAttributes<HTMLDivElement> {
  slots: { label: string; icon?: React.ReactNode; rarity?: Rarity; filled?: boolean }[]
}

export const EquipmentStrip = React.forwardRef<HTMLDivElement, EquipmentStripProps>(
  ({ className, slots, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-2 rounded-giga-strip border border-giga-border bg-giga-dark-card/80 p-2.5 sm:p-3 xl:p-4',
        className,
      )}
      {...props}
    >
      {slots.map((slot, i) => (
        <div
          key={`${slot.label}-${i}`}
          className={cn(
            'flex h-14 w-14 flex-col items-center justify-center rounded-giga border-2 text-[10px] font-bitcell uppercase tracking-[2px]',
            slot.filled
              ? slot.rarity
                ? rarityClass[slot.rarity]
                : 'border-giga-gold/60 bg-giga-panel text-giga-gold'
              : 'border-giga-border bg-giga-panel/40 text-giga-muted',
          )}
        >
          {slot.icon ?? <span>{slot.label.slice(0, 3)}</span>}
        </div>
      ))}
    </div>
  ),
)
EquipmentStrip.displayName = 'EquipmentStrip'

// ---------------------------------------------------------------------------
// SectionAmbientPixels — animated pixel glint field, absolute-positioned decor
// ---------------------------------------------------------------------------

export interface SectionAmbientPixelsProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryColor: string
  secondaryColor: string
}

const AMBIENT_POSITIONS: { top: string; left: string; size: number; secondary?: boolean }[] = [
  { top: '12%', left: '8%', size: 7 },
  { top: '22%', left: '84%', size: 9, secondary: true },
  { top: '38%', left: '22%', size: 6 },
  { top: '44%', left: '68%', size: 8 },
  { top: '55%', left: '12%', size: 7, secondary: true },
  { top: '62%', left: '92%', size: 5 },
  { top: '70%', left: '46%', size: 9, secondary: true },
  { top: '78%', left: '18%', size: 6 },
  { top: '84%', left: '74%', size: 8 },
  { top: '28%', left: '54%', size: 5 },
]

export const SectionAmbientPixels = React.forwardRef<HTMLDivElement, SectionAmbientPixelsProps>(
  ({ className, primaryColor, secondaryColor, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 z-10 overflow-hidden',
        className,
      )}
      {...props}
    >
      {AMBIENT_POSITIONS.map((p, i) => {
        const color = p.secondary ? secondaryColor : primaryColor
        return (
          <span
            key={i}
            className="absolute animate-giga-pulse"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: color,
              boxShadow: `0 0 10px ${color}, 0 0 18px ${color}`,
              animationDelay: `${(i * 0.7) % 4}s`,
              animationDuration: `${7 + (i % 4)}s`,
            }}
          />
        )
      })}
    </div>
  ),
)
SectionAmbientPixels.displayName = 'SectionAmbientPixels'

// ---------------------------------------------------------------------------
// ScrollProgressBar — 2px gold bar fixed to top, driven by scroll progress
// ---------------------------------------------------------------------------

export interface ScrollProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Scroll container. Defaults to the window's document. */
  target?: React.RefObject<HTMLElement | null>
}

export const ScrollProgressBar = React.forwardRef<HTMLDivElement, ScrollProgressBarProps>(
  ({ className, target, style, ...props }, ref) => {
    const [pct, setPct] = React.useState(0)

    React.useEffect(() => {
      const el = target?.current ?? null
      const compute = () => {
        if (el) {
          const max = el.scrollHeight - el.clientHeight
          setPct(max > 0 ? (el.scrollTop / max) * 100 : 0)
          return
        }
        const doc = document.documentElement
        const max = doc.scrollHeight - window.innerHeight
        setPct(max > 0 ? (window.scrollY / max) * 100 : 0)
      }
      compute()
      const source: EventTarget = el ?? window
      source.addEventListener('scroll', compute, { passive: true })
      window.addEventListener('resize', compute)
      return () => {
        source.removeEventListener('scroll', compute)
        window.removeEventListener('resize', compute)
      }
    }, [target])

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn('pointer-events-none absolute inset-x-0 top-0 h-[2px]', className)}
        {...props}
      >
        <div
          className="h-full origin-left bg-giga-gold transition-[transform] duration-100 ease-out"
          style={{ transform: `scaleX(${pct / 100})`, ...style }}
        />
      </div>
    )
  },
)
ScrollProgressBar.displayName = 'ScrollProgressBar'

// ---------------------------------------------------------------------------
// LandingNavbar — fixed top bar with scroll progress + animated active link
// ---------------------------------------------------------------------------

export interface LandingNavbarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode
  links?: { label: string; href: string; active?: boolean }[]
  actions?: React.ReactNode
  /** Show the 2px gold scroll progress bar at the very top. */
  scrollProgress?: boolean
}

export const LandingNavbar = React.forwardRef<HTMLElement, LandingNavbarProps>(
  ({ className, brand, links = [], actions, scrollProgress = true, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        'fixed left-0 right-0 top-0 z-40 h-[52px] border-b border-giga-border bg-giga-navy/92 backdrop-blur md:h-[56px]',
        className,
      )}
      {...props}
    >
      {scrollProgress && <ScrollProgressBar />}
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <div className="flex items-center gap-8">
          {brand && (
            <span className="font-bitcell text-[18px] tracking-[2px] text-giga-gold">
              {brand}
            </span>
          )}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={cn(
                    'relative inline-block px-3 py-1.5 font-bitcell text-[15px] uppercase tracking-[1.8px] transition-colors xl:text-[16px] 2xl:text-[20px]',
                    l.active ? 'text-giga-gold' : 'text-giga-muted hover:text-giga-heading',
                  )}
                >
                  {l.active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-giga-sm border-b-2 border-giga-gold bg-giga-gold/10 transition-all"
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </nav>
  ),
)
LandingNavbar.displayName = 'LandingNavbar'

// ---------------------------------------------------------------------------
// LandingFooter — fixed bottom bar, brand + socials slots
// ---------------------------------------------------------------------------

export interface LandingFooterProps extends React.HTMLAttributes<HTMLElement> {
  left?: React.ReactNode
  right?: React.ReactNode
}

export const LandingFooter = React.forwardRef<HTMLElement, LandingFooterProps>(
  ({ className, left, right, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 h-[56px] border-t border-giga-border bg-giga-panel/95 backdrop-blur-sm md:h-[60px]',
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4 font-bitcell text-[14px] uppercase tracking-[1.5px] text-giga-muted md:text-[16px]">
          {left}
        </div>
        <div className="flex items-center gap-4 text-giga-muted">{right}</div>
      </div>
    </footer>
  ),
)
LandingFooter.displayName = 'LandingFooter'
