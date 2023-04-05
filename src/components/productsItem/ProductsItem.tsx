import React from 'react';
import { IProducts } from 'types/types';

import './productsItem.scss';

export default function ProductsItem({
  brand,
  category,
  description,
  thumbnail,
  title,
}: IProducts) {
  return (
    <li data-testid="product" className="product">
      <h3 className="title">{title}</h3>
      <div className="product__info">
        <img src={thumbnail} alt="product-image" />
        <div className="product__description">
          <p>Brand:{brand}</p>
          <p>Category:{category}</p>
          <p className="descr">{description}</p>
        </div>
      </div>
    </li>
  );
}
