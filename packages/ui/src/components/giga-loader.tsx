'use client'

/**
 * GigaLoader — Gigaverse-themed wrapper around `@dot-loaders/react`.
 *
 * dot-loaders ships ~100 unicode/braille-based frame loaders; this file
 * re-exports them with Gigaverse defaults (font-bitcell, gold accent, uppercase
 * label styling) and adds a small `<GigaLoaderPicker />` for live preview.
 *
 * The upstream API names are `loader` (id) and labels-as-effects; we expose
 * user-friendly `loader` + `label` + `labelPosition` props and translate
 * `label` to the built-in `label` effect under the hood.
 *
 * v0.1.0 of @dot-loaders/* ships without .d.ts; prop types here are
 * self-declared so consumers don't need ambient declarations.
 *
 * See: https://grixate.github.io/dot-loaders/
 */
import * as React from 'react'
import {
  Loader as DotLoader,
  LoaderInline as DotLoaderInline,
  LoaderOverlay as DotLoaderOverlay,
  LoaderProvider as DotLoaderProvider,
} from '@dot-loaders/react'
// Side-effect: registers all built-in loader presets into the shared registry.
import '@dot-loaders/presets'
import { cn } from '../lib/cn'

// Canonical loader names most relevant to Gigaverse surfaces. The
// `@dot-loaders/presets` package ships ~100 total; any string from that set
// is accepted by the `loader` prop.
export const GIGA_LOADER_DEFAULT_IDS = [
  'pulse',
  'radar',
  'sparkle',
  'orbit',
  'breathe',
  'wave-rows',
  'snake',
  'rain',
  'checkerboard',
  'fill-sweep',
  'line-sweep',
  'helix',
  'braille',
  'braille-wave',
  'dna-helix',
  'progress-dots',
  'spiral',
  'vortex',
  'pulse-orbit',
  'bounce',
  'dot-wave',
  'dot-sinewave',
  'simple-dots',
  'scroll-dots',
  'dot-cross',
  'dot-corners',
  'dot-arrow',
  'heartbeat',
  'heartpulse',
  'pong',
  'material',
  'circle',
  'circle-quarters',
  'line-spinner',
  'arc',
  'arrow-three',
  'grenade',
  'bouncing-ball',
  'bouncing-bar',
] as const

export type GigaLoaderId = (typeof GIGA_LOADER_DEFAULT_IDS)[number] | (string & {})
export type LoaderLabelPosition = 'left' | 'right' | 'top' | 'bottom'
export type LoaderRenderer = 'text' | 'svg-grid'

interface LoaderSharedProps {
  /** Preset id (e.g. "pulse", "radar"). */
  loader: GigaLoaderId
  /** Text shown next to the animating frames. */
  label?: string
  /** Where the label sits relative to the loader. */
  labelPosition?: LoaderLabelPosition
  /** Playback speed multiplier (1 = normal). */
  speed?: number
  paused?: boolean
  /** Renderer — "text" (default) or "svg-grid" for dot-matrix rendering. */
  renderer?: LoaderRenderer
  /** Accessible label when no visible label is set. */
  fallbackLabel?: string
  className?: string
  style?: React.CSSProperties
}

const baseCls =
  'font-bitcell text-giga-gold [&_span]:font-bitcell [&_[data-dot-loaders-label]]:uppercase [&_[data-dot-loaders-label]]:tracking-[2px] [&_[data-dot-loaders-label]]:text-giga-muted'

function useMounted() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return mounted
}

/**
 * Translate user-friendly props → the dot-loaders config shape.
 * - `label` becomes an `effects: [{ name: 'label', config: { text } }]` entry.
 * - `labelPosition` moves into `layout`.
 */
function buildLoaderConfig(props: LoaderSharedProps) {
  const { loader, label, labelPosition, speed, paused, renderer } = props
  const config: Record<string, unknown> = { loader }
  if (speed !== undefined) config.speed = speed
  if (paused !== undefined) config.paused = paused
  if (renderer !== undefined) config.renderer = renderer
  if (labelPosition !== undefined) {
    config.layout = { labelPosition }
  }
  if (label !== undefined && label !== '') {
    config.effects = [{ name: 'label', config: { text: label } }]
  }
  return config
}

// ---------------------------------------------------------------------------
// GigaLoader
// ---------------------------------------------------------------------------

export interface GigaLoaderProps extends LoaderSharedProps {}

