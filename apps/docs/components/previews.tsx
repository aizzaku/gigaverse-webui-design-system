import type { ReactNode } from 'react'
import {
  AccentDivider,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CertificationRow,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  EquipmentStrip,
  FactionBadge,
  FactionPopulationCounter,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  Label,
  GigaLoader,
  GigaLoaderInline,
  GigaLoaderPicker,
  LandingModalShell,
  FactionJoinButton,
  LeftBorderAccent,
  NumberedSectionHeader,
  SectionHeader,
  StepProgressBar,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PingPongLoader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  RarityTag,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ShimmerButton,
  Skeleton,
  Slider,
  StatBlock,
  StatusPip,
  StepProgress,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TweetCarousel,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  PixelBadge,
  PixelBorder,
  PixelButton,
  PixelCard,
  PixelCardContent,
  PixelCardDescription,
  PixelCardHeader,
  PixelCardTitle,
  PixelCheckbox,
  PixelChevronRight,
  PixelFactionBadge,
  PixelPagination,
  PixelPaginationContent,
  PixelPaginationEllipsis,
  PixelPaginationItem,
  PixelPaginationLink,
  PixelPaginationNext,
  PixelPaginationPrevious,
  PixelProgress,
  PixelSlider,
  PixelSwitch,
} from '@gigaverse/ui'
import { ToastDemo } from './toast-demo'
import { CommandDemo } from './command-demo'
import { FormDemo } from './form-demo'
import { CarouselDemo } from './carousel-demo'
import { ComboboxDemo } from './combobox-demo'
import { CalendarDemo, DatePickerDemo } from './date-picker-demo'

export type ComponentSlug =
  | 'button'
  | 'card'
  | 'input'
  | 'label'
  | 'badge'
  | 'separator'
  | 'tabs'
  | 'dialog'
  | 'tooltip'
  | 'toast'
  | 'checkbox'
  | 'radio-group'
  | 'switch'
  | 'slider'
  | 'textarea'
  | 'toggle'
  | 'toggle-group'
  | 'popover'
  | 'select'
  | 'command'
  | 'combobox'
  | 'form'
  | 'accordion'
  | 'alert'
  | 'alert-dialog'
  | 'avatar'
  | 'breadcrumb'
  | 'calendar'
  | 'date-picker'
  | 'dropdown-menu'
  | 'hover-card'
  | 'pagination'
  | 'progress'
  | 'scroll-area'
  | 'sheet'
  | 'skeleton'
  | 'table'
  | 'carousel'
  | 'giga-primitives'
  | 'giga-loader'
  | 'landing-modal-shell'
  | 'tweet-carousel'
  | 'pixel-arrows'
  | 'pixel-badge'
  | 'pixel-border'
  | 'pixel-button'
  | 'pixel-card'
  | 'pixel-carousel'
  | 'pixel-checkbox'
  | 'pixel-factions'
  | 'pixel-pagination'
  | 'pixel-progress'
  | 'pixel-slider'
  | 'pixel-switch'

interface PreviewEntry {
  description: string
  node: ReactNode
}

