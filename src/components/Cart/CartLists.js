import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actViewCartsRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';

class CartLists extends Component {

  componentDidMount() {
    let { id } = this.props.match.params;
    if (id) {
      this.props.actions.actViewCartsRequest(id);
    }
  }
  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    var { cart } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ display: 'flex', marginBottom: '40px' }}>
              <button class="btn btn-light" onClick={this.onClickBack} style={{marginRight: '10px'}}><i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp;Back</button>
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
      var items = cart.line_items
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

const mapStateToProps = state => {
  return {
    cart: state.itemEditing
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actViewCartsRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartLists);
