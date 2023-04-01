import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { StorageMock } from '__mocks__/storage';
import ProductsList from 'components/productsList/ProductsList';

describe('SearchBar', () => {
  const storage = new StorageMock();
  Object.defineProperty(window, 'localStorage', { value: storage });

  it('input value save to localStorage', () => {
    const { unmount } = render(<ProductsList />);
    const inputElement = screen.getByTestId('search');
    const inputValue = 'test value';

    fireEvent.input(inputElement, { target: { value: inputValue } });
    unmount();
    expect(storage.getItem('searchQuery')).toBe(inputValue);
  });

  it('render with filterQuery value', () => {
    const filterQuery = 'test value';
    storage.setItem('searchQuery', filterQuery);
    render(<ProductsList />);

    const inputElement = screen.getByTestId('search') as HTMLInputElement;
    expect(inputElement.value).toBe(filterQuery);
  });
});
