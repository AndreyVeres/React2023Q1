import ProductsList from 'components/productsList/ProductsList';
import React from 'react';

export default class MainPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <ProductsList />
      </>
    );
  }
}
