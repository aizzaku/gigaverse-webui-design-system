# @gigaverse/ui — Component Catalog

All components ship via both NPM (`@gigaverse/ui`) and shadcn registry (`<registry>/r/<name>.json`). Radix primitives provide a11y; Tailwind + cva handle variants; tokens come from `@gigaverse/tokens`.

## P0 — Core (10)

| Component | Registry slug | Notes |
|---|---|---|
| Button | `button` | 8 variants: `primary` (gold gradient, no shimmer), `secondary`, `tertiary`, `ghost`, `acceptPill` (2-stop gold), `tealPill`, `option`, `destructive`. Per-variant focus ring (gold / cyan / live). Sizes: `sm` / `md` / `lg` / `pill` / `optionBox`. Shapes: `md` / `lg` / `full` / `none`. For the animated shimmer CTA, use `ShimmerButton` — reserved pattern. |
| Card | `card` | Variants: `standard` / `tweet` / `strip` / `recessed` / `panel` / `stat`. Sub: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. |
| Input | `input` | Centered bitcell, `border-2`, `placeholder:text-giga-muted/40`. States: `default` / `available` (green) / `error` (red) / `checking`. |
| Label | `label` | Radix label, uppercase tracking-wide styling. |
| Badge | `badge` | Variants: `default` / `gold` / `cyan` / `green` / `live` / `rarity` (needs `rarity` prop) / `faction` (needs `faction` prop). |
| Separator | `separator` | Prop `accent` for gold gradient rule. |
| Tabs | `tabs` | `Tabs` / `TabsList` / `TabsTrigger` / `TabsContent`. Gold active state. |
| Dialog | `dialog` | Radix dialog. `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter`, `DialogClose`. |
| Tooltip | `tooltip` | `TooltipProvider` → `Tooltip` / `TooltipTrigger` / `TooltipContent`. |
| Toast | `toast` | Sonner-backed `<Toaster />` + `toast()` API. |

## P1 — Forms (11)

| Component | Registry slug | Notes |
|---|---|---|
| Checkbox | `checkbox` | Radix checkbox, cyan filled check. |
| RadioGroup | `radio-group` | `RadioGroup` + `RadioGroupItem`. |
| Switch | `switch` | Gold gradient track on check. |
| Slider | `slider` | Single or multi-thumb. Cyan → gold progress gradient. |
| Textarea | `textarea` | Same states as Input. |
| Toggle | `toggle` | Variants `default` / `outline`. |
| ToggleGroup | `toggle-group` | `type="single"` or `type="multiple"`. Propagates variant/size via context. Depends on `toggle`. |
| Popover | `popover` | `Popover` / `PopoverTrigger` / `PopoverContent` / `PopoverAnchor`. |
| Select | `select` | Full Radix select: `SelectTrigger`, `SelectContent`, `SelectGroup`, `SelectLabel`, `SelectItem`, `SelectSeparator`, `SelectValue`. |
| Command | `command` | cmdk palette: `Command` / `CommandInput` / `CommandList` / `CommandEmpty` / `CommandGroup` / `CommandItem` / `CommandSeparator` / `CommandShortcut`. Also `CommandDialog` wrapper. |
| Form | `form` | react-hook-form wrapper. `Form` / `FormField` / `FormItem` / `FormLabel` / `FormControl` / `FormDescription` / `FormMessage` + `useFormField` hook. |

## P2 — Advanced (14)

