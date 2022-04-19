import React from 'react';
import { Button } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

describe('Button', (props) => {
  it('render component', () => {
    render(<Button name={'Send message!'} />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<Button name={'Send message!'} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('render with text', () => {
    render(<Button name={'Send message!'} />);
    expect(screen.getByText(/Send message!/)).toBeInTheDocument();
  });
  it('render multiple components', () => {
    render(
      <>
        <Button name={'Send message!'} />
        <Button name={'Send message!'} />
      </>
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });
  it('button is disabled', () => {
    render(<Button name={'Send message!'} disabled />);
    expect(screen.getByText(/Send message!/)).toBeDisabled();
  });
  it('button have style background color green', () => {
    render(<Button name={'Send message!'} />);
    expect(screen.getByText(/Send message!/)).toHaveStyle({
      backgroundColor: '#4cc49c',
    });
  });
  it('button click with userEvent', () => {
    const mockHandler = jest.fn();
    render(<Button click={mockHandler} />);
    userEvent.click(screen.getByRole('button'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  // it('button async click', async () => {
  //     const mockHandler = jest.fn();
  //     render (<Button handleClick={() => setTimeout(mockHandler, 1000)} />)
  //     userEvent.click(screen.getByRole('button'))
  //     await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
  //         timeout:1100,
  //     })
  // })
});
