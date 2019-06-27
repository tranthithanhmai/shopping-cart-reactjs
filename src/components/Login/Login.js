import React, { Component } from 'react';
import { actLoginRequest, actGoLogin } from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	componentDidMount() {
		this.props.actions.actGoLogin('Login', '/shopping-cart-reactjs/login');
	}

	handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		let { username, password } = this.state;
		let { history } = this.props;
		let data = {
			username,
			password
		}
		await this.props.actions.actLoginRequest(data);
		history.goBack();
	}

	render() {
		let { username, password } = this.state;
		const { token } = this.props;
		if (token) {
			return <Redirect to="/shopping-cart-reactjs/logout" />
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
		actions: bindActionCreators({
			actLoginRequest,
			actGoLogin
    }, dispatch)
	}
}

const mapStatetoProps = (state) => ({
		token : state.user.token
})

export default connect(mapStatetoProps, mapDispatchToProps)(Login);