import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')
const files = ['index.js', 'index.cjs']
const directive = `"use client";\n`

for (const f of files) {
  const p = resolve(distDir, f)
  const src = await readFile(p, 'utf8')
  if (src.startsWith('"use client"') || src.startsWith("'use client'")) continue
  await writeFile(p, directive + src, 'utf8')
  console.log(`[use client] prepended -> ${f}`)
}
