import React from 'react';
import ProductsItem from 'components/productsItem/ProductsItem';
import SearchBar from 'components/searchBar/SearchBar';
import { IProducts } from 'types/types';

import './productsList.scss';
import { cardsData } from '__mocks__/products';

interface State {
  products: IProducts[];
  filterQuery: string;
}

export default class ProductsList extends React.Component {
  state: State = {
    products: cardsData,
    filterQuery: localStorage.getItem('searchQuery') || '',
  };

  searchHandler = (filterQuery: string): void => {
    this.setState({ ...this.state, filterQuery });
  };

  render(): React.ReactNode {
    const { products, filterQuery } = this.state;
    const filteredProduts = products.filter((p) =>
      p.title.toLowerCase().includes(filterQuery.toLowerCase())
    );

    return (
      <>
        <SearchBar filterQuery={filterQuery} searchHandler={this.searchHandler} />
        <ul className="products__list">
          {filteredProduts.length > 0 ? (
            filteredProduts.map((product) => <ProductsItem {...product} key={product.id} />)
          ) : (
            <h3>Products not found</h3>
          )}
        </ul>
      </>
    );
  }
}
