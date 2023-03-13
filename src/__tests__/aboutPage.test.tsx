import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from 'pages/about/AboutPage';

describe('About Page', () => {
  it('render about page title ', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });
});
