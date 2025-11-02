import { render, screen } from '@testing-library/react'
import React from 'react'

function Hello() {
  return <h1>Hello, Next.js 15!</h1>
}

test('renders greeting text', () => {
  render(<Hello />)
  expect(screen.getByText('Hello, Next.js 15!')).toBeInTheDocument()
})
