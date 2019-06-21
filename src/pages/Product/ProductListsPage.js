import React, { Component } from 'react';
import Control from './../../components/Product/Control';
import ProductLists from './../../components/Product/ProductLists';

class ProductListsPage extends Component {
  render() {
    return (
      <div className="container">
        <Control />
        <ProductLists />
      </div>
    );
  }
}

export default ProductListsPage;
