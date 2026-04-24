import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { REGISTRY } from './registry'

const __dirname = dirname(fileURLToPath(import.meta.url))
const UI_SRC = resolve(__dirname, '../../ui/src/components')
const DOCS_PUBLIC = resolve(__dirname, '../../../apps/docs/public/r')
const OUTPUT = resolve(__dirname, '../output')

interface RegistryFileJson {
  $schema: string
  name: string
  type: string
  description?: string
  dependencies?: string[]
  registryDependencies?: string[]
  files: Array<{
    path: string
    content: string
    type: string
    target: string
  }>
}

async function buildOne(
  entry: (typeof REGISTRY)[number],
): Promise<{ name: string; json: RegistryFileJson }> {
  const sourcePath = resolve(UI_SRC, entry.sourceFile)
  const content = await readFile(sourcePath, 'utf8')
  const json: RegistryFileJson = {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: entry.name,
    type: entry.type,
    ...(entry.description ? { description: entry.description } : {}),
    ...(entry.dependencies ? { dependencies: entry.dependencies } : {}),
    ...(entry.registryDependencies ? { registryDependencies: entry.registryDependencies } : {}),
    files: [
      {
        path: `components/ui/${entry.name}.tsx`,
        content,
        type: entry.type,
        target: `components/ui/${entry.name}.tsx`,
      },
    ],
  }
  return { name: entry.name, json }
}

async function writeJson(dir: string, name: string, data: unknown): Promise<void> {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true })
  await writeFile(resolve(dir, `${name}.json`), JSON.stringify(data, null, 2), 'utf8')
}

async function main(): Promise<void> {
  const results = await Promise.all(REGISTRY.map(buildOne))

  for (const { name, json } of results) {
    await writeJson(OUTPUT, name, json)
    await writeJson(DOCS_PUBLIC, name, json)
  }

  const index = {
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    name: 'gigaverse',
    homepage: 'https://ui.gigaverse.gg',
    items: REGISTRY.map((r) => ({
      name: r.name,
      type: r.type,
      ...(r.description ? { description: r.description } : {}),
    })),
  }
  await writeJson(OUTPUT, 'index', index)
  await writeJson(DOCS_PUBLIC, 'index', index)

  console.log(`[registry] built ${results.length} entries -> ${OUTPUT}`)
  console.log(`[registry] mirrored to ${DOCS_PUBLIC}`)
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