| Component | Registry slug | Notes |
|---|---|---|
| Accordion | `accordion` | Radix accordion. Gold active header, chevron rotates. |
| Alert | `alert` | Variants: `default` / `info` / `success` / `warning` / `destructive`. `AlertTitle`, `AlertDescription`. |
| AlertDialog | `alert-dialog` | Destructive-style dialog with live-red border. `AlertDialogAction` / `AlertDialogCancel`. |
| Avatar | `avatar` | `Avatar` / `AvatarImage` / `AvatarFallback`. |
| Breadcrumb | `breadcrumb` | `Breadcrumb` / `BreadcrumbList` / `BreadcrumbItem` / `BreadcrumbLink` / `BreadcrumbPage` / `BreadcrumbSeparator` / `BreadcrumbEllipsis`. |
| DropdownMenu | `dropdown-menu` | Full Radix dropdown surface including sub-menus, checkbox/radio items, shortcuts. |
| ContextMenu | `context-menu` | Right-click menu. Same API shape as DropdownMenu. |
| HoverCard | `hover-card` | Hover-reveal panel. |
| Menubar | `menubar` | Horizontal menu bar (file/edit style). |
| NavigationMenu | `navigation-menu` | Radix navigation menu + trigger style helper. |
| Pagination | `pagination` | `Pagination` / `PaginationContent` / `PaginationItem` / `PaginationLink` / `PaginationPrevious` / `PaginationNext` / `PaginationEllipsis`. |
| Progress | `progress` | Cyan → gold gradient fill. |
| ScrollArea | `scroll-area` | Custom scrollbar, teal thumb. |
| Sheet | `sheet` | Slide-out drawer; `side` prop: `top` / `bottom` / `left` / `right`. |
| Skeleton | `skeleton` | Pulsing placeholder. |
| Table | `table` | HTML table primitives with Gigaverse theming. Uppercase tracked headers, teal row hover. |
| Carousel | `carousel` | Embla-backed. `Carousel` / `CarouselContent` / `CarouselItem` / `CarouselPrevious` / `CarouselNext`. |
| TweetCarousel | `tweet-carousel` | Social quote carousel — auto-advance 6s, pauses on hover, gold pill dot nav. `tweets: Tweet[]` prop. |
| LandingModalShell | `landing-modal-shell` | Branded Radix dialog — 3px teal/gold border + gradient header bar + pixel close button. Props: `accent` (`'teal' \| 'gold'`), `size` (`'sm' \| 'lg'`), `title`, `trigger`. |

## Gigaverse-native primitives (from `giga-primitives` bundle)

Single registry slug: `giga-primitives`. All exported as named exports.

| Primitive | Signature | Purpose |
|---|---|---|
| `StatusPip` | `tone: 'gold' \| 'cyan' \| 'green' \| 'muted' \| 'live' \| 'online' \| 'pending' \| 'idle'` | 7×7 colored dot with spec-accurate glow shadow. |
| `PingPongLoader` | `label?: string` | 4 dark blocks + one gold sliding highlight, 1.2s loop. |
| `FactionBadge` | `faction: FactionName`, `selected?`, `asButton?` | Shiny faction chip (4-stop metallic gradient + bevel + shimmer, text = dark shade of primary). |
| `FactionJoinButton` | `faction: FactionName` | Shiny faction CTA with inline gradient, dark text, bevel + shimmer. |
| `RarityTag` | `rarity: Rarity` | Corner-pin tag for inventory tiles. |
| `ShimmerButton` | button-like | **The one** gold shimmer CTA (PlayNowButton). Use sparingly. |
| `AccentDivider` | `<AccentDivider />` | Gold gradient horizontal rule. |
| `SectionDivider` | `<SectionDivider />` | Teal gradient rule, centered max-width container. |
| `StepProgress` | `current, total` | N-of-M discrete step dots. |
| `StepProgressBar` | `steps: {label}[], current: number` | Login-flow bar — gold→teal fill, pulsing glow, labeled steps. |
| `StatBlock` | `value, label, sublabel?` | Big-number + label (responsive scale). |
| `SectionHeader` | `number, subtitle, title, description?, accentColor?, align?` | `[accent-line] [NUMBER — SUBTITLE] [accent-line]` + H2 + description. |
| `NumberedSectionHeader` | `number, title` | Back-compat flat `"01 — TITLE"` header. Prefer `SectionHeader`. |
| `LeftBorderAccent` | `accent: 'cyan' \| 'gold' \| 'sky' \| 'teal'` | Descriptive text block with accent-colored left border. |
| `CertificationRow` | `items: {label, node?}[]` | Badge lockup row. |
| `FactionPopulationCounter` | `faction, count, label?` | Faction-colored bar + count. |
| `SnapSection` | `<SnapSection />` | Viewport-height snap section. |
| `EquipmentStrip` | `slots: {label, icon?, rarity?, filled?}[]` | 6-slot horizontal equipment row with strip container. |
| `SectionAmbientPixels` | `primaryColor, secondaryColor` | Animated pixel-glint decoration for section backgrounds. |
| `ScrollProgressBar` | `target?: RefObject` | 2px gold bar driven by scroll progress (window or container). |
| `LandingNavbar` | `brand, links, actions, scrollProgress?` | Fixed top bar, optional scroll progress, animated active-link pill. |
| `LandingFooter` | `left, right` | Fixed bottom bar with left/right slots. |

## Faction names (exported from `@gigaverse/tokens`)

```ts
type FactionName =
  | 'crusader' | 'overseer' | 'athena' | 'archon'
  | 'foxglove' | 'chobo' | 'summoner' | 'gigus'
```

## Rarity tiers

```ts
type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'relic' | 'giga'
```
