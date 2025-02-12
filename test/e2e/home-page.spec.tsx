import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the Next.js logo image', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Next.js logo' })).toBeVisible()
  })

  const linkTests = [
    { text: 'Deploy now', href: 'https://vercel.com/new' },
    { text: 'Read our docs', href: 'https://nextjs.org/docs' },
    { text: 'Learn', href: 'https://nextjs.org/learn' },
    { text: 'Example', href: 'https://vercel.com/templates' },
    { text: 'Go to nextjs.org', href: 'https://nextjs.org' },
  ]

  linkTests.forEach(({ text, href }) => {
    test(`should navigate to "${text}" link in a new tab`, async ({
      page,
      context,
    }) => {
      const link = page.getByRole('link', { name: text })

      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', expect.stringContaining(href))
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')

      // Click the link; since it has target="_blank", it will open in a new tab.
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click(),
      ])

      // Wait for the new page to load.
      await newPage.waitForLoadState()
      // Verify that the new page's URL contains the expected href.
      expect(newPage.url()).toContain(href)
      // Close the new page to keep the context clean.
      await newPage.close()
    })
  })
})
