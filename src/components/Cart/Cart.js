import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCartsRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';

class Cart extends Component {
  
  componentDidMount() {
    this.props.actions.actFetchCartsRequest();
  }

  render() {
    var { carts } = this.props;
    return (
      <div className="container">
        <div className="row">
          {this.showBilling(carts)}
        </div>
        <div className="row header-form">
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <h2><b>Giỏ hàng </b></h2>
            {/* <div className="action-control">
              <button className="btn btn-primary">
                <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp; Thêm sản phẩm
                            </button>
            </div> */}
          </div>
        </div>
        <div className="row">
          {this.showCarts(carts)}
        </div>
      </div>
    );
  }

  showBilling(carts) {
    let xhtml = null;
    if (carts !== null && carts.length > 0) {
      xhtml = carts.map((cart, index) => {
        return (
          (cart.billing.first_name !== '') ?
            <div className="col-12" key={index}>
              <h3>Key order : {cart.order_key}</h3>
              <table className="table table-hover" style={{ marginBottom: '40px' }}>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Add</th>
                    <th>Phone</th>
                    <th>Postcode</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{cart.billing.first_name}</td>
                    <td>{cart.billing.last_name}</td>
                    <td>{cart.billing.address_1} - {cart.billing.country}</td>
                    <td>{cart.billing.phone}</td>
                    <td>{cart.billing.postcode}</td>
                    <td>{cart.billing.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            : ''
        );
      });
    }
    return xhtml;
  }

  showCarts(carts) {
    let xhtml = null;
    if (carts !== null && carts.length > 0) {
      xhtml = carts.map((cart, index) => {
        var item = null;
        for (var i = 0; i < cart.line_items.length; i++) {
          item = <tr>
                  <td>{cart.line_items[i].name}</td>
                  <td>{cart.line_items[i].price}</td>
                  <td>{cart.line_items[i].quantity}</td>
                  <td>{cart.line_items[i].subtotal}</td>
                  <td>
                    <button type="button">Delete</button>
                  </td>
                </tr>
        }
        return (
          (cart.line_items.length > 0) ?
            <div className="col-12" key={index}>
              <h4>Danh sách sản phẩm key order : {cart.order_key}</h4>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {item}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><b>Subtotal</b></td>
                    <td colSpan="2">{cart.total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            : ''
        );
      });
    }
    return xhtml;
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
      actFetchCartsRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);