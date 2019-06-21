import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Control from './../../components/Product/Control';
import ProductLists from './../../components/Product/ProductLists';

class ProductListsPage extends Component {
  render() {
    let {token} = this.props;
    if(!token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <div className="container">
          <Control />
          <ProductLists />
        </div>
      );
    }
  }
}

const mapStatetoProps = (state) => ({
		token : state.user.token
})

export default connect(mapStatetoProps, null)(ProductListsPage);