import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from 'components/searchBar/SearchBar';
import { StorageMock } from '__mocks__/storage';

describe('SearchBar', () => {
  const searchHandlerMock = jest.fn();
  const storage = new StorageMock();
  Object.defineProperty(window, 'localStorage', { value: storage });

  it('input value save to localStorage', () => {
    render(<SearchBar filterQuery="" searchHandler={searchHandlerMock} />);
    const inputElement = screen.getByTestId('input');
    const inputValue = 'test value';

    fireEvent.input(inputElement, { target: { value: inputValue } });

    expect(storage.getItem('searchQuery')).toBe(inputValue);
  });

  it('render with filterQuery value', () => {
    const filterQuery = 'test value';
    render(<SearchBar filterQuery={filterQuery} searchHandler={searchHandlerMock} />);

    const inputElement = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(inputElement.value).toBe(filterQuery);
  });
});
