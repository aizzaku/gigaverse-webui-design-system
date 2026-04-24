'use client'

import * as React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { cn } from '../lib/cn'
import { PixelChevronLeft, PixelChevronRight, PixelChevronUp, PixelChevronDown } from './pixel-arrows'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

interface PixelCarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

interface PixelCarouselContextValue extends PixelCarouselProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const PixelCarouselContext = React.createContext<PixelCarouselContextValue | null>(null)

function usePixelCarousel() {
  const ctx = React.useContext(PixelCarouselContext)
  if (!ctx) throw new Error('usePixelCarousel must be used within a <PixelCarousel />')
  return ctx
}

const PIXEL_Y = 'border-y-[4px]'
const PIXEL_X = '-mx-[4px] border-x-[4px]'

export const PixelCarousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & PixelCarouselProps
>(
  (
    { orientation = 'horizontal', opts, setApi, plugins, className, children, ...props },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((a: CarouselApi) => {
      if (!a) return
      setCanScrollPrev(a.canScrollPrev())
      setCanScrollNext(a.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

    React.useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) return
      // eslint-disable-next-line react-hooks/set-state-in-effect
      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)
      return () => {
        api?.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <PixelCarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          className={cn('relative', className)}
          {...props}
        >
          {children}
        </div>
      </PixelCarouselContext.Provider>
    )
  },
)
PixelCarousel.displayName = 'PixelCarousel'

export const PixelCarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = usePixelCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
})
PixelCarouselContent.displayName = 'PixelCarouselContent'

export const PixelCarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = usePixelCarousel()
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
})
PixelCarouselItem.displayName = 'PixelCarouselItem'

export const PixelCarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = usePixelCarousel()
  return (
    <button
      ref={ref}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Previous slide"
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-none',
        'border-giga-border bg-giga-dark-card/80 text-giga-muted',
        'absolute transition-colors hover:border-giga-cyan/50 hover:text-giga-heading',
        'disabled:opacity-40 disabled:pointer-events-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan',
        PIXEL_Y,
        orientation === 'horizontal'
          ? '-left-14 top-1/2 -translate-y-1/2'
          : '-top-14 left-1/2 -translate-x-1/2',
        className,
      )}
      {...props}
    >
      <span
        className={cn('absolute inset-0 pointer-events-none', PIXEL_X, 'border-giga-border')}
        aria-hidden
      />
      {orientation === 'horizontal' ? (
        <PixelChevronLeft className="h-3.5 w-3.5" />
      ) : (
        <PixelChevronUp className="h-3.5 w-3.5" />
      )}
    </button>
  )
})
PixelCarouselPrevious.displayName = 'PixelCarouselPrevious'

export const PixelCarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = usePixelCarousel()
  return (
    <button
      ref={ref}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Next slide"
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-none',
        'border-giga-border bg-giga-dark-card/80 text-giga-muted',
        'absolute transition-colors hover:border-giga-cyan/50 hover:text-giga-heading',
        'disabled:opacity-40 disabled:pointer-events-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-giga-cyan',
        PIXEL_Y,
        orientation === 'horizontal'
          ? '-right-14 top-1/2 -translate-y-1/2'
          : '-bottom-14 left-1/2 -translate-x-1/2',
        className,
      )}
      {...props}
    >
      <span
        className={cn('absolute inset-0 pointer-events-none', PIXEL_X, 'border-giga-border')}
        aria-hidden
      />
      {orientation === 'horizontal' ? (
        <PixelChevronRight className="h-3.5 w-3.5" />
      ) : (
        <PixelChevronDown className="h-3.5 w-3.5" />
      )}
    </button>
  )
})
PixelCarouselNext.displayName = 'PixelCarouselNext'

export type { CarouselApi as PixelCarouselApi }
