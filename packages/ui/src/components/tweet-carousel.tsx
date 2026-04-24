'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '../lib/cn'

export interface Tweet {
  id: string
  name: string
  handle: string
  body: string
  avatar?: string | React.ReactNode
}

export interface TweetCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  tweets: Tweet[]
  /** Auto-advance interval in ms. 0 disables. */
  autoAdvanceMs?: number
}

export const TweetCarousel = React.forwardRef<HTMLDivElement, TweetCarouselProps>(
  ({ className, tweets, autoAdvanceMs = 6000, ...props }, ref) => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' })
    const [selected, setSelected] = React.useState(0)
    const [paused, setPaused] = React.useState(false)

    React.useEffect(() => {
      if (!embla) return
      const onSelect = () => setSelected(embla.selectedScrollSnap())
      embla.on('select', onSelect)
      onSelect()
      return () => {
        embla.off('select', onSelect)
      }
    }, [embla])

    React.useEffect(() => {
      if (!embla || !autoAdvanceMs || paused) return
      const id = window.setInterval(() => embla.scrollNext(), autoAdvanceMs)
      return () => window.clearInterval(id)
    }, [embla, autoAdvanceMs, paused])

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-4', className)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        {...props}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 sm:gap-4">
            {tweets.map((t) => (
              <article
                key={t.id}
                className="min-w-0 flex-[0_0_100%] rounded-giga-xl border border-giga-border bg-giga-panel p-3 transition-colors hover:border-giga-muted/40 sm:flex-[0_0_50%] sm:p-4 lg:flex-[0_0_33.3333%]"
              >
                <div className="flex items-start gap-3">
                  {typeof t.avatar === 'string' ? (
                    <img
                      src={t.avatar}
                      alt=""
                      className="h-9 w-9 rounded-full bg-giga-card object-cover image-pixelated"
                    />
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-giga-card font-bitcell text-[13px] tracking-[1px] text-giga-muted">
                      {t.avatar ?? t.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-bitcell text-[14px] tracking-[1px] text-white 2xl:text-[18px]">
                        {t.name}
                      </span>
                      <span className="font-m5x7 text-[13px] text-giga-muted">
                        {t.handle}
                      </span>
                    </div>
                    <p className="mt-2 font-m5x7 text-[17px] leading-[1.35] text-gray-200 2xl:text-[22px]">
                      {t.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {tweets.map((_, i) => {
            const active = i === selected
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to tweet ${i + 1}`}
                onClick={() => embla?.scrollTo(i)}
                className={cn(
                  'h-[6px] rounded-full transition-all',
                  active ? 'w-[24px] bg-giga-gold' : 'w-[6px] bg-giga-gold/30',
                )}
              />
            )
          })}
        </div>
      </div>
    )
  },
)
TweetCarousel.displayName = 'TweetCarousel'
