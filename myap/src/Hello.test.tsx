import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Hello from './Hello';
import React from 'react';

test('renders Hello component with name', () => {
  act(() => {
    render(<Hello name="World" />);
  });
  
  const textElement = screen.getByText(/Hello, World!/i);
  expect(textElement).toBeInTheDocument();
});
