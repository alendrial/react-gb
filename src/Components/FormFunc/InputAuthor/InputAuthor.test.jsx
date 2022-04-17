import React from 'react';
import { InputAuthor } from './InputAuthor'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Input', (props) => {
  it('render component', () => {
    render(<InputAuthor {...props} />)
  })
  it('render with snapshot', () => {
    const { asFragment } = render(<InputAuthor {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})