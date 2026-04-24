// Pattern: leaderboard-table
// Registry deps: table, avatar, pagination, giga-primitives
'use client'

import {
  Avatar,
  AvatarFallback,
  FactionBadge,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@gigaverse/ui'

type FactionName = 'crusader' | 'overseer' | 'athena' | 'archon' | 'foxglove' | 'chobo' | 'summoner' | 'gigus'

const ROWS: {
  rank: number
  player: string
  initials: string
  faction: FactionName
  runs: number
}[] = [
  { rank: 1, player: '@glhfer', initials: 'GF', faction: 'crusader', runs: 2418 },
  { rank: 2, player: '@rollerboy', initials: 'RB', faction: 'archon', runs: 1987 },
  { rank: 3, player: '@chobo_pls', initials: 'CP', faction: 'chobo', runs: 1712 },
  { rank: 4, player: '@gigachad_xd', initials: 'GX', faction: 'gigus', runs: 1604 },
  { rank: 5, player: '@voidwalker', initials: 'VW', faction: 'summoner', runs: 1501 },
]

export function LeaderboardTable() {
  return (
    <div className="mx-auto max-w-4xl p-10">
      <h1 className="mb-6 text-[36px] text-white uppercase tracking-wide">LEADERBOARD</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">RANK</TableHead>
            <TableHead>PLAYER</TableHead>
            <TableHead>FACTION</TableHead>
            <TableHead className="text-right">DUNGEON RUNS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow key={row.rank}>
              <TableCell className="text-giga-gold">#{row.rank}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{row.initials}</AvatarFallback>
                  </Avatar>
                  <span>{row.player}</span>
                </div>
              </TableCell>
              <TableCell>
                <FactionBadge faction={row.faction} />
              </TableCell>
              <TableCell className="text-right text-giga-heading">
                {row.runs.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
