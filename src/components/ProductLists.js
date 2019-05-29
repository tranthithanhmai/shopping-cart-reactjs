import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductItem from './ProductItem';
import * as callApi from './../services/apiCaller';
import { filter, includes } from 'lodash';

class ProductLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    callApi.call('wordpress-demo/wp-json/wc/v3/products', 'GET', null).then(res => {
      this.setState({
        products: res.data
      });
    })
  }

  render() {
    var { products } = this.state
    var { strSearch } = this.props;
    var itemsOrigin = (products !== null) ? [...products] : []; 
  
    //Search
    products = filter(itemsOrigin, (product) => {
        return includes(product.name.toLowerCase() , strSearch.toLowerCase());
    });

    return (
      <div className="row">
        {this.showProducts(products)}
      </div>
    );
  }

  showProducts(products) {
    let xhtml = null;
    if (products !== null && products.length > 0) {
      xhtml = products.map((product, index) => {
        return (
          <ProductItem key={index} product={product} />
        );
      });
    }
    return xhtml;
  }
}

const mapStateToProps = state => {
  return {
      strSearch : state.strSearch
  };
}

export default connect(mapStateToProps,null)(ProductLists);