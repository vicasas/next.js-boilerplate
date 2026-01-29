import { test, expect } from '@playwright/test'

function escapeForRegex(url: string) {
  return url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

test.describe('Home', () => {
  test('should render the heading', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', {
        name: /to get started, edit the page\.tsx file\./i,
      }),
    ).toBeVisible()
  })

  const externalLinks = [
    { name: 'Templates', href: 'https://vercel.com/templates' },
    { name: 'Learning', href: 'https://nextjs.org/learn' },
    { name: 'Deploy Now', href: 'https://vercel.com/new' },
    { name: 'Documentation', href: 'https://nextjs.org/docs' },
  ] as const

  externalLinks.forEach(({ name, href }) => {
    test(`should open "${name}" in a new tab`, async ({ page, context }) => {
      await page.goto('/')

      const link = page.getByRole('link', {
        name: new RegExp(escapeForRegex(name), 'i'),
      })

      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', expect.stringContaining(href))

      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click(),
      ])

      await newPage.waitForLoadState('domcontentloaded')
      await expect(newPage).toHaveURL(new RegExp(`^${escapeForRegex(href)}`))

      await newPage.close()
    })
  })
})
