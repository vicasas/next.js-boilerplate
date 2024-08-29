import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should display the correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Create Next App/)
  })

  test('should display the main elements correctly', async ({ page }) => {
    await page.goto('/')

    // Verify the initial description
    await expect(page.locator('text=Get started by editing')).toBeVisible()

    // Verify the Vercel logo
    const vercelLogo = page.locator('img[alt="Vercel Logo"]')
    await expect(vercelLogo).toBeVisible()

    // Verify the Next.js logo
    const nextLogo = page.locator('img[alt="Next.js Logo"]')
    await expect(nextLogo).toBeVisible()

    // Verify the relevant links excluding the logo link
    const relevantLinks = page.locator('div[class*="grid"] a') // Selects only the links within the grid container
    await expect(relevantLinks).toHaveCount(4)

    // Array of expected URL patterns
    const expectedUrls = [
      new RegExp('^https://nextjs.org/docs'),
      new RegExp('^https://nextjs.org/learn'),
      new RegExp('^https://vercel.com/templates'),
      new RegExp('^https://vercel.com/new'),
    ]

    // Verify each relevant link
    for (let i = 0; i < expectedUrls.length; i++) {
      await expect(relevantLinks.nth(i)).toHaveAttribute(
        'href',
        expectedUrls[i],
      )
    }
  })

  test('should navigate to the Next.js Docs page and verify its content', async ({
    page,
  }) => {
    await page.goto('/')

    // Click the Docs link
    const docsLink = page.getByRole('link', { name: 'Docs' })
    await docsLink.click()

    // Wait for the new page that opens in a new tab
    const newPage = await page.waitForEvent('popup')

    // Expect the URL to match https://nextjs.org/docs
    await expect(newPage).toHaveURL(new RegExp('^https://nextjs.org/docs'))

    // Expects the new page to have a heading with the name "Introduction"
    await expect(
      newPage.getByRole('heading', { name: 'Introduction' }),
    ).toBeVisible()
  })
})
