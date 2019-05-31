import React, { Component } from 'react';
import { actLogin } from './../../actions/index';
import { connect } from 'react-redux';
import * as callApi from './../../services/apiCaller';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			isLogin: false
		};
	}

	handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit = (event) => {
		var { isLogin, username, password } = this.state;
		var data = {
			username,
			password,
			isLogin
		}
		callApi.NoAuth('wordpress-demo/wp-json/jwt-auth/v1/token', 'POST', data).then(res => {
			if (res !== undefined && res && res.data) {
				localStorage.setItem('token', res.data.token);
				isLogin = true;
				this.setState({
					isLogin: true
				});
			} else {
				alert('Username or password not correct!');
			}
		});
		event.preventDefault();
	}

	render() {
		var { isLogin, username, password } = this.state;
		if (isLogin) {
			return <Redirect to="/shopping-cart-reactjs/product" />
		} else {
			return (
				<div className="container">
					<hr className="divider" />
					<h2 className="text-center text-lg text-uppercase my-0">Login <strong>Form</strong></h2>
					<hr className="divider" />
					<form onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="form-group col-lg-6">
								<label className="text-heading">Username</label>
								<input name="username" value={username} onChange={this.handleChange} type="text" className="form-control" required />
							</div>
							<div className="form-group col-lg-6">
								<label className="text-heading">Password</label>
								<input name="password" value={password} onChange={this.handleChange} type="password" className="form-control" required />
							</div>

							<div className="clearfix" />

							<div className="form-group col-lg-12">
								<button type="submit" className="btn btn-primary"><i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Login</button>
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
		formLogin: (username, password) => {
			dispatch(actLogin(username, password));
		}
	}
}

export default connect(null, mapDispatchToProps)(Login);