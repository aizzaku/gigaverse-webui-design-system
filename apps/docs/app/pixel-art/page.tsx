import {
  // Original
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
  Checkbox,
  StepProgressBar,
  // Pixel variants
  PixelCard,
  PixelCardHeader,
  PixelCardTitle,
  PixelCardDescription,
  PixelCardContent,
  PixelCardFooter,
  PixelButton,
  PixelBadge,
  PixelCheckbox,
  PixelStepProgressBar,
  PixelBorder,
  PixelProgress,
} from '@gigaverse/ui'

const STEPS = [
  { label: 'Start' },
  { label: 'Build' },
  { label: 'Ship' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-bitcell text-[10px] tracking-[3px] uppercase text-giga-muted mb-4">
      {children}
    </p>
  )
}

function CompareRow({
  label,
  original,
  pixel,
}: {
  label: string
  original: React.ReactNode
  pixel: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-2 gap-8 py-6 border-b border-giga-border/30">
      <div>
        <SectionLabel>Original — {label}</SectionLabel>
        <div className="flex flex-wrap items-start gap-4">{original}</div>
      </div>
      <div>
        <SectionLabel>Pixel Art — {label}</SectionLabel>
        <div className="flex flex-wrap items-start gap-4">{pixel}</div>
      </div>
    </div>
  )
}

export default function PixelArtPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-8 py-12">
      <div className="mb-10">
        <h1 className="font-bitcell text-[28px] tracking-[3px] uppercase text-giga-heading mb-2">
          Pixel Art Borders
        </h1>
        <p className="text-giga-muted text-[14px] font-m5x7">
          8bitcn-inspired notched corner borders vs. the current rounded system. Same colors,
          different edge treatment. Vote in{' '}
          <span className="text-giga-cyan">#design-system</span>.
        </p>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-2 gap-8 border-b border-giga-gold/30 pb-3 mb-0">
        <h2 className="font-bitcell text-[14px] tracking-[2px] uppercase text-giga-gold">
          Current (Rounded)
        </h2>
        <h2 className="font-bitcell text-[14px] tracking-[2px] uppercase text-giga-cyan">
          Pixel Art (Notched)
        </h2>
      </div>

      {/* Cards */}
      <CompareRow
        label="Card"
        original={
          <Card variant="standard" className="w-64">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>A standard gigaverse card with rounded border.</CardDescription>
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
          <PixelCard variant="standard" className="w-64">
            <PixelCardHeader>
              <PixelCardTitle>Card Title</PixelCardTitle>
              <PixelCardDescription>A pixel art card with notched corners.</PixelCardDescription>
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

      {/* Buttons */}
      <CompareRow
        label="Buttons"
        original={
          <>
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="ghost" size="md">Ghost</Button>
            <Button variant="destructive" size="md">Delete</Button>
          </>
        }
        pixel={
          <>
            <PixelButton variant="primary" size="md">Primary</PixelButton>
            <PixelButton variant="secondary" size="md">Secondary</PixelButton>
            <PixelButton variant="ghost" size="md">Ghost</PixelButton>
            <PixelButton variant="destructive" size="md">Delete</PixelButton>
          </>
        }
      />

      {/* Badges */}
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
          </>
        }
      />

      {/* Checkboxes */}
      <CompareRow
        label="Checkboxes"
        original={
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="font-bitcell text-[12px] tracking-[1.5px] uppercase text-giga-muted">
                Unchecked
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox defaultChecked />
              <span className="font-bitcell text-[12px] tracking-[1.5px] uppercase text-giga-heading">
                Checked
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer opacity-50">
              <Checkbox disabled />
              <span className="font-bitcell text-[12px] tracking-[1.5px] uppercase text-giga-muted">
                Disabled
              </span>
            </label>
          </div>
        }
        pixel={
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <PixelCheckbox />
              <span className="font-bitcell text-[12px] tracking-[1.5px] uppercase text-giga-muted">
                Unchecked
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <PixelCheckbox defaultChecked />
              <span className="font-bitcell text-[12px] tracking-[1.5px] uppercase text-giga-heading">
                Checked
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer opacity-50">
              <PixelCheckbox disabled />
              <span className="font-bitcell text-[12px] tracking-[1.5px] uppercase text-giga-muted">
                Disabled
              </span>
            </label>
          </div>
        }
      />

      {/* Progress bars */}
      <CompareRow
        label="Progress Bar"
        original={
          <div className="w-64 flex flex-col gap-6">
            <StepProgressBar steps={STEPS} current={1} />
          </div>
        }
        pixel={
          <div className="w-64 flex flex-col gap-6">
            <PixelStepProgressBar steps={STEPS} current={1} />
            <PixelProgress value={65} className="h-4 w-full" />
          </div>
        }
      />

      {/* PixelBorder section containers */}
      <div className="py-6">
        <SectionLabel>Pixel Border — Section Container (generic wrapper)</SectionLabel>
        <div className="flex flex-col gap-4">
          <PixelBorder className="p-4 bg-giga-panel/40">
            <p className="font-m5x7 text-[14px] text-giga-muted">
              Default teal pixel border — use for sections, panels, tooltips, any container.
            </p>
          </PixelBorder>
          <PixelBorder borderClass="border-giga-gold" className="p-4 bg-giga-panel/40">
            <p className="font-m5x7 text-[14px] text-giga-muted">
              Gold pixel border variant — great for highlighted or premium sections.
            </p>
          </PixelBorder>
          <PixelBorder size="sm" borderClass="border-giga-cyan/60" className="p-3 bg-giga-panel/40">
            <p className="font-m5x7 text-[14px] text-giga-muted">
              Small (4px) cyan pixel border — compact panels and tooltips.
            </p>
          </PixelBorder>
        </div>
      </div>
    </main>
  )
}
