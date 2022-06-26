import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Layout />)
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
  })
  it('renders a Description', () => {
    render(<Layout />)
    expect(screen.getByTestId("description")).toBeInTheDocument();
  })
  it('renders a Search Form', () => {
    render(<Layout />)
    expect(screen.getByTestId("search")).toBeInTheDocument();
  })
})