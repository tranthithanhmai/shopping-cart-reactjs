import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';
import { actFetchProductsRequest } from './../../actions/index';

class ProductLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.props.showProducts();
  }

  render() {
    // var { products } = this.state
    var { strSearch, sort, products } = this.props;
    var { orderBy, orderDir } = sort;
    var itemsOrigin = (products !== null) ? [...products] : [];

    //Search
    products = filter(itemsOrigin, (product) => {
      return includes(product.name.toLowerCase(), strSearch.toLowerCase());
    });
    //Sort
    products = funcOrderBy(products, [orderBy], [orderDir]);
    return (
      <div className="row">
        <div className="col-12" style={{ marginBottom: '20px' }}>
          <h4>Total: <b>{products.length}</b> item(s)</h4>
        </div>
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
    strSearch: state.strSearch,
    sort: state.sort,
    products:  state.product
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showProducts: () => {
      dispatch(actFetchProductsRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductLists);