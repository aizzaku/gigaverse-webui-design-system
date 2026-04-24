import type { Config } from 'tailwindcss'
import gigaversePreset from '@gigaverse/tokens/tailwind'
import animate from 'tailwindcss-animate'

const config: Config = {
  presets: [gigaversePreset as Partial<Config>],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../packages/ui/dist/**/*.{js,cjs}',
  ],
  plugins: [animate],
}

export default config
