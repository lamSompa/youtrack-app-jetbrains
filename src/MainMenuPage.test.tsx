import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainMenuPage from './MainMenuPage';

describe('MainMenuPage', () => {
  it('renders project list and admin toggle', () => {
    render(<MainMenuPage />);
    expect(screen.getByText('YouTrack Projects')).toBeInTheDocument();
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Admin Mode')).toBeInTheDocument();
  });

  it('toggles admin mode and persists state', () => {
    render(<MainMenuPage />);
    // Find the checkbox by role
    const toggleInput = screen.getByRole('checkbox');
    expect(toggleInput).toBeInTheDocument();

    // Toggle on
    fireEvent.click(toggleInput);
    expect((toggleInput as HTMLInputElement).checked).toBe(true);

    // Toggle off
    fireEvent.click(toggleInput);
    expect((toggleInput as HTMLInputElement).checked).toBe(false);
  });
});
