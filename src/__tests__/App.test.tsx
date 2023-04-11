import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  it('render navigation links', () => {
    render(<App />);
    const aboutLink = screen.getByText(/about/i);
    const homeLink = screen.getByText(/home/i);

    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });

  it('render search input', () => {
    render(<App />);

    const input = screen.getByTestId('search');
    expect(input).toBeInTheDocument();
  });
});
