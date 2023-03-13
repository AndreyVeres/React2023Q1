import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductsList from '../productsList/ProductsList';

describe('ProductsList', () => {
  it('render items after fetch ', async () => {
    render(
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    );

    expect(screen.queryByTestId('product')).toBeNull();
    expect(await screen.findAllByTestId('product')).toContainEqual(expect.any(HTMLElement));
  });
});
