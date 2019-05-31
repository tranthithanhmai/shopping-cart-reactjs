import React, { Component } from 'react';

import ProductItemDetail from './../../components/Product/ProductItemDetail';

class ProductItemPage extends Component {
    render() {
        var {match} = this.props;
        return (
           <ProductItemDetail match = {match} />
        );
    }
}

export default ProductItemPage;
