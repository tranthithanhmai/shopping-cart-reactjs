import React, { Component } from 'react';
import ProductItemDetail from './../../components/Product/ProductItemDetail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actGetProductRequest } from './../../actions/index';

class ProductItemPage extends Component {
  componentDidMount() {
    var { match } = this.props;
    var id = match.params.id;
    this.props.actions.actGetProductRequest(id);
  }
  render() {
    var { match, product } = this.props;
    return (
      <ProductItemDetail match={match} product={product} />
    );
  }
}
const mapStateToProps = state => {
  return {
    product: state.itemEditing
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actGetProductRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemPage);
