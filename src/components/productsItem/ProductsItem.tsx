import React from 'react';
import { IProducts } from 'types/types';

import './productsItem.scss';

export default class ProductsItem extends React.Component<IProducts> {
  constructor(props: IProducts) {
    super(props);
  }

  render() {
    const { brand, category, description, thumbnail, title } = this.props;

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
}
