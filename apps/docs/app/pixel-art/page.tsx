'use client'

import * as React from 'react'
import {
  // Original
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Button,
  Badge,
  Checkbox,
  Switch,
  Slider,
  StepProgressBar,
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
  // Pixel variants
  PixelCard, PixelCardHeader, PixelCardTitle, PixelCardDescription,
  PixelCardContent, PixelCardFooter,
  PixelButton,
  PixelBadge,
  PixelCheckbox,
  PixelSwitch,
  PixelSlider,
  PixelStepProgressBar,
  PixelBlockProgress,
  PixelLoadingBar,
  PixelBorder,
  PixelProgress,
  PixelPagination, PixelPaginationContent, PixelPaginationItem, PixelPaginationLink,
  PixelPaginationPrevious, PixelPaginationNext, PixelPaginationEllipsis,
  PixelCarousel, PixelCarouselContent, PixelCarouselItem,
  PixelCarouselPrevious, PixelCarouselNext,
  PixelChevronLeft, PixelChevronRight, PixelChevronUp, PixelChevronDown,
  PixelArrowButton,
} from '@gigaverse/ui'

const STEPS = [{ label: 'Start' }, { label: 'Build' }, { label: 'Ship' }]

const ALL_FACTIONS = [
  'crusader', 'overseer', 'athena', 'archon',
  'foxglove', 'chobo', 'summoner', 'gigus',
] as const

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-bitcell text-[10px] tracking-[3px] uppercase text-giga-muted mb-3">
      {children}
    </p>
  )
}

function ColHeader({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <h2 className={`font-bitcell text-[14px] tracking-[2px] uppercase ${accent ? 'text-giga-cyan' : 'text-giga-gold'}`}>
      {children}
    </h2>
  )
}

function CompareRow({ label, original, pixel }: {
  label: string
  original: React.ReactNode
  pixel: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-2 gap-8 py-6 border-b border-giga-border/20">
      <div>
        <SectionLabel>Original — {label}</SectionLabel>
        <div className="flex flex-wrap items-start gap-3">{original}</div>
      </div>
      <div>
        <SectionLabel>Pixel Art — {label}</SectionLabel>
        <div className="flex flex-wrap items-start gap-3">{pixel}</div>
      </div>
    </div>
  )
}

