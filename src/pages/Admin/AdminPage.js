import React, { Component } from 'react';
import Lists from './../../components/Admin/Lists';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class AdminPage extends Component {
  componentDidMount() {
    this.props.actions.actFetchProductsRequest();
  }

  onDelete = (id) => {
    this.props.actions.actDeleteProductRequest(id);
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
    actions: bindActionCreators({
      actFetchProductsRequest,
      actDeleteProductRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);