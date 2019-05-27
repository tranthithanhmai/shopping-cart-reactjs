import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductLists extends Component {
    render() {
        return (
            <div className="row">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        );
    }
}

export default ProductLists;