import React, { Component } from 'react';

import ProductItemDetail from '../components/ProductItemDetail';

class ProductItemPage extends Component {
    render() {
        var {match, product} = this.props;
        return (
           <ProductItemDetail match = {match} />
        );
    }
}

export default ProductItemPage;
