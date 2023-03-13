import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AboutPage from 'pages/about/AboutPage';
import MainPage from 'pages/main/MainPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';

describe('App', () => {
  it('render navigation links', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    const aboutLink = screen.getByText(/about/i);
    const homeLink = screen.getByText(/home/i);

    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });

  it('search input in the document', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const input = screen.getByRole('search');

    expect(input).toBeInTheDocument();
  });

  it('render 404 page', () => {
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
