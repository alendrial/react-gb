import React from 'react';
import { Button } from './Button'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

describe('Button', (props) => {
    it('render component', () => {
        render(<Button />)
    })
    it('render with snapshot', () => {
        const { asFragment } = render(<Button />)
        expect(asFragment()).toMatchSnapshot()
    })
    it('render with text', () => {
        render(<Button />)
        expect(screen.getByText(/Send message!/)).toBeInTheDocument()
    })
    it('render multiple components', () => {
        render(
        <>
        <Button />
        <Button />
        </>)
        expect(screen.queryAllByRole('button').length).toBe(2)
    })
    it('button is disabled', () => {
        render(<Button disabled />)
        expect(screen.getByText(/Send message!/)).toBeDisabled()
    })
    it('button have style background color green', () => {
        render(<Button />)
        expect(screen.getByText(/Send message!/)).toHaveStyle({ backgroundColor: '#4cc49c'})
    })
    // it('button click with userEvent', () => {
    //     const mockHandler = jest.fn();
    //     render (<Button handleClick={mockHandler} />)
    //     userEvent.click(screen.getByText('Send message!'))
    //     expect(mockHandler).toBeCalledTimes(1)
    // })
    // it('button async click', async () => {
    //     const mockHandler = jest.fn();
    //     render (<Button handleClick={() => setTimeout(mockHandler, 1000)} />)
    //     userEvent.click(screen.getByText(/Send message!/))
    //     await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
    //         timeout:1100,
    //     })
    // })
    
})