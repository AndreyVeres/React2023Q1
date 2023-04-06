import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsList } from 'components/productsList/ProductsList';
import { StorageMock } from '__mocks__/storage';

describe('localStorage', () => {
  const storage = new StorageMock();
  Object.defineProperty(window, 'localStorage', { value: storage });

  it('get value if local storage not empty', () => {
    storage.setItem('searchQuery', 'test');

    render(
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    );

    const input = screen.getByTestId('search');
    expect(input).toHaveValue('test');
  });

  it('if local storage clear', () => {
    storage.clear();

    render(
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    );

    const input = screen.getByTestId('search');
    expect(input).toHaveValue('');
  });
});
