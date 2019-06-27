import React, { Component } from 'react';

class CartLists extends Component {
  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    let { cart } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ display: 'flex', marginBottom: '40px' }}>
              <button className="btn btn-light" onClick={this.onClickBack} style={{ marginRight: '10px' }}><i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp;Back</button>
              <h2>Danh sách sản phẩm của key order : {cart.order_key} </h2>
            </div>
            <table className="table table-hover" style={{ marginBottom: '40px' }}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {this.showCart(cart)}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3"><b>Subtotal</b></td>
                  <td><b>{cart.total}</b></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }

  showCart(cart) {
    let xhtml = null;
    if (cart !== null && cart.line_items) {
      let items = cart.line_items
      if (items !== null && items.length > 0) {
        xhtml = items.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.subtotal}</td>
            </tr>
          );
        });
      }
    }
    return xhtml;
  }
}
export default CartLists;