export default function PixelArtPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bitcell text-[28px] tracking-[3px] uppercase text-giga-heading mb-2">
          Pixel Art Borders
        </h1>
        <p className="text-giga-muted text-[14px] font-m5x7">
          8bitcn-inspired notched corners vs. current rounded system. Same colors, different
          edge treatment. Vote in <span className="text-giga-cyan">#design-system</span>.
        </p>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-2 gap-8 border-b border-giga-gold/30 pb-3">
        <ColHeader>Current (Rounded)</ColHeader>
        <ColHeader accent>Pixel Art (Notched)</ColHeader>
      </div>

      {/* ── CARDS ── */}
      <CompareRow
        label="Card"
        original={
          <Card variant="standard" className="w-60">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Standard gigaverse card.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[13px] text-giga-muted font-m5x7">Content goes here.</p>
            </CardContent>
            <CardFooter>
              <Badge variant="cyan">Tag</Badge>
            </CardFooter>
          </Card>
        }
        pixel={
          <PixelCard variant="standard" className="w-60">
            <PixelCardHeader>
              <PixelCardTitle>Card Title</PixelCardTitle>
              <PixelCardDescription>Pixel art card.</PixelCardDescription>
            </PixelCardHeader>
            <PixelCardContent>
              <p className="text-[13px] text-giga-muted font-m5x7">Content goes here.</p>
            </PixelCardContent>
            <PixelCardFooter>
              <PixelBadge variant="cyan">Tag</PixelBadge>
            </PixelCardFooter>
          </PixelCard>
        }
      />

      {/* ── BUTTONS ── */}
      <CompareRow
        label="Buttons"
        original={
          <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Delete</Button>
          </>
        }
        pixel={
          <>
            <PixelButton variant="primary">Primary</PixelButton>
            <PixelButton variant="secondary">Secondary</PixelButton>
            <PixelButton variant="ghost">Ghost</PixelButton>
            <PixelButton variant="destructive">Delete</PixelButton>
          </>
        }
      />

      {/* ── BADGES ── */}
      <CompareRow
        label="Badges"
        original={
          <>
            <Badge variant="gold">Gold</Badge>
            <Badge variant="cyan">Cyan</Badge>
            <Badge variant="green">Green</Badge>
            <Badge variant="live">Live</Badge>
            <Badge variant="rarity" rarity="epic">Epic</Badge>
            <Badge variant="rarity" rarity="legendary">Legend</Badge>
            <Badge variant="rarity" rarity="giga">Giga</Badge>
          </>
        }
        pixel={
          <>
            <PixelBadge variant="gold">Gold</PixelBadge>
            <PixelBadge variant="cyan">Cyan</PixelBadge>
            <PixelBadge variant="green">Green</PixelBadge>
            <PixelBadge variant="live">Live</PixelBadge>
            <PixelBadge variant="rarity" rarity="epic">Epic</PixelBadge>
            <PixelBadge variant="rarity" rarity="legendary">Legend</PixelBadge>
            <PixelBadge variant="rarity" rarity="giga">Giga</PixelBadge>
          </>
        }
      />

      {/* ── FACTION BADGES ── */}
      <CompareRow
        label="Faction Badges"
        original={
          <div className="flex flex-wrap gap-2">
            {ALL_FACTIONS.map((f) => (
              <Badge key={f} variant="faction" faction={f} className="capitalize">{f}</Badge>
            ))}
          </div>
        }
        pixel={
          <div className="flex flex-wrap gap-2">
            {ALL_FACTIONS.map((f) => (
              <PixelBadge key={f} variant="faction" faction={f} className="capitalize">{f}</PixelBadge>
            ))}
          </div>
        }
      />

      {/* ── CHECKBOXES ── */}
      <CompareRow
        label="Checkboxes"
        original={
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Unchecked</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-heading">Checked</span>
            </label>
            <label className="flex items-center gap-2 opacity-50">
              <Checkbox disabled />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Disabled</span>
            </label>
          </div>
        }
        pixel={
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <PixelCheckbox />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Unchecked</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <PixelCheckbox defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-heading">Checked</span>
            </label>
            <label className="flex items-center gap-2 opacity-50">
              <PixelCheckbox disabled />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Disabled</span>
            </label>
          </div>
        }
      />

      {/* ── SWITCH ── */}
      <CompareRow
        label="Switch"
        original={
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Switch />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Off</span>
            </div>
            <div className="flex items-center gap-3">
              <Switch defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-heading">On</span>
            </div>
          </div>
        }
        pixel={
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <PixelSwitch />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Off</span>
            </div>
            <div className="flex items-center gap-3">
              <PixelSwitch defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-heading">On</span>
            </div>
          </div>
        }
      />

      {/* ── SLIDER ── */}
      <CompareRow
        label="Slider"
        original={
          <div className="w-56 flex flex-col gap-4">
            <Slider defaultValue={[40]} max={100} />
            <Slider defaultValue={[70]} max={100} />
          </div>
        }
        pixel={
          <div className="w-56 flex flex-col gap-4">
            <PixelSlider defaultValue={[40]} max={100} />
            <PixelSlider defaultValue={[70]} max={100} />
          </div>
        }
      />

      {/* ── ARROWS ── */}
      <div className="py-6 border-b border-giga-border/20">
        <SectionLabel>Pixel Art — Arrows &amp; Arrow Buttons</SectionLabel>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <PixelChevronLeft className="h-4 w-4 text-giga-muted" />
            <PixelChevronRight className="h-4 w-4 text-giga-muted" />
            <PixelChevronUp className="h-4 w-4 text-giga-muted" />
            <PixelChevronDown className="h-4 w-4 text-giga-muted" />
            <span className="font-bitcell text-[10px] tracking-widest text-giga-muted uppercase">icons</span>
          </div>
          <div className="flex items-center gap-2">
            <PixelArrowButton direction="left" />
            <PixelArrowButton direction="right" />
            <PixelArrowButton direction="up" />
            <PixelArrowButton direction="down" />
            <span className="font-bitcell text-[10px] tracking-widest text-giga-muted uppercase">buttons</span>
          </div>
          <div className="flex items-center gap-2">
            <PixelArrowButton direction="left" disabled />
            <PixelArrowButton direction="right" disabled />
            <span className="font-bitcell text-[10px] tracking-widest text-giga-muted uppercase">disabled</span>
          </div>
        </div>
      </div>

      {/* ── PROGRESS BARS ── */}
      <CompareRow
        label="Progress Bar"
        original={
          <div className="w-64 flex flex-col gap-5">
            <StepProgressBar steps={STEPS} current={1} />
          </div>
        }
        pixel={
          <div className="w-64 flex flex-col gap-5">
            <PixelStepProgressBar steps={STEPS} current={1} />
            <PixelProgress value={65} className="h-4 w-full" />
          </div>
        }
      />

      {/* ── BLOCK PROGRESS / LOADING ── */}
      <div className="py-6 border-b border-giga-border/20">
        <SectionLabel>Pixel Art — Block Progress &amp; Loading Bars</SectionLabel>
        <div className="flex flex-col gap-5 max-w-sm">
          <div>
            <p className="font-bitcell text-[9px] tracking-widest uppercase text-giga-muted/60 mb-1.5">GOLD — 7/10</p>
            <PixelBlockProgress segments={10} filled={7} color="gold" />
          </div>
          <div>
            <p className="font-bitcell text-[9px] tracking-widest uppercase text-giga-muted/60 mb-1.5">CYAN — 4/10</p>
            <PixelBlockProgress segments={10} filled={4} color="cyan" />
          </div>
          <div>
            <p className="font-bitcell text-[9px] tracking-widest uppercase text-giga-muted/60 mb-1.5">GREEN — 9/10</p>
            <PixelBlockProgress segments={10} filled={9} color="green" />
          </div>
          <div>
            <p className="font-bitcell text-[9px] tracking-widest uppercase text-giga-muted/60 mb-1.5">LIVE — 3/8</p>
            <PixelBlockProgress segments={8} filled={3} color="live" blockHeight="h-6" />
          </div>
          <div>
            <p className="font-bitcell text-[9px] tracking-widest uppercase text-giga-muted/60 mb-1.5">LOADING (animated)</p>
            <PixelLoadingBar segments={12} color="gold" />
          </div>
          <div>
            <p className="font-bitcell text-[9px] tracking-widest uppercase text-giga-muted/60 mb-1.5">LOADING CYAN</p>
            <PixelLoadingBar segments={12} color="cyan" speed={900} />
          </div>
        </div>
      </div>

      {/* ── PAGINATION ── */}
      <CompareRow
        label="Pagination"
        original={
          <Pagination className="justify-start">
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        }
        pixel={
          <PixelPagination className="justify-start">
            <PixelPaginationContent>
              <PixelPaginationItem><PixelPaginationPrevious href="#" /></PixelPaginationItem>
              <PixelPaginationItem><PixelPaginationLink href="#">1</PixelPaginationLink></PixelPaginationItem>
              <PixelPaginationItem><PixelPaginationLink href="#" isActive>2</PixelPaginationLink></PixelPaginationItem>
              <PixelPaginationItem><PixelPaginationLink href="#">3</PixelPaginationLink></PixelPaginationItem>
              <PixelPaginationItem><PixelPaginationEllipsis /></PixelPaginationItem>
              <PixelPaginationItem><PixelPaginationNext href="#" /></PixelPaginationItem>
            </PixelPaginationContent>
          </PixelPagination>
        }
      />

      {/* ── CAROUSEL ── */}
      <CompareRow
        label="Carousel"
        original={
          <div className="w-full max-w-xs px-12">
            <Carousel>
              <CarouselContent>
                {['Card A', 'Card B', 'Card C'].map((label) => (
                  <CarouselItem key={label}>
                    <Card variant="standard" padding="md" className="text-center">
                      <CardTitle>{label}</CardTitle>
                      <CardDescription>Slide content</CardDescription>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        }
        pixel={
          <div className="w-full max-w-xs px-14">
            <PixelCarousel>
              <PixelCarouselContent>
                {['Card A', 'Card B', 'Card C'].map((label) => (
                  <PixelCarouselItem key={label}>
                    <PixelCard variant="standard" padding="md" className="text-center">
                      <PixelCardTitle>{label}</PixelCardTitle>
                      <PixelCardDescription>Slide content</PixelCardDescription>
                    </PixelCard>
                  </PixelCarouselItem>
                ))}
              </PixelCarouselContent>
              <PixelCarouselPrevious />
              <PixelCarouselNext />
            </PixelCarousel>
          </div>
        }
      />

      {/* ── PIXEL BORDER GENERIC ── */}
      <div className="py-6">
        <SectionLabel>Pixel Border — Generic Section Wrapper</SectionLabel>
        <div className="flex flex-col gap-4 max-w-lg">
          <PixelBorder className="p-4 bg-giga-panel/40">
            <p className="font-m5x7 text-[14px] text-giga-muted">Teal pixel border (default)</p>
          </PixelBorder>
          <PixelBorder borderClass="border-giga-gold" className="p-4 bg-giga-panel/40">
            <p className="font-m5x7 text-[14px] text-giga-muted">Gold pixel border</p>
          </PixelBorder>
          <PixelBorder size="sm" borderClass="border-giga-cyan/60" className="p-3 bg-giga-panel/40">
            <p className="font-m5x7 text-[14px] text-giga-muted">Small (4px) cyan — for tooltips / compact panels</p>
          </PixelBorder>
        </div>
      </div>
    </main>
  )
}
