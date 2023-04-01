import React, { useEffect, useState } from 'react';
import ProductsItem from 'components/productsItem/ProductsItem';
import { IProducts } from 'types/types';

import './productsList.scss';
import { cardsData } from '__mocks__/products';

export default function ProductsList() {
  const [products, setProducts] = useState<IProducts[]>(cardsData);
  const [inputValue, setInputValue] = useState<string>('');

  const searchHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setInputValue(() => value);

    setProducts(
      cardsData.filter((product) =>
        product.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const value = localStorage.getItem('searchQuery');
    if (value) setInputValue(value);
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchQuery', inputValue);
    };
  }, [inputValue]);
  return (
    <>
      <input data-testid="search" value={inputValue} onChange={(e) => searchHandler(e)} />
      <ul className="products__list">
        {products.length > 0 ? (
          products.map((product) => <ProductsItem {...product} key={product.id} />)
        ) : (
          <h3>Products not found</h3>
        )}
      </ul>
    </>
  );
}