export const GigaLoader = React.forwardRef<HTMLSpanElement, GigaLoaderProps>(
  ({ className, style, fallbackLabel, ...rest }, ref) => {
    const mounted = useMounted()
    if (!mounted) {
      return (
        <span
          ref={ref}
          aria-busy="true"
          aria-label={rest.label ?? fallbackLabel ?? 'Loading'}
          className={cn(baseCls, 'inline-block min-w-[1em]', className)}
          style={{ fontSize: 20, ...style }}
        >
          &nbsp;
        </span>
      )
    }
    const config = buildLoaderConfig(rest)
    return (
      <DotLoader
        ref={ref as unknown as React.Ref<HTMLSpanElement>}
        className={cn(baseCls, className)}
        style={{ fontSize: 20, ...style }}
        fallbackLabel={fallbackLabel}
        {...(config as Record<string, unknown>)}
      />
    )
  },
)
GigaLoader.displayName = 'GigaLoader'

// ---------------------------------------------------------------------------
// GigaLoaderInline — loader + arbitrary children (e.g. a caption)
// ---------------------------------------------------------------------------

export interface GigaLoaderInlineProps extends LoaderSharedProps {
  children?: React.ReactNode
  gap?: number
}

export const GigaLoaderInline = React.forwardRef<HTMLSpanElement, GigaLoaderInlineProps>(
  ({ className, style, children, gap, fallbackLabel, ...rest }, ref) => {
    const mounted = useMounted()
    if (!mounted) {
      return (
        <span
          ref={ref}
          aria-busy="true"
          className={cn('inline-flex items-center', baseCls, className)}
          style={{ fontSize: 18, gap: gap ?? 12, ...style }}
        >
          <span className="inline-block min-w-[1em]">&nbsp;</span>
          {children}
        </span>
      )
    }
    const config = buildLoaderConfig(rest)
    return (
      <DotLoaderInline
        ref={ref as unknown as React.Ref<HTMLSpanElement>}
        className={cn(baseCls, className)}
        style={{ fontSize: 18, ...style }}
        gap={gap}
        fallbackLabel={fallbackLabel}
        {...(config as Record<string, unknown>)}
      >
        {children}
      </DotLoaderInline>
    )
  },
)
GigaLoaderInline.displayName = 'GigaLoaderInline'

// ---------------------------------------------------------------------------
// GigaLoaderOverlay — full-surface blocking loader
// ---------------------------------------------------------------------------

export interface GigaLoaderOverlayProps extends LoaderSharedProps {
  active?: boolean
  children?: React.ReactNode
  backdrop?: string
}

export const GigaLoaderOverlay = React.forwardRef<HTMLDivElement, GigaLoaderOverlayProps>(
  ({ className, backdrop, style, children, active, fallbackLabel, ...rest }, ref) => {
    const mounted = useMounted()
    if (!mounted) return <>{children}</>
    const config = buildLoaderConfig(rest)
    return (
      <DotLoaderOverlay
        ref={ref as unknown as React.Ref<HTMLDivElement>}
        active={active}
        backdrop={backdrop ?? 'rgba(6,11,20,0.72)'}
        className={cn(baseCls, className)}
        style={{ fontSize: 24, ...style }}
        fallbackLabel={fallbackLabel}
        {...(config as Record<string, unknown>)}
      >
        {children}
      </DotLoaderOverlay>
    )
  },
)
GigaLoaderOverlay.displayName = 'GigaLoaderOverlay'

// ---------------------------------------------------------------------------
// GigaLoaderProvider — passthrough for app-level defaults
// ---------------------------------------------------------------------------

export interface GigaLoaderProviderProps {
  defaults?: Record<string, unknown>
  children?: React.ReactNode
}

export const GigaLoaderProvider = (props: GigaLoaderProviderProps) => (
  <DotLoaderProvider {...(props as Record<string, unknown>)} />
)
GigaLoaderProvider.displayName = 'GigaLoaderProvider'

// ---------------------------------------------------------------------------
// Picker — grid of loaders with names (useful in docs + pattern showcases)
// ---------------------------------------------------------------------------

export interface GigaLoaderPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  ids?: readonly GigaLoaderId[]
  columns?: number
}

export const GigaLoaderPicker = React.forwardRef<HTMLDivElement, GigaLoaderPickerProps>(
  ({ className, ids = GIGA_LOADER_DEFAULT_IDS, columns = 4, style, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('grid gap-4', className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, ...style }}
      {...rest}
    >
      {ids.map((id) => (
        <figure
          key={id}
          className="flex flex-col items-center justify-center gap-2 rounded-giga border border-giga-border bg-giga-panel/60 px-3 py-4 text-center"
        >
          <div className="min-h-[32px]">
            <GigaLoader loader={id} />
          </div>
          <figcaption className="font-bitcell text-[11px] uppercase tracking-[2px] text-giga-muted">
            {id}
          </figcaption>
        </figure>
      ))}
    </div>
  ),
)
GigaLoaderPicker.displayName = 'GigaLoaderPicker'
