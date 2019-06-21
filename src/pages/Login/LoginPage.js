import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './../../components/Login/Login';
import ProductListsPage from './../Product/ProductListsPage';


class LoginPage extends Component {
  render() {
    return (
      <Login />
    );
  }

  showArea(user) {
    if (user.isLogin === false) {
      return <Login />;
    } else if (user.isLogin === true) {
      return <ProductListsPage />;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null)(LoginPage);