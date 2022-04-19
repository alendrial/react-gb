import React from 'react';
import { Form } from '../Form/Form';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

describe('Form testing render with snapshot', (props) => {
  it('should render the form with snapshot', () => {
    const { asFragment } = render(<Form {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
