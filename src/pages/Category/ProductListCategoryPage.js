import React, { Component } from 'react';
import ListProductCategory from '../../components/Category/ListProductCategory';

class ProductListCategoryPage extends Component {
  render() {
    var {match, history} = this.props;
    return (
      <ListProductCategory match={match} history ={history} />
    );
  }
}

export default ProductListCategoryPage;
