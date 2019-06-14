import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCartsRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';
import CartLists from './CartLists';
import { Link } from 'react-router-dom';

class Cart extends Component {

  componentDidMount() {
    this.props.actions.actFetchCartsRequest();
  }

  render() {
    var { carts } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <h2><b>List Orders</b></h2>
            <div className="action-control">
              <Link
                to="/shopping-cart-reactjs/shopping-cart/add"
                type="button"
                className="btn btn-info btn-block">
                <i className='fa fa-plus' aria-hidden="true"></i> &nbsp;Thêm Order
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {this.showBilling(carts)}
        </div>
        <CartLists carts={carts} />
      </div>
    );
  }

  showBilling(carts) {
    let xhtml = null;
    if (carts !== null && carts.length > 0) {
      xhtml = carts.map((cart, index) => {
        return (
          // (cart.billing.first_name !== '') ?
          //   : ''
          <div className="col-12" key={index}>
            <h5>Key order : {cart.order_key}</h5>
            <table className="table table-hover" style={{ marginBottom: '40px' }}>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Add</th>
                  <th>Phone</th>
                  <th>Postcode</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cart.billing.first_name}</td>
                  <td>{cart.billing.last_name}</td>
                  <td>{cart.billing.address_1} - {cart.billing.country}</td>
                  <td>{cart.billing.phone}</td>
                  <td>{cart.billing.postcode}</td>
                  <td>{cart.billing.state}</td>
                </tr>
              </tbody>
            </table>
          </div>
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