import { render, screen } from '@testing-library/react'
import { Header } from '@/components/layout/header'

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />)
    expect(screen.getByText('OpenClaw')).toBeInTheDocument()
  })
  
  it('renders navigation items', () => {
    render(<Header />)
    expect(screen.getByText('Documentation')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })
  
  it('renders language switcher', () => {
    render(<Header />)
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('中')).toBeInTheDocument()
  })
})
