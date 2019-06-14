import React, { Component } from 'react';
import BodyCartList from './../Cart/BodyCartList';
import { connect } from 'react-redux';
import { actDeleteCartRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';
class CartLists extends Component {

  onDeleteItem = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.actions.actDeleteCartRequest(id);
    }
  }

  render() {
    var { carts } = this.props;
    return (
      <div className="container">
        {/* <div className="row header-form">
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <h2><b>Giỏ hàng </b></h2>
          </div>
        </div> */}
        <div className="row">
          {this.showCarts(carts)}
        </div>
      </div>
    );
  }
  showCarts(carts) {
    let xhtml = null;
    if (carts !== null && carts.length > 0) {
      xhtml = carts.map((cart, index) => {
        return (
          (cart.line_items.length > 0) ?
            <div className="col-12" key={index}>
              <h5>Danh sách sản phẩm key order : {cart.order_key}</h5>
              <table className="table table-hover" style={{ marginBottom: '40px' }}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <BodyCartList carts={cart.line_items} />
                <tfoot>
                  <tr>
                    <td colSpan="3"><b>Subtotal</b></td>
                    <td>{cart.total}</td>
                    <td>
                      <button type="button" className="btn btn-danger"
                        onClick={() => this.onDeleteItem(cart.id)}>
                        Delete
                      </button>
                    </td>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actDeleteCartRequest
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CartLists);
