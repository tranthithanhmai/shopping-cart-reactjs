import React, { Component } from 'react';
import Cart from './../../components/Cart/Cart';

class CartPage extends Component {
  render() {
    return (
      <Cart match={this.props.match} />
    );
  }
}

export default CartPage;
