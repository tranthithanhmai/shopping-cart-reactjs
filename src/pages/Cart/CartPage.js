import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCartsRequest, actDeleteCartRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';
import Cart from './../../components/Cart/Cart';

class CartPage extends Component {
  componentDidMount() {
    this.props.actions.actFetchCartsRequest();
  }

  onDeleteItem = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.actions.actDeleteCartRequest(id);
    }
  }
  render() {
    var { carts } = this.props;
    return (
      <Cart match={this.props.match} carts={carts} />
    );
  }
}
const mapStateToProps = state => {
  return {
    carts: state.carts
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actFetchCartsRequest,
      actDeleteCartRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
