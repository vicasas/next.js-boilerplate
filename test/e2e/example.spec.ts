import { test, expect } from '@playwright/test'

test.describe('Playwright website example', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/)
  })

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/')

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click()

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole('heading', { name: 'Installation' }),
    ).toBeVisible()
  })
})

test.describe('Home Page example', () => {
  test('docs link', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Click the docs link.
    await page.getByRole('link', { name: 'Docs' }).click()

    // Wait for the new page, that open in new tab.
    const newPage = await page.waitForEvent('popup')

    // Expect the url to be https://nextjs.org/docs.
    await expect(newPage.url()).toMatch(
      /^https:\/\/nextjs\.org\/docs(?:\?.*)?$/,
    )

    // Expects page to have a heading with the name of Introduction.
    await expect(
      newPage.getByRole('heading', { name: 'Introduction' }),
    ).toBeVisible()
  })
})
