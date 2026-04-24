/** @type {import('next').NextConfig} */

// Set `EXPORT=1` to produce a static out/ dir suitable for GitHub Pages
// (disables the dynamic /r/[name] route in favor of the JSON files
// copied directly from public/r/). Set `BASE_PATH=/your-repo` if hosting
// under a GitHub repo subpath (org.github.io/your-repo).
const isExport = process.env.EXPORT === '1'
const basePath = process.env.BASE_PATH ?? ''

const nextConfig = {
  transpilePackages: ['@gigaverse/ui', '@gigaverse/tokens'],
  reactStrictMode: true,
  ...(isExport && {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    basePath,
    assetPrefix: basePath || undefined,
  }),
}

export default nextConfig
