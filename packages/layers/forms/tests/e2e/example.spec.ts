import { test, expect } from '@playwright/test'

test.describe('Example 1', () => {
  test('Base page loads with expected visuals 1', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible()
    await expect(page.getByText('{ "name": "My amazing Nuxt layer **FORMS** playground" }')).toBeVisible()
  })
})
