import { notFound } from 'next/navigation'
import Link from 'next/link'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import ReactMarkdown from 'react-markdown'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@gigaverse/ui'
import { PREVIEWS, type ComponentSlug } from '../../../components/previews'

export function generateStaticParams() {
  return Object.keys(PREVIEWS).map((slug) => ({ slug }))
}

/**
 * Map slug → source file under `packages/ui/src/components/`.
 * Most slugs map 1:1; the giga-primitives bundle maps to the single file.
 */
function slugToSourceFile(slug: string): string {
  return `${slug}.tsx`
}

async function readIfExists(absPath: string): Promise<string | null> {
  try {
    return await readFile(absPath, 'utf8')
  } catch {
    return null
  }
}

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const preview = PREVIEWS[slug as ComponentSlug]
  if (!preview) notFound()

  const repoRoot = path.resolve(process.cwd(), '..', '..')
  const [usageMd, source, registryJson] = await Promise.all([
    readIfExists(path.join(process.cwd(), 'content', 'components', `${slug}.md`)),
    readIfExists(
      path.join(repoRoot, 'packages', 'ui', 'src', 'components', slugToSourceFile(slug)),
    ),
    readIfExists(path.join(process.cwd(), 'public', 'r', `${slug}.json`)),
  ])

  const installNpm = `pnpm add @gigaverse/ui @gigaverse/tokens`
  const installShadcn = `npx shadcn@latest add http://localhost:3333/r/${slug}.json`

  return (
    <main className="mx-auto max-w-5xl px-10 py-14">
      <Link
        href="/"
        className="text-[14px] tracking-[2px] text-giga-muted hover:text-giga-cyan"
      >
        ← BACK
      </Link>
      <p className="mt-4 text-[13px] uppercase tracking-[3px] text-giga-teal">COMPONENT</p>
      <h1 className="mb-2 text-[48px] leading-none text-white uppercase">{slug}</h1>
      <p className="mb-8 max-w-2xl text-[16px] leading-[1.3] text-giga-muted">
        {preview.description}
      </p>

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">PREVIEW</TabsTrigger>
          <TabsTrigger value="usage">USAGE</TabsTrigger>
          <TabsTrigger value="install">INSTALL</TabsTrigger>
          <TabsTrigger value="source">SOURCE</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="rounded-giga-xl border border-giga-border bg-giga-dark-card/60 p-10">
            {preview.node}
          </div>
        </TabsContent>

        <TabsContent value="usage">
          <div className="rounded-giga-xl border border-giga-border bg-giga-dark-card/60 p-10 font-m5x7 text-[17px] leading-[1.5] text-giga-heading [&>*]:mb-4 [&_h1]:mt-6 [&_h1]:mb-3 [&_h1]:font-bitcell [&_h1]:text-[24px] [&_h1]:uppercase [&_h1]:tracking-[2px] [&_h1]:text-giga-gold [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:font-bitcell [&_h2]:text-[18px] [&_h2]:uppercase [&_h2]:tracking-[2px] [&_h2]:text-giga-gold [&_h3]:mt-5 [&_h3]:font-bitcell [&_h3]:uppercase [&_h3]:tracking-[2px] [&_h3]:text-giga-heading [&_code]:font-bitcell [&_code]:text-giga-cyan [&_pre]:rounded-giga [&_pre]:border [&_pre]:border-giga-border [&_pre]:bg-giga-panel/60 [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:text-[14px] [&_pre_code]:text-giga-heading [&_table]:w-full [&_th]:border-b [&_th]:border-giga-border [&_th]:pb-2 [&_th]:text-left [&_th]:font-bitcell [&_th]:uppercase [&_th]:tracking-[1.5px] [&_th]:text-giga-gold [&_td]:border-b [&_td]:border-giga-border/40 [&_td]:py-2 [&_td]:pr-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-giga-cyan [&_a]:underline-offset-4 hover:[&_a]:underline">
            {usageMd ? (
              <ReactMarkdown>{usageMd}</ReactMarkdown>
            ) : (
              <p className="text-giga-muted">
                No usage notes yet. Add one at{' '}
                <code className="text-giga-cyan">
                  apps/docs/content/components/{slug}.md
                </code>
                .
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="install">
          <div className="rounded-giga-xl border border-giga-border bg-giga-dark-card/60 p-10 space-y-6">
            <div>
              <h3 className="mb-3 font-bitcell text-[14px] uppercase tracking-[2px] text-giga-teal">
                NPM — locked version
              </h3>
              <pre className="rounded-giga border border-giga-border bg-giga-panel/60 p-4 text-[14px] text-giga-cyan overflow-x-auto">
                <code>{installNpm}</code>
              </pre>
              <p className="mt-2 font-m5x7 text-[14px] text-giga-muted">
                Then <code className="text-giga-cyan">import {'{ '}
                {slug.replace(/-./g, (s) => s[1]!.toUpperCase()).replace(/^./, (s) => s.toUpperCase())}
                {" } from '@gigaverse/ui'"}</code>.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-bitcell text-[14px] uppercase tracking-[2px] text-giga-teal">
                shadcn registry — ownable copy
              </h3>
              <pre className="rounded-giga border border-giga-border bg-giga-panel/60 p-4 text-[14px] text-giga-cyan overflow-x-auto">
                <code>{installShadcn}</code>
              </pre>
              <p className="mt-2 font-m5x7 text-[14px] text-giga-muted">
                Writes <code className="text-giga-cyan">components/ui/{slug}.tsx</code> directly
                into your project so you own and can modify it.
              </p>
            </div>

            {registryJson && (
              <div>
                <h3 className="mb-3 font-bitcell text-[14px] uppercase tracking-[2px] text-giga-teal">
                  Registry JSON
                </h3>
                <pre className="rounded-giga border border-giga-border bg-giga-panel/60 p-4 text-[12px] text-giga-muted overflow-x-auto max-h-[280px]">
                  <code>{registryJson}</code>
                </pre>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="source">
          <div className="rounded-giga-xl border border-giga-border bg-giga-dark-card/60 p-6">
            {source ? (
              <pre className="overflow-x-auto text-[13px] leading-[1.4]">
                <code className="font-bitcell text-giga-heading">{source}</code>
              </pre>
            ) : (
              <p className="p-4 text-giga-muted">
                Source file not found for <code className="text-giga-cyan">{slug}</code>. Some
                entries (e.g. <code className="text-giga-cyan">giga-primitives</code>) bundle
                many exports into a single file — check{' '}
                <code className="text-giga-cyan">
                  packages/ui/src/components/
                </code>{' '}
                directly.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
