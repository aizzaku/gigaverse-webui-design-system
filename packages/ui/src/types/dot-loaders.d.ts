// Ambient type declarations for @dot-loaders/react.
// The published package (v0.1.0) does not ship .d.ts files; this covers the
// subset of the API surface we consume in giga-loader.tsx.
//
// If upstream ships types in a later release, delete this file.
declare module '@dot-loaders/react' {
  import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react'

  export type LabelPosition = 'left' | 'right' | 'top' | 'bottom'

  export interface LoaderHookOptions {
    id?: string
    frames?: readonly string[]
    intervalMs?: number
    label?: ReactNode
    labelPosition?: LabelPosition
    color?: string
    backgroundColor?: string
    size?: number
    active?: boolean
  }

  export interface LoaderProps
    extends LoaderHookOptions,
      Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
    fallbackLabel?: string
    ref?: Ref<HTMLSpanElement>
  }

  export interface LoaderInlineProps extends LoaderProps {
    children?: ReactNode
    gap?: number
  }

  export interface LoaderOverlayProps extends LoaderProps {
    active?: boolean
    children?: ReactNode
    backdrop?: string
    ref?: Ref<HTMLDivElement>
  }

  export interface LoaderProviderDefaults {
    color?: string
    backgroundColor?: string
    size?: number
    intervalMs?: number
    labelPosition?: LabelPosition
    style?: CSSProperties
  }

  export interface LoaderProviderProps {
    defaults?: LoaderProviderDefaults
    children?: ReactNode
  }

  export const Loader: React.ForwardRefExoticComponent<
    LoaderProps & React.RefAttributes<HTMLSpanElement>
  >
  export const LoaderInline: React.ForwardRefExoticComponent<
    LoaderInlineProps & React.RefAttributes<HTMLSpanElement>
  >
  export const LoaderOverlay: React.ForwardRefExoticComponent<
    LoaderOverlayProps & React.RefAttributes<HTMLDivElement>
  >
  export const LoaderProvider: (props: LoaderProviderProps) => JSX.Element

  export function useLoaderFrame(options: LoaderHookOptions): string | undefined
  export function useLoaderFrames(options: LoaderHookOptions): readonly string[] | undefined
}

declare module '@dot-loaders/presets' {
  const presets: unknown
  export default presets
}

declare module '@dot-loaders/core' {
  export type GridShape = 'dot' | 'square' | 'rounded' | 'diamond' | (string & {})
  export type LabelPosition = 'left' | 'right' | 'top' | 'bottom'
  export interface SvgGridRenderOutput {
    width: number
    height: number
    children: unknown
  }
  export function renderFrame(...args: unknown[]): SvgGridRenderOutput
}
