import React from 'react';
import { Input } from './Input'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Input', (props) => {
  it('render component', () => {
    render(<Input {...props} />)
  })
  it('render with snapshot', () => {
    const { asFragment } = render(<Input {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('render multiple components', () => {
    render(
    <>
    <Input {...props} />
    <Input {...props} />
    </>)
    expect(screen.queryAllByPlaceholderText(/Enter something/).length).toBe(2)
  })
})