# Install Snippets

## tailwind-preset — `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'
import gigaversePreset from '@gigaverse/tokens/tailwind'

export default {
  presets: [gigaversePreset],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@gigaverse/ui/dist/**/*.{js,cjs}',
  ],
  plugins: [require('tailwindcss-animate')],
} satisfies Config
```

## globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body { font-family: 'VT323', ui-monospace, monospace; background: #060b14; color: #d7e8f3; }
}
```

## components-json — `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": false
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "utils": "@/lib/utils",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "gigaverse": "https://ui.gigaverse.gg/r/{name}.json"
  }
}
```

## VT323 link (Next `app/layout.tsx`)

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        />
      </head>
      <body className="font-bitcell bg-giga-navy text-giga-heading antialiased">
        {children}
      </body>
    </html>
  )
}
```

## VT323 link (Vite `index.html`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
/>
```

## postcss.config.js

```js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }
```

## First-run sample — `app/page.tsx`

```tsx
import { Button, StatBlock } from '@gigaverse/ui'

export default function Page() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-[56px] text-giga-gold">GIGAVERSE</h1>
      <div className="mt-6 flex gap-4">
        <Button variant="primary" size="lg">PLAY NOW</Button>
        <Button variant="secondary">JOIN DISCORD</Button>
      </div>
      <div className="mt-10 flex gap-10">
        <StatBlock value="80K+" label="PLAYERS" />
        <StatBlock value="22M" label="RUNS" />
      </div>
    </main>
  )
}
```
