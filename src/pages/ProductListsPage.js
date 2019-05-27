import React, { Component } from 'react';

import SortControl from '../components/SortControl';
import ProductLists from '../components/ProductLists';
import SearchControl from '../components/SearchControl';

class ProductListsPage extends Component {
    render() {
        return (
            <div className="container">
                <SortControl />
                <ProductLists />
                <SearchControl />
            </div>
        );
    }
}

export default ProductListsPage;
