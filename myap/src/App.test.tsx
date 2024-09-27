import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders App component', () => {
    render(<App />);
    // Check for elements that should be present in the App component
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
});
