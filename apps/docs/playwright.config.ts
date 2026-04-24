import { defineConfig, devices } from '@playwright/test'

/**
 * Visual regression config for Gigaverse docs.
 *
 * Assumes the Next dev server is already running on :3333 (the smoke-test
 * workflow we already use). Screenshots live under tests/visual/__screenshots__/.
 *
 * Run: `pnpm --filter @gigaverse/docs test:visual`
 * First-time baseline: `pnpm --filter @gigaverse/docs test:visual --update-snapshots`
 */
export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3333',
    trace: 'off',
  },
  expect: {
    // Tiny color drift tolerance for anti-aliasing / font rendering.
    toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: 'disabled' },
  },
  projects: [
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 375, height: 800 } } },
    { name: 'tablet', use: { viewport: { width: 768, height: 1024 } } },
    { name: 'desktop', use: { viewport: { width: 1280, height: 900 } } },
  ],
})
