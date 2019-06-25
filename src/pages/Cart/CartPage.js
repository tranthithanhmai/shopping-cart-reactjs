import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCartsRequest, actDeleteCartRequest, actGoOrder } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import Cart from './../../components/Cart/Cart';

class CartPage extends Component {
  componentDidMount() {
    this.props.actions.actFetchCartsRequest();
    this.props.actions.actGoOrder('Orders', '/shopping-cart-reactjs/shopping-cart');
  }

  onDeleteItem = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.actions.actDeleteCartRequest(id);
    }
  }
  render() {
    var { carts, token } = this.props;
    if (!token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <Cart match={this.props.match} carts={carts} />
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    carts: state.carts,
    token: state.user.token
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actFetchCartsRequest,
      actDeleteCartRequest,
      actGoOrder
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
