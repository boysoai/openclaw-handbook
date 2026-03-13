import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/footer'

describe('Footer', () => {
  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/OpenClaw Community/i)).toBeInTheDocument()
  })
  
  it('renders resource links', () => {
    render(<Footer />)
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
  })
})
