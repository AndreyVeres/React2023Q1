import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import ProductsList from 'components/productsList/ProductsList';

describe('Search bar', () => {
  it('search bar take value from locaStorage', () => {
    localStorage.setItem('searchQuery', 'searchQuery');
    render(
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    );
    const input = screen.getByTestId('input');
    expect(input).toHaveValue('searchQuery');
  });

  it('empty input if local storage clear', () => {
    localStorage.clear();

    render(
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    );
    const input = screen.getByTestId('input');
    expect(input).toHaveValue('');
  });
});
