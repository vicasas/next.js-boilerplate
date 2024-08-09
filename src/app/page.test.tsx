import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('<HomePage>', () => {
  it('should display the Vercel logo', () => {
    render(<HomePage />)

    const vercelLogo = screen.getByAltText('Vercel Logo')

    expect(vercelLogo).toBeInTheDocument()
    expect(vercelLogo).toHaveAttribute('src', '/vercel.svg')
  })

  it('should display the Next.js logo', () => {
    render(<HomePage />)

    const nextLogo = screen.getByAltText('Next.js Logo')

    expect(nextLogo).toBeInTheDocument()
    expect(nextLogo).toHaveAttribute('src', '/next.svg')
  })

  it('should display links to important resources', () => {
    render(<HomePage />)

    expect(screen.getByText('Docs')).toBeInTheDocument()
    expect(screen.getByText('Learn')).toBeInTheDocument()
    expect(screen.getByText('Templates')).toBeInTheDocument()
    expect(screen.getByText('Deploy')).toBeInTheDocument()

    // Verify that the links have the target="_blank" attribute
    const links = screen.getAllByRole('link')

    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
