import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

function escapeForRegex(url: string) {
  return url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

describe('Home', () => {
  it('should render the heading', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /to get started, edit the page\.tsx file\./i,
      }),
    ).toBeInTheDocument()
  })

  const externalLinks = [
    { name: 'Templates', href: 'https://vercel.com/templates' },
    { name: 'Learning', href: 'https://nextjs.org/learn' },
    { name: 'Deploy Now', href: 'https://vercel.com/new' },
    { name: 'Documentation', href: 'https://nextjs.org/docs' },
  ] as const

  externalLinks.forEach(({ name, href }) => {
    it(`should render external link "${name}" with correct attributes`, () => {
      render(<Home />)

      const link = screen.getByRole('link', {
        name: new RegExp(escapeForRegex(name), 'i'),
      })

      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', expect.stringContaining(href))
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
