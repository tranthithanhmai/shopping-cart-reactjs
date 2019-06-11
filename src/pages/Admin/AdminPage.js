import React, { Component } from 'react';
import Lists from './../../components/Admin/Lists';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class AdminPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  }

  render() {
    var { products } = this.props;
    return (
      <Lists products={products} onDelete= {this.onDelete} />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);