import { test, expect } from '@playwright/test'

/**
 * Baseline visual snapshots of the docs pages most likely to regress.
 * Expands later to cover all 44 components once the baseline is stable.
 */
const SNAPSHOT_SLUGS = [
  'button',
  'card',
  'input',
  'badge',
  'dialog',
  'giga-primitives',
  'landing-modal-shell',
  'tweet-carousel',
  'combobox',
  'date-picker',
]

test.describe('docs pages', () => {
  test('home', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('home.png', { fullPage: true })
  })

  for (const slug of SNAPSHOT_SLUGS) {
    test(`/docs/${slug}`, async ({ page }) => {
      await page.goto(`/docs/${slug}`)
      await page.waitForLoadState('networkidle')
      // Wait for the preview card to stabilize.
      await page.getByRole('tab', { name: 'PREVIEW' }).waitFor()
      await expect(page).toHaveScreenshot(`${slug}.png`, { fullPage: true })
    })
  }
})
