import React, { Component } from 'react';
import Order from '../../components/Cart/Order';

class OrderPage extends Component {
  render() {
    return (
      <div className="container">
        <Order match={this.props.match} history={this.props.history} />
      </div>
    );
  }
}

export default OrderPage;
