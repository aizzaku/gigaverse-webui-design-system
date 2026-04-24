/**
 * Registry smoke test — validates the skill's "add" command contract.
 *
 * For every entry in REGISTRY:
 *   1. Registry JSON fetches over HTTP (validates the /r/[name] route).
 *   2. JSON parses and has shadcn-shaped fields.
 *   3. The referenced source file exists on disk.
 *   4. Any registryDependencies point at entries we ship.
 *
 * Run: `pnpm --filter @gigaverse/registry smoke` (dev server on :3333 required).
 */
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { REGISTRY } from './registry'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE = process.env.GIGA_REGISTRY_BASE ?? 'http://localhost:3333'

interface Result {
  slug: string
  ok: boolean
  reason?: string
}

async function check(entry: (typeof REGISTRY)[number]): Promise<Result> {
  const url = `${BASE}/r/${entry.name}.json`
  try {
    const res = await fetch(url)
    if (!res.ok) return { slug: entry.name, ok: false, reason: `HTTP ${res.status}` }
    const json: unknown = await res.json()
    if (typeof json !== 'object' || json === null) {
      return { slug: entry.name, ok: false, reason: 'not an object' }
    }
    const shape = json as { name?: string; type?: string; files?: unknown[] }
    if (shape.name !== entry.name) {
      return { slug: entry.name, ok: false, reason: `name mismatch: ${shape.name}` }
    }
    if (shape.type !== 'registry:ui') {
      return { slug: entry.name, ok: false, reason: `wrong type: ${shape.type}` }
    }
    if (!Array.isArray(shape.files) || shape.files.length === 0) {
      return { slug: entry.name, ok: false, reason: 'files[] empty' }
    }
  } catch (err) {
    return { slug: entry.name, ok: false, reason: `fetch failed: ${String(err)}` }
  }

  // Source file on disk?
  const src = path.resolve(
    __dirname,
    '..',
    '..',
    'ui',
    'src',
    'components',
    entry.sourceFile,
  )
  try {
    await readFile(src, 'utf8')
  } catch {
    return { slug: entry.name, ok: false, reason: `missing source: ${src}` }
  }

  // registryDependencies must all be known slugs.
  if (entry.registryDependencies) {
    const known = new Set(REGISTRY.map((e) => e.name))
    const orphan = entry.registryDependencies.find((d) => !known.has(d))
    if (orphan) {
      return { slug: entry.name, ok: false, reason: `unknown dep: ${orphan}` }
    }
  }

  return { slug: entry.name, ok: true }
}

async function main() {
  console.log(`[smoke] checking ${REGISTRY.length} entries against ${BASE}`)
  const results = await Promise.all(REGISTRY.map(check))
  const bad = results.filter((r) => !r.ok)
  for (const r of results) {
    console.log(`${r.ok ? '✓' : '✗'} ${r.slug}${r.reason ? ` — ${r.reason}` : ''}`)
  }
  if (bad.length > 0) {
    console.error(`\n${bad.length} entries failed.`)
    process.exit(1)
  }
  console.log(`\nAll ${results.length} entries pass.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
