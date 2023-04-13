import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ProductsList } from 'components/productsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('localStorage', () => {
  it('if local storage clear', () => {
    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const input = screen.getByTestId('search');
    expect(input).toHaveValue('');
  });
  it('should keep input value after re-render', async () => {
    const { getByTestId, rerender } = render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const input = (await waitFor(() => getByTestId('search'))) as HTMLInputElement;
    const inputValue = 'TestName';
    fireEvent.input(input, { target: { value: inputValue } });

    rerender(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const updatedInput = (await waitFor(() => getByTestId('search'))) as HTMLInputElement;
    expect(updatedInput.value).toEqual(inputValue);
  });
});
