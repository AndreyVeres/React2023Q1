import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('render navigation links', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const aboutLink = screen.getByText(/about/i);
    const homeLink = screen.getByText(/home/i);

    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });

  it('render search input', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const input = screen.getByTestId('search');
    expect(input).toBeInTheDocument();
  });
});
