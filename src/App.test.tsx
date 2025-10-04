import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YouTrack Projects heading', () => {
  render(<App />);
  expect(screen.getByText(/YouTrack Projects/i)).toBeInTheDocument();
});
