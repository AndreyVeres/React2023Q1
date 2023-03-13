import React from 'react';
import { API } from 'api/api';
import ProductsItem from 'components/productsItem/ProductsItem';
import SearchBar from 'components/searchBar/SearchBar';
import { IProducts } from 'types/types';

import './productsList.scss';

interface State {
  products: IProducts[];
  filterQuery: string;
}

export default class ProductsList extends React.Component {
  state: State = {
    products: [],
    filterQuery: localStorage.getItem('searchQuery') || '',
  };

  async componentDidMount(): Promise<void> {
    const products = await API.getProducts(15);
    this.setState({ ...this.state, products });
  }

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
