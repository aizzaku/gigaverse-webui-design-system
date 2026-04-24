import { NextResponse, type NextRequest } from 'next/server'
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'

export const dynamic = 'force-static'
export const revalidate = false

/**
 * Pre-bake one response per entry in public/r/ so the route works in
 * `output: 'export'` (static export) mode.
 */
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'public', 'r')
  try {
    const files = await readdir(dir)
    return files
      .filter((f) => f.endsWith('.json'))
      .map((f) => ({ name: f.replace(/\.json$/, '') }))
  } catch {
    return []
  }
}

/**
 * Registry JSON serving endpoint — the canonical install target for
 * `npx shadcn@latest add <origin>/r/<name>.json`.
 *
 * Reads from `apps/docs/public/r/<name>.json` (mirrored during
 * `pnpm --filter @gigaverse/registry build`). Having a dedicated route
 * lets us:
 *   - set `Content-Type: application/json` and CORS explicitly,
 *   - add cache headers tuned for shadcn's fetch behavior,
 *   - later swap the source (e.g. stream from the registry package
 *     without a public/ mirror) without breaking consumers.
 *
 * `.json` in the slug is accepted and stripped (shadcn sends it).
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name: raw } = await params
  const name = raw.replace(/\.json$/i, '')
  if (!/^[a-z0-9-]+$/i.test(name)) {
    return NextResponse.json({ error: 'Invalid component name' }, { status: 400 })
  }

  const filePath = path.join(process.cwd(), 'public', 'r', `${name}.json`)
  try {
    const body = await readFile(filePath, 'utf8')
    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
      },
    })
  } catch {
    return NextResponse.json(
      { error: `Registry entry not found: ${name}` },
      { status: 404 },
    )
  }
}
