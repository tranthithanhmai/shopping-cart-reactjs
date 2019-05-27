import React, { Component } from 'react';

import Control from '../components/Control';
import ProductLists from '../components/ProductLists';

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
