import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { actViewRelatedProductRequest } from './../../actions/index';
import ProductItem from '././/ProductItem';

class RelatedProduct extends Component {
  componentDidUpdate(){
    let { product } = this.props;
    if(product) {
      let arrId = product.join(',');
      this.props.actions.actViewRelatedProductRequest(arrId);
    }
  }
  render() {
    let { relatedProduct } = this.props;
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
const mapStateToProps = state => {
  return {
    product: state.itemEditing.related_ids,
    relatedProduct: state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actViewRelatedProductRequest
    }, dispatch)
  }
}

RelatedProduct.propTypes = {
  product: PropTypes.array,
  relatedProduct: PropTypes.array,
  actViewRelatedProductRequest: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProduct);
