import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCartsRequest, actDeleteCartRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Cart extends Component {

  componentDidMount() {
    this.props.actions.actFetchCartsRequest();
  }

  onDeleteItem = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.actions.actDeleteCartRequest(id);
    }
  }

  render() {
    var { carts } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
            <h2><b>List Orders</b></h2>
            <div className="action-control">
              <Link
                to="/shopping-cart-reactjs/shopping-cart/add"
                type="button"
                className="btn btn-info btn-block">
                <i className='fa fa-plus' aria-hidden="true"></i> &nbsp;Create Order
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-hover table-responsive">
              <thead>
                <tr>
                  <th>Key order</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Add</th>
                  <th>Phone</th>
                  <th>Postcode</th>
                  <th>State</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.showBilling(carts)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  showBilling(carts) {
    let xhtml = null;
    if (carts !== null && carts.length > 0) {
      xhtml = carts.map((cart, index) => {
        return (
          <tr key={index}>
            <td>{cart.order_key}</td>
            <td>{cart.billing.first_name}</td>
            <td>{cart.billing.last_name}</td>
            <td>{cart.billing.address_1} - {cart.billing.country}</td>
            <td>{cart.billing.phone}</td>
            <td>{cart.billing.postcode}</td>
            <td>{cart.billing.state}</td>
            <td style={{ display: 'flex' }}>
              <Link
                to={`/shopping-cart-reactjs/shopping-cart/edit/${cart.id}`}
                type="button"
                className="btn btn-sm btn-info">
                Edit
              </Link>
              <button type="button" className="btn btn-sm btn-danger" style={{ marginLeft: '5px' }}
                onClick={() => this.onDeleteItem(cart.id)}>
                Delete
              </button>
              <Link
                to={`/shopping-cart-reactjs/shopping-cart/view/${cart.id}`}
                style={{ marginLeft: '5px' }}
                cart = { cart }
                type="button"
                className="btn btn-sm btn-success">
                View
              </Link>
            </td>
          </tr>
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
      actFetchCartsRequest,
      actDeleteCartRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);