export const PREVIEWS: Record<ComponentSlug, PreviewEntry> = {
  button: {
    description: 'Eight variants. Gold primary has animated shimmer sweep and bevel shadow.',
    node: (
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">PLAY NOW</Button>
        <Button variant="secondary">JOIN DISCORD</Button>
        <Button variant="tertiary">VIEW DOCS</Button>
        <Button variant="ghost">DECLINE</Button>
        <Button variant="acceptPill">ACCEPT TERMS</Button>
        <Button variant="tealPill" size="pill">
          CONNECT
        </Button>
        <Button variant="destructive">LEAVE FACTION</Button>
      </div>
    ),
  },
  card: {
    description: 'Four variants: standard, tweet, strip (equipment), recessed (info).',
    node: (
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>TOTAL PLAYERS</CardTitle>
            <CardDescription>Daily active</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-[42px] leading-none text-giga-gold">80,241</p>
          </CardContent>
        </Card>
        <Card variant="tweet">
          <CardHeader>
            <CardTitle>@glhfer</CardTitle>
            <CardDescription>2h · 40k impressions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-[15px] text-giga-heading">
              Joined Crusader this morning. The shimmer on that Play Now button is elite.
            </p>
          </CardContent>
        </Card>
      </div>
    ),
  },
  input: {
    description: 'Default / available / error states.',
    node: (
      <div className="grid max-w-md gap-4">
        <div>
          <Label htmlFor="d1">DEFAULT</Label>
          <Input id="d1" placeholder="SEARCH NAME..." className="mt-2" />
        </div>
        <div>
          <Label htmlFor="d2">AVAILABLE</Label>
          <Input id="d2" state="available" defaultValue="g1g4f4n" className="mt-2" />
          <p className="mt-1 text-[13px] text-giga-green">Name available.</p>
        </div>
        <div>
          <Label htmlFor="d3">ERROR</Label>
          <Input id="d3" state="error" defaultValue="taken" className="mt-2" />
          <p className="mt-1 text-[13px] text-giga-live">Name already taken.</p>
        </div>
      </div>
    ),
  },
  label: {
    description: 'Accessible label — tracking-wide uppercase, paired with inputs.',
    node: (
      <div className="grid max-w-sm gap-2">
        <Label htmlFor="username">USERNAME</Label>
        <Input id="username" placeholder="ENTER..." />
      </div>
    ),
  },
  badge: {
    description: 'Rarity and faction variants plus gold / cyan / green / live.',
    node: (
      <div className="flex flex-wrap gap-2">
        <Badge variant="gold">LEGENDARY</Badge>
        <Badge variant="cyan">AUTHENTICATED</Badge>
        <Badge variant="green">ONLINE</Badge>
        <Badge variant="live">LIVE</Badge>
        <Badge variant="rarity" rarity="rare">
          RARE
        </Badge>
        <Badge variant="rarity" rarity="epic">
          EPIC
        </Badge>
        <Badge variant="rarity" rarity="giga">
          GIGA
        </Badge>
        <Badge variant="faction" faction="crusader">
          CRUSADER
        </Badge>
        <Badge variant="faction" faction="archon">
          ARCHON
        </Badge>
      </div>
    ),
  },
  separator: {
    description: 'Border or accent gradient divider.',
    node: (
      <div className="max-w-md space-y-4">
        <p className="text-giga-heading">Section one</p>
        <Separator />
        <p className="text-giga-heading">Section two</p>
        <Separator accent />
        <p className="text-giga-heading">Section three</p>
      </div>
    ),
  },
  tabs: {
    description: 'Radix tabs themed with gold active state.',
    node: (
      <Tabs defaultValue="inventory" className="max-w-lg">
        <TabsList>
          <TabsTrigger value="inventory">INVENTORY</TabsTrigger>
          <TabsTrigger value="factions">FACTIONS</TabsTrigger>
          <TabsTrigger value="market">MARKET</TabsTrigger>
        </TabsList>
        <TabsContent value="inventory">
          <Card>
            <CardContent>Your dungeon loot goes here.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="factions">
          <Card>
            <CardContent>Eight factions, pick one.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="market">
          <Card>
            <CardContent>Listings and sales.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    ),
  },
  dialog: {
    description: 'Radix dialog with Gigaverse navy overlay and gold-trimmed content.',
    node: (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary">OPEN DIALOG</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>JOIN CRUSADER?</DialogTitle>
            <DialogDescription>
              This choice is permanent. You forfeit allegiance to all other factions.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="ghost">CANCEL</Button>
            <Button variant="acceptPill">CONFIRM</Button>
          </div>
        </DialogContent>
      </Dialog>
    ),
  },
  'landing-modal-shell': {
    description:
      'Branded dialog shell — 3px teal or gold border, gradient header bar, pixel close button.',
    node: (
      <div className="flex flex-wrap gap-3">
        <LandingModalShell
          title="ENTER THE GIGAVERSE"
          accent="teal"
          size="sm"
          trigger={<Button variant="secondary">TEAL MODAL</Button>}
        >
          <p className="font-m5x7 text-[17px] text-giga-muted">
            Wallet or email — one permanent choice per account.
          </p>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="ghost">CANCEL</Button>
            <Button variant="primary">CONFIRM</Button>
          </div>
        </LandingModalShell>
        <LandingModalShell
          title="ACCEPT TERMS"
          accent="gold"
          size="sm"
          trigger={<Button variant="acceptPill">GOLD MODAL</Button>}
        >
          <p className="font-m5x7 text-[17px] text-giga-muted">
            Agreeing is permanent. You can review the terms anytime after.
          </p>
          <div className="mt-6 flex justify-end">
            <Button variant="acceptPill">ACCEPT</Button>
          </div>
        </LandingModalShell>
      </div>
    ),
  },
  tooltip: {
    description: 'Radix tooltip with pixel-font chip and cyan glow.',
    node: (
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">HOVER ME</Button>
          </TooltipTrigger>
          <TooltipContent>Authenticated — session active.</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  toast: {
    description: 'Sonner toaster themed for Gigaverse. Includes toast() imperative API.',
    node: <ToastDemo />,
  },
  checkbox: {
    description: 'Radix checkbox with cyan filled check and gold focus ring.',
    node: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Checkbox id="c1" defaultChecked />
          <Label htmlFor="c1">AGREE TO TERMS</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="c2" />
          <Label htmlFor="c2">SUBSCRIBE TO NEWS</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="c3" disabled />
          <Label htmlFor="c3">DISABLED</Label>
        </div>
      </div>
    ),
  },
  'radio-group': {
    description: 'Radix radio group — single selection with gold dot indicator.',
    node: (
      <RadioGroup defaultValue="crusader" className="grid gap-2">
        <div className="flex items-center gap-3">
          <RadioGroupItem id="r1" value="crusader" />
          <Label htmlFor="r1">CRUSADER</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem id="r2" value="overseer" />
          <Label htmlFor="r2">OVERSEER</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem id="r3" value="athena" />
          <Label htmlFor="r3">ATHENA</Label>
        </div>
      </RadioGroup>
    ),
  },
  switch: {
    description: 'Radix switch with gold gradient track when enabled.',
    node: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Switch id="s1" defaultChecked />
          <Label htmlFor="s1">SHIMMER EFFECTS</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="s2" />
          <Label htmlFor="s2">NOTIFICATIONS</Label>
        </div>
      </div>
    ),
  },
  slider: {
    description: 'Radix slider with progress gradient range and gold bevel thumb.',
    node: (
      <div className="grid max-w-sm gap-6">
        <div>
          <Label>VOLUME</Label>
          <Slider defaultValue={[65]} max={100} step={1} className="mt-3" />
        </div>
        <div>
          <Label>DIFFICULTY</Label>
          <Slider defaultValue={[25, 75]} max={100} step={5} className="mt-3" />
        </div>
      </div>
    ),
  },
  textarea: {
    description: 'Multi-line input with default / available / error states.',
    node: (
      <div className="grid max-w-md gap-2">
        <Label htmlFor="bio">CHARACTER BIO</Label>
        <Textarea id="bio" placeholder="TELL US ABOUT YOUR GIGA..." rows={4} />
      </div>
    ),
  },
  toggle: {
    description: 'Single on/off toggle with default and outline variants.',
    node: (
      <div className="flex gap-3">
        <Toggle>BOLD</Toggle>
        <Toggle variant="outline">ITALIC</Toggle>
        <Toggle variant="outline" defaultPressed>
          UNDERLINE
        </Toggle>
      </div>
    ),
  },
  'toggle-group': {
    description: 'Group of toggles sharing variant / size — single or multiple select.',
    node: (
      <ToggleGroup type="single" defaultValue="grid" variant="outline">
        <ToggleGroupItem value="grid">GRID</ToggleGroupItem>
        <ToggleGroupItem value="list">LIST</ToggleGroupItem>
        <ToggleGroupItem value="compact">COMPACT</ToggleGroupItem>
      </ToggleGroup>
    ),
  },
  popover: {
    description: 'Floating panel trigger — great for menus and micro-forms.',
    node: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">OPEN POPOVER</Button>
        </PopoverTrigger>
        <PopoverContent>
          <h4 className="text-[15px] text-giga-gold">QUICK ACTIONS</h4>
          <p className="mt-2 text-[13px] text-giga-muted">
            Tweak settings without leaving the page.
          </p>
          <div className="mt-4 flex gap-2">
            <Button size="sm" variant="acceptPill">
              SAVE
            </Button>
            <Button size="sm" variant="ghost">
              CANCEL
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    ),
  },
  select: {
    description: 'Radix select — keyboard-nav dropdown with Gigaverse styling.',
    node: (
      <div className="max-w-sm">
        <Label>FACTION</Label>
        <Select defaultValue="crusader">
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="PICK A FACTION" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>MELEE</SelectLabel>
              <SelectItem value="crusader">CRUSADER</SelectItem>
              <SelectItem value="overseer">OVERSEER</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>RANGED</SelectLabel>
              <SelectItem value="athena">ATHENA</SelectItem>
              <SelectItem value="archon">ARCHON</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    ),
  },
  command: {
    description: 'cmdk command palette — fuzzy-search menu, optional dialog mode.',
    node: <CommandDemo />,
  },
  combobox: {
    description: 'Searchable single-select built from popover + command + check icon.',
    node: <ComboboxDemo />,
  },
  form: {
    description: 'react-hook-form wrapper with FormField / FormItem / FormLabel / FormMessage.',
    node: <FormDemo />,
  },
  accordion: {
    description: 'Radix accordion — gold active title, chevron rotates on expand.',
    node: (
      <Accordion type="single" collapsible className="max-w-lg">
        <AccordionItem value="a">
          <AccordionTrigger>WHAT IS GIGAVERSE?</AccordionTrigger>
          <AccordionContent>
            An onchain dungeon-crawler with persistent factions and tradable loot.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger>HOW DO I JOIN?</AccordionTrigger>
          <AccordionContent>Connect your wallet, pick a faction, start rolling.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  alert: {
    description: 'Five tones: default / info / success / warning / destructive.',
    node: (
      <div className="flex max-w-xl flex-col gap-3">
        <Alert variant="info">
          <AlertTitle>HEADS UP</AlertTitle>
          <AlertDescription>New season starts Friday.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>VICTORY</AlertTitle>
          <AlertDescription>You cleared the Tier-3 dungeon.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>LOW ENERGY</AlertTitle>
          <AlertDescription>Refill soon or lose your streak.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>DEFEAT</AlertTitle>
          <AlertDescription>Your party fell. Rally and try again.</AlertDescription>
        </Alert>
      </div>
    ),
  },
  'alert-dialog': {
    description: 'Destructive confirmation dialog — live-red border and glow.',
    node: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">LEAVE FACTION</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>ARE YOU SURE?</AlertDialogTitle>
            <AlertDialogDescription>
              Leaving forfeits all faction-bound items. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>KEEP</AlertDialogCancel>
            <AlertDialogAction>LEAVE</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
  },
  avatar: {
    description: 'Player avatars with fallback initials when image missing.',
    node: (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://gigaverse.io/avatar-placeholder.png" alt="@gigachad" />
          <AvatarFallback>GC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AX</AvatarFallback>
        </Avatar>
        <Avatar className="h-12 w-12">
          <AvatarFallback>Z1</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  breadcrumb: {
    description: 'Breadcrumb navigation — cyan hover, gold current-page.',
    node: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">PLAY</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">DUNGEONS</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>NOOB RIFT</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
  },
  calendar: {
    description: 'react-day-picker wrapped in Gigaverse theme — gold selected, teal range, pixel chevrons.',
    node: <CalendarDemo />,
  },
  'date-picker': {
    description: 'Popover-triggered single date picker with bitcell display format.',
    node: <DatePickerDemo />,
  },
  'dropdown-menu': {
    description: 'Radix dropdown with Gigaverse panel background and gold indicators.',
    node: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">ACCOUNT ▾</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>MY ACCOUNT</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Profile<DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Inventory<DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  'hover-card': {
    description: 'Hover to reveal extra context — player cards, item lore.',
    node: (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost">@glhfer</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-[15px] text-giga-gold">glhfer — Tier 6 Crusader</p>
          <p className="mt-2 text-[13px] text-giga-muted">
            2,418 dungeons cleared. 94.2% win rate this season.
          </p>
        </HoverCardContent>
      </HoverCard>
    ),
  },
  pagination: {
    description: 'Page nav with prev/next and active page highlight.',
    node: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
  },
  progress: {
    description: 'Progress bar with cyan → gold gradient fill.',
    node: (
      <div className="grid max-w-md gap-4">
        <div>
          <Label>XP TO NEXT LEVEL</Label>
          <Progress value={42} className="mt-2" />
        </div>
        <div>
          <Label>DUNGEON CLEARED</Label>
          <Progress value={78} className="mt-2" />
        </div>
      </div>
    ),
  },
  'scroll-area': {
    description: 'Scrollable container with Gigaverse-styled teal scrollbar.',
    node: (
      <ScrollArea className="h-48 w-72 rounded-giga border border-giga-border bg-giga-panel/40 p-4">
        <ul className="space-y-2 text-[14px] text-giga-heading">
          {Array.from({ length: 40 }).map((_, i) => (
            <li key={i}>Loot item #{i + 1}</li>
          ))}
        </ul>
      </ScrollArea>
    ),
  },
  sheet: {
    description: 'Slide-out drawer — 4 sides, Radix dialog underneath.',
    node: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">OPEN INVENTORY</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>INVENTORY</SheetTitle>
            <SheetDescription>42 items across 6 categories.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    ),
  },
  skeleton: {
    description: 'Loading placeholder with pulse animation.',
    node: (
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    ),
  },
  table: {
    description: 'Data table with uppercase headers and row hover.',
    node: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PLAYER</TableHead>
            <TableHead>FACTION</TableHead>
            <TableHead className="text-right">RUNS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-giga-gold">@glhfer</TableCell>
            <TableCell>Crusader</TableCell>
            <TableCell className="text-right">2,418</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-giga-gold">@rollerboy</TableCell>
            <TableCell>Archon</TableCell>
            <TableCell className="text-right">1,987</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  carousel: {
    description: 'Embla-backed carousel with prev/next arrows — gigaverse.io landing pattern.',
    node: <CarouselDemo />,
  },
  'tweet-carousel': {
    description:
      'Social quote carousel — auto-advance (6s), pauses on hover, gold pill dot navigation.',
    node: (
      <TweetCarousel
        tweets={[
          {
            id: '1',
            name: 'GigaChad_404',
            handle: '@gigachad',
            body: 'Finally rolled a Relic tier. 200 runs, infinite patience, zero regrets.',
            avatar: 'GC',
          },
          {
            id: '2',
            name: 'rollerboy',
            handle: '@rollerboy',
            body: 'Crusader faction balance is chef kiss. Steel first, ask questions later.',
            avatar: 'RB',
          },
          {
            id: '3',
            name: 'chobo_pls',
            handle: '@chobopls',
            body: 'Chobos rise. Nature first, clean hands, fat loot.',
            avatar: 'CP',
          },
          {
            id: '4',
            name: 'voidwalker',
            handle: '@voidwalker',
            body: 'Gigus mains, report in. The void listens and so do we.',
            avatar: 'VW',
          },
        ]}
      />
    ),
  },
  'giga-loader': {
    description:
      'Unicode/braille frame loaders — ~100 presets from @dot-loaders/react, themed in Gigaverse gold with bitcell labels.',
    node: (
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-8">
          <GigaLoaderInline loader="pulse">LOADING</GigaLoaderInline>
          <GigaLoaderInline loader="radar">SCANNING</GigaLoaderInline>
          <GigaLoaderInline loader="progress-dots">DUNGEON</GigaLoaderInline>
          <GigaLoaderInline loader="helix">BINDING</GigaLoaderInline>
          <GigaLoaderInline loader="heartbeat">ALIVE</GigaLoaderInline>
        </div>
        <div>
          <h3 className="mb-3 font-bitcell text-[12px] uppercase tracking-[2px] text-giga-teal">
            PICKER
          </h3>
          <GigaLoaderPicker columns={5} />
        </div>
      </div>
    ),
  },
  'giga-primitives': {
    description:
      'Gigaverse-native primitives: status pips, stat blocks, faction badges, rarity tags, shimmer button, step progress, etc.',
    node: (
      <div className="space-y-10">
        <div className="flex flex-wrap items-center gap-6">
          <StatBlock value="80,241" label="DAILY PLAYERS" sublabel="+3.2% 24h" />
          <StatBlock value="22.1M" label="DUNGEON RUNS" />
          <StatBlock value="1.2M" label="ITEMS MINTED" />
        </div>

        <SectionHeader
          number={2}
          subtitle="FACTIONS"
          title="CHOOSE YOUR SIDE"
          description="Eight factions, one permanent pick. Each has a primary + light color variant."
          accentColor="#F5C563"
        />

        <NumberedSectionHeader number={1} title="NOOBS" />

        <div className="flex flex-wrap items-center gap-6">
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-giga-gold"><StatusPip tone="gold" /> WALLET</span>
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-giga-cyan"><StatusPip tone="cyan" /> SIGNING</span>
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-giga-green"><StatusPip tone="green" /> CONNECTED</span>
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-giga-muted"><StatusPip tone="muted" /> IDLE</span>
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-giga-live"><StatusPip tone="live" /> IN COMBAT</span>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          <PingPongLoader label="LOADING DUNGEON" />
          <StepProgress current={2} total={4} />
        </div>

        <div className="max-w-md">
          <StepProgressBar
            current={1}
            steps={[
              { label: 'WALLET' },
              { label: 'SIGN' },
              { label: 'CONFIRM' },
              { label: 'PLAY' },
            ]}
          />
        </div>

        <LeftBorderAccent accent="cyan">
          <p className="font-m5x7 text-[17px] text-giga-muted">
            Left-border text accent — a repeating pattern for descriptive blocks. Accent color per section.
          </p>
        </LeftBorderAccent>

        <div className="flex flex-wrap gap-2">
          <FactionBadge faction="crusader" />
          <FactionBadge faction="overseer" />
          <FactionBadge faction="athena" selected />
          <FactionBadge faction="archon" />
          <FactionBadge faction="foxglove" />
          <FactionBadge faction="chobo" />
          <FactionBadge faction="summoner" />
          <FactionBadge faction="gigus" />
        </div>

        <div className="flex flex-wrap gap-3">
          <FactionJoinButton faction="crusader" />
          <FactionJoinButton faction="overseer" />
          <FactionJoinButton faction="athena" />
          <FactionJoinButton faction="archon" />
          <FactionJoinButton faction="foxglove" />
          <FactionJoinButton faction="chobo" />
          <FactionJoinButton faction="summoner" />
          <FactionJoinButton faction="gigus" />
        </div>

        <div className="flex flex-wrap gap-2">
          <RarityTag rarity="common" />
          <RarityTag rarity="rare" />
          <RarityTag rarity="epic" />
          <RarityTag rarity="legendary" />
          <RarityTag rarity="giga" />
        </div>

        <EquipmentStrip
          slots={[
            { label: 'Helm', filled: true, rarity: 'rare' },
            { label: 'Chest', filled: true, rarity: 'epic' },
            { label: 'Weapon', filled: true, rarity: 'legendary' },
            { label: 'Ring', filled: false },
            { label: 'Boots', filled: true, rarity: 'common' },
            { label: 'Relic', filled: false },
          ]}
        />

        <div className="flex flex-wrap gap-3">
          <FactionPopulationCounter faction="crusader" count="12,841" label="CRUSADER" />
          <FactionPopulationCounter faction="archon" count="9,102" label="ARCHON" />
          <FactionPopulationCounter faction="foxglove" count="7,544" label="FOXGLOVE" />
        </div>

        <AccentDivider />

        <ShimmerButton>ENTER THE GIGAVERSE</ShimmerButton>

        <CertificationRow
          items={[
            { label: 'BUILT ON ABSTRACT' },
            { label: 'PAYMENTS BY STRIPE' },
            { label: 'PROOF OF PLAY' },
          ]}
        />
      </div>
    ),
  },

  // ─── PIXEL BORDER VARIANTS ─────────────────────────────────────────────────
  'pixel-arrows': {
    description: 'Pixel art chevron icons — pure SVG with crispEdges rendering. Staircase 2×2px pixel pattern, scales to any size.',
    node: (
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex items-center gap-3">
          <PixelChevronRight className="h-6 w-6 text-giga-gold" />
          <span className="font-bitcell text-[12px] tracking-[2px] text-giga-muted uppercase">Right</span>
        </div>
      </div>
    ),
  },
  'pixel-badge': {
    description: 'Pixel-bordered badge — faction and rarity variants with hard 4px block borders and no border radius.',
    node: (
      <div className="flex flex-wrap gap-3">
        <PixelBadge variant="gold">LEGENDARY</PixelBadge>
        <PixelBadge variant="cyan">AUTHENTICATED</PixelBadge>
        <PixelBadge variant="green">ONLINE</PixelBadge>
        <PixelBadge variant="live">LIVE</PixelBadge>
        <PixelBadge variant="faction" faction="crusader">CRUSADER</PixelBadge>
        <PixelBadge variant="faction" faction="archon">ARCHON</PixelBadge>
      </div>
    ),
  },
  'pixel-border': {
    description: 'Composable pixel border wrapper — 4px (sm) or 6px (md) block borders applied to any child.',
    node: (
      <div className="flex flex-wrap gap-6">
        <PixelBorder borderClass="border-giga-gold" size="md">
          <div className="p-4 font-bitcell text-[14px] tracking-[2px] uppercase text-giga-gold">GOLD BORDER</div>
        </PixelBorder>
        <PixelBorder borderClass="border-giga-cyan/70" size="sm">
          <div className="p-3 font-bitcell text-[14px] tracking-[2px] uppercase text-giga-cyan">CYAN BORDER</div>
        </PixelBorder>
      </div>
    ),
  },
  'pixel-button': {
    description: 'Pixel-bordered button — 4 variants with hard 4px block borders. Primary has shimmer sweep animation.',
    node: (
      <div className="flex flex-wrap items-center gap-4">
        <PixelButton variant="primary">PLAY NOW</PixelButton>
        <PixelButton variant="secondary">JOIN DISCORD</PixelButton>
        <PixelButton variant="ghost">DECLINE</PixelButton>
        <PixelButton variant="destructive">LEAVE FACTION</PixelButton>
        <PixelButton variant="primary" size="lg">ENTER DUNGEON</PixelButton>
      </div>
    ),
  },
  'pixel-card': {
    description: 'Pixel-bordered card — 4 variants (standard, gold, recessed, stat) with 6px block borders.',
    node: (
      <div className="grid gap-4 md:grid-cols-2">
        <PixelCard variant="standard">
          <PixelCardHeader>
            <PixelCardTitle>TOTAL PLAYERS</PixelCardTitle>
            <PixelCardDescription>Daily active</PixelCardDescription>
          </PixelCardHeader>
          <PixelCardContent>
            <p className="text-[42px] leading-none text-giga-gold">80,241</p>
          </PixelCardContent>
        </PixelCard>
        <PixelCard variant="gold">
          <PixelCardHeader>
            <PixelCardTitle>RELIC TIER</PixelCardTitle>
            <PixelCardDescription>Top 0.1% of players</PixelCardDescription>
          </PixelCardHeader>
          <PixelCardContent>
            <p className="font-m5x7 text-[17px] text-giga-heading">The ultimate achievement.</p>
          </PixelCardContent>
        </PixelCard>
      </div>
    ),
  },
  'pixel-carousel': {
    description: 'Pixel-styled Embla carousel with block-border staircase arrows — horizontal and vertical support.',
    node: (
      <div className="font-bitcell text-[14px] tracking-[2px] uppercase text-giga-muted p-4 border border-giga-border rounded-giga text-center">
        Carousel demo — see <span className="text-giga-cyan">/all</span> for live preview
      </div>
    ),
  },
  'pixel-checkbox': {
    description: 'Pixel-bordered checkbox — Radix primitive with 4px block border and crisp square checkmark.',
    node: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <PixelCheckbox id="px-chk1" defaultChecked />
          <label htmlFor="px-chk1" className="font-bitcell text-[14px] tracking-[2px] uppercase text-giga-heading cursor-pointer">ACCEPT TERMS</label>
        </div>
        <div className="flex items-center gap-3">
          <PixelCheckbox id="px-chk2" />
          <label htmlFor="px-chk2" className="font-bitcell text-[14px] tracking-[2px] uppercase text-giga-muted cursor-pointer">RECEIVE UPDATES</label>
        </div>
      </div>
    ),
  },
  'pixel-factions': {
    description: 'Faction pixel buttons — all 8 factions with hard-stop shiny gradient and 4px block borders.',
    node: (
      <div className="flex flex-wrap gap-3">
        <PixelFactionBadge faction="crusader" />
        <PixelFactionBadge faction="overseer" />
        <PixelFactionBadge faction="athena" selected />
        <PixelFactionBadge faction="archon" />
        <PixelFactionBadge faction="foxglove" />
        <PixelFactionBadge faction="chobo" />
        <PixelFactionBadge faction="summoner" />
        <PixelFactionBadge faction="gigus" />
      </div>
    ),
  },
  'pixel-pagination': {
    description: 'Pixel-bordered pagination — block-border prev/next with staircase pixel chevrons.',
    node: (
      <PixelPagination>
        <PixelPaginationContent>
          <PixelPaginationItem>
            <PixelPaginationPrevious href="#" />
          </PixelPaginationItem>
          <PixelPaginationItem>
            <PixelPaginationLink href="#" isActive>1</PixelPaginationLink>
          </PixelPaginationItem>
          <PixelPaginationItem>
            <PixelPaginationLink href="#">2</PixelPaginationLink>
          </PixelPaginationItem>
          <PixelPaginationItem>
            <PixelPaginationLink href="#">3</PixelPaginationLink>
          </PixelPaginationItem>
          <PixelPaginationItem>
            <PixelPaginationEllipsis />
          </PixelPaginationItem>
          <PixelPaginationItem>
            <PixelPaginationNext href="#" />
          </PixelPaginationItem>
        </PixelPaginationContent>
      </PixelPagination>
    ),
  },
  'pixel-progress': {
    description: 'Pixel-bordered progress bar — animated fill with 4px block borders and cyan glow.',
    node: (
      <div className="flex flex-col gap-6 max-w-md">
        <PixelProgress value={65} />
        <PixelProgress value={30} animated={false} />
        <PixelProgress value={90} />
      </div>
    ),
  },
  'pixel-slider': {
    description: 'Pixel-bordered slider — Radix primitive with block-border track and square thumb.',
    node: (
      <div className="max-w-md">
        <PixelSlider defaultValue={[40]} max={100} step={1} />
      </div>
    ),
  },
  'pixel-switch': {
    description: 'Pixel-bordered switch — Radix primitive with 4px block border and square sliding indicator.',
    node: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <PixelSwitch id="px-sw1" defaultChecked />
          <label htmlFor="px-sw1" className="font-bitcell text-[14px] tracking-[2px] uppercase text-giga-heading cursor-pointer">NOTIFICATIONS</label>
        </div>
        <div className="flex items-center gap-4">
          <PixelSwitch id="px-sw2" />
          <label htmlFor="px-sw2" className="font-bitcell text-[14px] tracking-[2px] uppercase text-giga-muted cursor-pointer">AUTO-SAVE</label>
        </div>
      </div>
    ),
  },
}
