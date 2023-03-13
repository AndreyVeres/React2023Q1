import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from 'pages/notFound/NotFoundPage';

describe('Not Found Page', () => {
  it('render not found page title ', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/not found page/i)).toBeInTheDocument();
  });
});
