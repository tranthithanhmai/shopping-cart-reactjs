import React, { Component } from 'react';
import { actLogout, actGoLogout } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class FormLogout extends Component {
  componentDidMount() {
    this.props.actions.actGoLogout('Logout', '/shopping-cart-reactjs/logout');
  }
  handleLogout =  (event) => {
    event.preventDefault();
    this.props.actions.actLogout();
  }
  
  render() {
    let { user } = this.props;
    if (!user.token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <div className="container">
          <hr className="divider" />
          <h2 className="text-center text-lg text-uppercase my-0">Logout <strong>Form</strong></h2>
          <hr className="divider" />
          <form onSubmit={this.handleLogout}>
            <div className="row">
              <div className="form-group col-lg-6">
                <label className="text-heading">Username : {user.user_display_name}</label>
              </div>
              <div className="clearfix" />
              <div className="form-group col-lg-12">
                <button type="submit" className="btn btn-primary" ><i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Logout</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actLogout,
      actGoLogout
    }, dispatch)
  }
}

const mapStatetoProps = state => {
  return {
    user: state.user
  }
}

FormLogout.propTypes = {
  user        : PropTypes.object,
  actLogout   : PropTypes.func,
  actGoLogout : PropTypes.func
}

export default connect(mapStatetoProps, mapDispatchToProps)(FormLogout);