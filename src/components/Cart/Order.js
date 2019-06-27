import React, { Component } from 'react';
import {
  actAddCartRequest,
  actGetCartRequest,
  actUpdateCartRequest,
  actGoOrderItem
} from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      address_1: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      email: "",
      phone: "",
      shipping_first_name: "",
      shipping_last_name: "",
      shipping_address_1: "",
      shipping_city: "",
      shipping_state: "",
      shipping_postcode: "",
      shipping_country: ""
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match.params.id) {
      const id = match.params.id;
      this.props.actions.actGetCartRequest(id);
      this.props.actions.actGoOrderItem('Edit', `shopping-cart-reactjs/shopping-cart/edit/${id}`);
    } else {
      this.props.actions.actGoOrderItem('Add', `shopping-cart-reactjs/shopping-cart/add`);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      let { itemEditing } = nextProps;
      if (!isEmpty(itemEditing)) {
        this.setState({
          id: itemEditing.id,
          first_name: itemEditing.billing.first_name,
          last_name: itemEditing.billing.last_name,
          address_1: itemEditing.billing.address_1,
          city: itemEditing.billing.city,
          state: itemEditing.billing.state,
          postcode: itemEditing.billing.postcode,
          country: itemEditing.billing.country,
          email: itemEditing.billing.email,
          phone: itemEditing.billing.phone,
          shipping_first_name: itemEditing.shipping.first_name,
          shipping_last_name: itemEditing.shipping.last_name,
          shipping_address_1: itemEditing.shipping.address_1,
          shipping_city: itemEditing.shipping.city,
          shipping_state: itemEditing.shipping.state,
          shipping_postcode: itemEditing.shipping.postcode,
          shipping_country: itemEditing.shipping.country
        });
      }
    }
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;  //target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }


  onClickSubmit = async (e) => {
    e.preventDefault();
    let { history, match } = this.props;
    let { id, first_name, last_name, address_1, city,
      state, postcode, country, email, phone,
      shipping_first_name, shipping_last_name, shipping_address_1, shipping_city,
      shipping_state, shipping_postcode, shipping_country
    } = this.state;

    let cart = {
      id: id,
      billing: {
        first_name: first_name,
        last_name: last_name,
        address_1: address_1,
        city: city,
        state: state,
        postcode: postcode,
        country: country,
        email: email,
        phone: phone
      },
      shipping: {
        first_name: shipping_first_name,
        last_name: shipping_last_name,
        address_1: shipping_address_1,
        city: shipping_city,
        state: shipping_state,
        postcode: shipping_postcode,
        country: shipping_country

      }
    }
    if (match.params.id) {
      await this.props.actions.actUpdateCartRequest(cart);
    } else {
      await this.props.actions.actAddCartRequest(cart);
    }
    history.goBack();
  }

  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    let { first_name, last_name, address_1, city,
      state, postcode, country, email, phone,
      shipping_first_name, shipping_last_name, shipping_address_1, shipping_city,
      shipping_state, shipping_postcode, shipping_country
    } = this.state;

    return (
      <div className="row">
        <div className="col-12">
          <h2>Form Order</h2>
        </div>
        <div className="col-12">
          <form onSubmit={this.onClickSubmit} style={{ border: '1px solid #aaa', padding: '20px', marginBottom: '20px' }}>
            <h2>Billing</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name='first_name'
                value={first_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name='last_name'
                value={last_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name='address_1'
                value={address_1}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                name='city'
                value={city}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                name='state'
                value={state}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Postcode</label>
              <input
                type="text"
                className="form-control"
                name='postcode'
                value={postcode}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                name='country'
                value={country}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name='email'
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name='phone'
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <h2>Shipping</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name='shipping_first_name'
                value={shipping_first_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name='shipping_last_name'
                value={shipping_last_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name='shipping_address_1'
                value={shipping_address_1}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                name='shipping_city'
                value={shipping_city}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                name='shipping_state'
                value={shipping_state}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Postcode</label>
              <input
                type="text"
                className="form-control"
                name='shipping_postcode'
                value={shipping_postcode}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                name='shipping_country'
                value={shipping_country}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>
              Submit
            </button>
            <button type="button" className="btn btn-light" onClick={this.onClickBack}>Back</button>
          </form>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actAddCartRequest,
      actGetCartRequest,
      actUpdateCartRequest,
      actGoOrderItem
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);