import React, { Component } from 'react';
import CartLists from '../../components/Cart/CartLists';

class ViewOrderPage extends Component {
  render() {
    return (
      <div className="container">
        <CartLists match={this.props.match} history={this.props.history} />
      </div>
    );
  }
}

export default ViewOrderPage;
