import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/about/AboutPage';
import MainPage from 'pages/main/MainPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';

describe('404 page', () => {
  it('render not found page ', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/not found page/i)).toBeInTheDocument();
  });

  it('render not found page if wrong path', () => {
    render(
      <MemoryRouter initialEntries={['/qweasdzcx']}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Not Found Page/i)).toBeInTheDocument();
  });
});
