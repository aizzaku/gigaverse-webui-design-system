'use client'

import * as React from 'react'
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Button,
  Badge,
  Checkbox,
  Switch,
  Slider,
  StepProgressBar,
  FactionBadge,
  FactionJoinButton,
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
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
  PixelFactionBadge,
  PixelFactionJoinButton,
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

// ---------------------------------------------------------------------------
// Layout primitives
// ---------------------------------------------------------------------------

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bitcell text-[9px] tracking-[3px] uppercase text-giga-muted/60">
      {children}
    </span>
  )
}

function ColLabel({ accent, children }: { accent?: boolean; children: React.ReactNode }) {
  return (
    <div className={`flex items-center gap-2 font-bitcell text-[11px] tracking-[2.5px] uppercase ${accent ? 'text-giga-cyan' : 'text-giga-gold'}`}>
      <div className={`h-px flex-1 ${accent ? 'bg-giga-cyan/30' : 'bg-giga-gold/30'}`} />
      {children}
      <div className={`h-px flex-1 ${accent ? 'bg-giga-cyan/30' : 'bg-giga-gold/30'}`} />
    </div>
  )
}

function CompareRow({
  label,
  description,
  original,
  pixel,
  verticalItems = false,
}: {
  label: string
  description?: string
  original: React.ReactNode
  pixel: React.ReactNode
  verticalItems?: boolean
}) {
  return (
    <div className="grid grid-cols-2 gap-10 py-8 border-b border-giga-border/20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SectionTag>Original</SectionTag>
          <span className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-heading">
            {label}
          </span>
        </div>
        {description && (
          <p className="font-m5x7 text-[12px] text-giga-muted/70 leading-relaxed">{description}</p>
        )}
        <div className={`flex ${verticalItems ? 'flex-col' : 'flex-wrap'} items-start gap-2`}>
          {original}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <SectionTag>Pixel Art</SectionTag>
          <span className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-cyan">
            {label}
          </span>
        </div>
        {description && (
          <p className="font-m5x7 text-[12px] text-giga-muted/70 leading-relaxed invisible">{description}</p>
        )}
        <div className={`flex ${verticalItems ? 'flex-col' : 'flex-wrap'} items-start gap-2`}>
          {pixel}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PixelArtPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-10 py-14">

      {/* ── PAGE HEADER ── */}
      <div className="mb-10 pb-8 border-b border-giga-border/30">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-bitcell text-[26px] tracking-[3px] uppercase text-giga-heading mb-2">
              Pixel Art Borders
            </h1>
            <p className="font-m5x7 text-[15px] text-giga-muted max-w-xl leading-relaxed">
              8bitcn-inspired NES-style notched corners vs. our current rounded system.
              Same color tokens — only the border treatment changes.
              Drop a vote in <span className="text-giga-cyan font-semibold">#design-system</span>.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-right shrink-0">
            <span className="font-bitcell text-[10px] tracking-[2px] uppercase text-giga-muted/50">branch</span>
            <span className="font-m5x7 text-[13px] text-giga-cyan">feature/pixel-art-borders</span>
          </div>
        </div>

        {/* Column key */}
        <div className="grid grid-cols-2 gap-10 mt-8">
          <ColLabel>Current — Rounded Corners</ColLabel>
          <ColLabel accent>Pixel Art — Notched Corners</ColLabel>
        </div>
      </div>

      {/* ── CARDS ── */}
      <CompareRow
        label="Card"
        description="Standard container card with header, content, footer."
        original={
          <Card variant="standard" className="w-64">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Standard gigaverse card with rounded corners.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[13px] text-giga-muted font-m5x7">Body content area.</p>
            </CardContent>
            <CardFooter>
              <Badge variant="cyan">Tag</Badge>
              <Badge variant="gold">Premium</Badge>
            </CardFooter>
          </Card>
        }
        pixel={
          <PixelCard variant="standard" className="w-64">
            <PixelCardHeader>
              <PixelCardTitle>Card Title</PixelCardTitle>
              <PixelCardDescription>Pixel art card with notched corners.</PixelCardDescription>
            </PixelCardHeader>
            <PixelCardContent>
              <p className="text-[13px] text-giga-muted font-m5x7">Body content area.</p>
            </PixelCardContent>
            <PixelCardFooter>
              <PixelBadge variant="cyan">Tag</PixelBadge>
              <PixelBadge variant="gold">Premium</PixelBadge>
            </PixelCardFooter>
          </PixelCard>
        }
      />

      {/* ── BUTTONS ── */}
      <CompareRow
        label="Buttons"
        description="Primary uses the hard-stop two-tone gradient on this branch."
        original={
          <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Delete</Button>
          </>
        }
        pixel={
          <div className="flex flex-wrap gap-6">
            <PixelButton variant="primary">Primary</PixelButton>
            <PixelButton variant="secondary">Secondary</PixelButton>
            <PixelButton variant="ghost">Ghost</PixelButton>
            <PixelButton variant="destructive">Delete</PixelButton>
          </div>
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
            <Badge variant="rarity" rarity="uncommon">Uncommon</Badge>
            <Badge variant="rarity" rarity="rare">Rare</Badge>
            <Badge variant="rarity" rarity="epic">Epic</Badge>
            <Badge variant="rarity" rarity="legendary">Legendary</Badge>
            <Badge variant="rarity" rarity="giga">Giga</Badge>
          </>
        }
        pixel={
          <div className="flex flex-wrap gap-4">
            <PixelBadge variant="gold">Gold</PixelBadge>
            <PixelBadge variant="cyan">Cyan</PixelBadge>
            <PixelBadge variant="green">Green</PixelBadge>
            <PixelBadge variant="live">Live</PixelBadge>
            <PixelBadge variant="rarity" rarity="uncommon">Uncommon</PixelBadge>
            <PixelBadge variant="rarity" rarity="rare">Rare</PixelBadge>
            <PixelBadge variant="rarity" rarity="epic">Epic</PixelBadge>
            <PixelBadge variant="rarity" rarity="legendary">Legendary</PixelBadge>
            <PixelBadge variant="rarity" rarity="giga">Giga</PixelBadge>
          </div>
        }
      />

      {/* ── FACTION CHIPS ── */}
      <CompareRow
        label="Faction Chips"
        description="Shiny gradient chips — used for faction selectors and tags."
        original={
          <div className="flex flex-wrap gap-2">
            {ALL_FACTIONS.map((f) => (
              <FactionBadge key={f} faction={f} />
            ))}
          </div>
        }
        pixel={
          <div className="flex flex-wrap gap-2">
            {ALL_FACTIONS.map((f) => (
              <PixelFactionBadge key={f} faction={f} />
            ))}
          </div>
        }
      />

      {/* ── FACTION JOIN BUTTONS ── */}
      <CompareRow
        label="Faction Join Buttons"
        description="Full-width CTA buttons with faction-specific gradients and shimmer."
        original={
          <div className="flex flex-wrap gap-2">
            {ALL_FACTIONS.map((f) => (
              <FactionJoinButton key={f} faction={f} />
            ))}
          </div>
        }
        pixel={
          <div className="flex flex-wrap gap-2">
            {ALL_FACTIONS.map((f) => (
              <PixelFactionJoinButton key={f} faction={f} />
            ))}
          </div>
        }
      />

      {/* ── CHECKBOXES ── */}
      <CompareRow
        label="Checkboxes"
        verticalItems
        original={
          <>
            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Unchecked</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-gold">Checked</span>
            </label>
            <label className="flex items-center gap-3 opacity-40">
              <Checkbox disabled />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Disabled</span>
            </label>
          </>
        }
        pixel={
          <>
            <label className="flex items-center gap-3 cursor-pointer">
              <PixelCheckbox />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Unchecked</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <PixelCheckbox defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-gold">Checked</span>
            </label>
            <label className="flex items-center gap-3 opacity-40">
              <PixelCheckbox disabled />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Disabled</span>
            </label>
          </>
        }
      />

      {/* ── SWITCH ── */}
      <CompareRow
        label="Switch"
        verticalItems
        original={
          <>
            <div className="flex items-center gap-4">
              <Switch />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Off</span>
            </div>
            <div className="flex items-center gap-4">
              <Switch defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-gold">On</span>
            </div>
          </>
        }
        pixel={
          <>
            <div className="flex items-center gap-4">
              <PixelSwitch />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-muted">Off</span>
            </div>
            <div className="flex items-center gap-4">
              <PixelSwitch defaultChecked />
              <span className="font-bitcell text-[11px] tracking-[1.5px] uppercase text-giga-gold">On</span>
            </div>
          </>
        }
      />

      {/* ── SLIDER ── */}
      <CompareRow
        label="Slider"
        description="Track fill uses progress gradient. Thumb uses gold bevel."
        original={
          <div className="w-60 flex flex-col gap-6 pt-1">
            <Slider defaultValue={[35]} max={100} />
            <Slider defaultValue={[72]} max={100} />
          </div>
        }
        pixel={
          <div className="w-60 flex flex-col gap-6 pt-1">
            <PixelSlider defaultValue={[35]} max={100} />
            <PixelSlider defaultValue={[72]} max={100} />
          </div>
        }
      />

      {/* ── ARROWS ── */}
      <div className="py-8 border-b border-giga-border/20">
        <div className="flex items-center gap-3 mb-4">
          <SectionTag>Pixel Art Only</SectionTag>
          <span className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-cyan">
            Arrows &amp; Arrow Buttons
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col gap-2">
            <SectionTag>Icons</SectionTag>
            <div className="flex items-center gap-4 p-3 rounded bg-giga-panel/30">
              <PixelChevronLeft className="h-4 w-4 text-giga-gold" />
              <PixelChevronRight className="h-4 w-4 text-giga-gold" />
              <PixelChevronUp className="h-4 w-4 text-giga-gold" />
              <PixelChevronDown className="h-4 w-4 text-giga-gold" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <SectionTag>Buttons</SectionTag>
            <div className="flex items-center gap-2">
              <PixelArrowButton direction="left" />
              <PixelArrowButton direction="right" />
              <PixelArrowButton direction="up" />
              <PixelArrowButton direction="down" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <SectionTag>Disabled</SectionTag>
            <div className="flex items-center gap-2">
              <PixelArrowButton direction="left" disabled />
              <PixelArrowButton direction="right" disabled />
            </div>
          </div>
        </div>
      </div>

      {/* ── PROGRESS BARS ── */}
      <CompareRow
        label="Progress Bar"
        description="Step bar + continuous fill. Pixel version uses the notched track."
        original={
          <div className="w-64 flex flex-col gap-5 pt-1">
            <StepProgressBar steps={STEPS} current={1} />
          </div>
        }
        pixel={
          <div className="w-64 flex flex-col gap-5 pt-1">
            <PixelStepProgressBar steps={STEPS} current={1} />
            <PixelProgress value={65} className="h-3 w-full" />
          </div>
        }
      />

      {/* ── BLOCK PROGRESS / LOADING ── */}
      <div className="py-8 border-b border-giga-border/20">
        <div className="flex items-center gap-3 mb-5">
          <SectionTag>Pixel Art Only</SectionTag>
          <span className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-cyan">
            Block Progress &amp; Loading Bars
          </span>
        </div>
        <p className="font-m5x7 text-[12px] text-giga-muted/70 mb-6">
          Discrete segmented blocks — replaces smooth fills with an 8-bit health/XP bar aesthetic.
        </p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div>
            <SectionTag>Gold — 7/10</SectionTag>
            <div className="mt-2"><PixelBlockProgress segments={10} filled={7} color="gold" blockHeight="h-3" /></div>
          </div>
          <div>
            <SectionTag>Cyan — 4/10</SectionTag>
            <div className="mt-2"><PixelBlockProgress segments={10} filled={4} color="cyan" blockHeight="h-3" /></div>
          </div>
          <div>
            <SectionTag>Green — 9/10</SectionTag>
            <div className="mt-2"><PixelBlockProgress segments={10} filled={9} color="green" blockHeight="h-3" /></div>
          </div>
          <div>
            <SectionTag>Live — 3/8</SectionTag>
            <div className="mt-2"><PixelBlockProgress segments={8} filled={3} color="live" blockHeight="h-3" /></div>
          </div>
          <div>
            <SectionTag>Loading (animated pingpong)</SectionTag>
            <div className="mt-2"><PixelLoadingBar segments={12} color="gold" blockHeight="h-3" /></div>
          </div>
          <div>
            <SectionTag>Loading cyan</SectionTag>
            <div className="mt-2"><PixelLoadingBar segments={12} color="cyan" blockHeight="h-3" speed={900} /></div>
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
        description="Two full cards visible at once. Embla for swipe/scroll."
        original={
          <div className="relative w-full px-14">
            <Carousel opts={{ align: 'start' }}>
              <CarouselContent>
                {['Alpha', 'Beta', 'Gamma', 'Delta'].map((label) => (
                  <CarouselItem key={label} className="basis-1/2">
                    <Card variant="standard" padding="sm" className="text-center">
                      <CardTitle className="text-[16px]">{label}</CardTitle>
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
          <div className="relative w-full px-14">
            <PixelCarousel opts={{ align: 'start' }}>
              <PixelCarouselContent>
                {['Alpha', 'Beta', 'Gamma', 'Delta'].map((label) => (
                  <PixelCarouselItem key={label} className="basis-1/2">
                    <PixelCard variant="standard" padding="sm" className="text-center">
                      <PixelCardTitle className="text-[16px]">{label}</PixelCardTitle>
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

      {/* ── GENERIC PIXEL BORDER ── */}
      <div className="py-8">
        <div className="flex items-center gap-3 mb-5">
          <SectionTag>Pixel Art Only</SectionTag>
          <span className="font-bitcell text-[12px] tracking-[2px] uppercase text-giga-cyan">
            PixelBorder — Generic Wrapper
          </span>
        </div>
        <p className="font-m5x7 text-[12px] text-giga-muted/70 mb-5">
          Drop-in container for sections, tooltips, panels — any surface that needs a pixel frame.
        </p>
        <div className="flex flex-col gap-4 max-w-md">
          <PixelBorder className="p-4 bg-giga-panel/40">
            <p className="font-m5x7 text-[13px] text-giga-muted">Default — teal 6px notch</p>
          </PixelBorder>
          <PixelBorder borderClass="border-giga-gold" className="p-4 bg-giga-panel/40">
            <p className="font-m5x7 text-[13px] text-giga-muted">Gold variant</p>
          </PixelBorder>
          <PixelBorder size="sm" borderClass="border-giga-cyan/60" className="p-3 bg-giga-panel/40">
            <p className="font-m5x7 text-[13px] text-giga-muted">Small 4px — compact panels / tooltips</p>
          </PixelBorder>
        </div>
      </div>

    </main>
  )
}
