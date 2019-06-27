import React, { Component } from 'react';
import * as callApi from './../../services/apiCaller';
import ProductItem from '././/ProductItem';

class RelatedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProduct: []
    };
  }

  componentDidUpdate() {
    let { product } = this.props;
    if (product !== undefined) {
      let arrId = product.join(',');
      callApi.call(`wordpress-demo/wp-json/wc/v3/products?include=${arrId}`, 'GET', null).then(res => {
        this.setState({
          relatedProduct: res.data
        });
      })
    }
  }

  render() {
    let { relatedProduct } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p style={{ height: '2px', width: '50px', background: '#000' }}></p>
            <h2>Related products</h2>
          </div>
        </div>
        <div className="row">
          {this.showRelatedProducts(relatedProduct)}
        </div>
      </div>
    );
  }

  showRelatedProducts(relatedProduct) {
    let xhtml = null;
    if (relatedProduct !== null && relatedProduct.length > 0) {
      xhtml = relatedProduct.map((product, index) => {
        return (
          <ProductItem key={index} product={product} />
        );
      });
    }
    return xhtml;
  }
}

export default RelatedProduct;

