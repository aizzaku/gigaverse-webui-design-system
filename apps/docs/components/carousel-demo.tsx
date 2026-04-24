'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@gigaverse/ui'

export function CarouselDemo() {
  const slides = ['AXE', 'SHIELD', 'POTION', 'SCROLL', 'RUNE']
  return (
    <div className="mx-12">
      <Carousel opts={{ loop: true }} className="w-full max-w-xl">
        <CarouselContent>
          {slides.map((label) => (
            <CarouselItem key={label} className="md:basis-1/3">
              <div className="flex h-32 items-center justify-center rounded-giga border border-giga-border bg-giga-panel/60 text-[18px] font-bitcell text-giga-gold">
                {label}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
