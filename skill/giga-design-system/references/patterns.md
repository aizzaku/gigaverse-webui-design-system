# Compose Patterns

Each pattern is a prebuilt tsx template that composes library components into a common UX piece. `/giga-design-system compose <pattern>` writes the template to `components/patterns/<pattern>.tsx`.

| Pattern | What it is | Components pulled |
|---|---|---|
| `login-modal` | Wallet-connect style modal with faction tease | Dialog, Button, Input, Label, Separator |
| `faction-select` | Full-screen 8-tile faction chooser with selected state + population counters | FactionBadge, FactionPopulationCounter, Card, Button, StepProgress |
| `equipment-grid` | 6-slot equipment strip + inventory scroll area | EquipmentStrip, ScrollArea, RarityTag, Tooltip |
| `rarity-inventory` | Filterable item grid, rarity-color bordered tiles | Tabs, ToggleGroup, Card, RarityTag, ScrollArea, Badge |
| `status-hud` | Corner HUD: health bar, energy bar, party avatars, status pips | Progress, Avatar, StatusPip, Card |
| `landing-hero` | Full-page landing hero with shimmer CTA, stat blocks, cert row | ShimmerButton, StatBlock, CertificationRow, NumberedSectionHeader, AccentDivider |
| `leaderboard-table` | Top-N table with rank, player, faction, runs | Table, Avatar, FactionBadge, Pagination |
| `settings-sheet` | Right-side sheet with grouped switches/sliders | Sheet, Switch, Slider, Label, Separator |

## Pattern templates

Templates are in `patterns/` (sibling to `references/`). Each is a single tsx file — see:

- [patterns/login-modal.tsx](../patterns/login-modal.tsx)
- [patterns/faction-select.tsx](../patterns/faction-select.tsx)
- [patterns/equipment-grid.tsx](../patterns/equipment-grid.tsx)
- [patterns/rarity-inventory.tsx](../patterns/rarity-inventory.tsx)
- [patterns/status-hud.tsx](../patterns/status-hud.tsx)
- [patterns/landing-hero.tsx](../patterns/landing-hero.tsx)
- [patterns/leaderboard-table.tsx](../patterns/leaderboard-table.tsx)
- [patterns/settings-sheet.tsx](../patterns/settings-sheet.tsx)

When composing:
1. Copy the pattern file to `components/patterns/<pattern>.tsx` in the target project.
2. Read the top-of-file comment — it lists required registry slugs; auto-`add` any missing.
3. Replace the placeholder data at the top of each file (`SAMPLE_FACTIONS`, `SAMPLE_LOOT`, etc.) with real data bindings.
