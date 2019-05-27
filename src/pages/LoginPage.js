import React, { Component } from 'react';
import {connect} from 'react-redux';

import Login from './../components/Login';
import UserControl from './../components/UserControl';

class LoginPage extends Component {
	render() {
		let {user} = this.props;
		return (
  			<div>
			    {this.showArea(user)}
			</div>
		);
	}

	showArea(user){
		if(user.isLogin === false) {
			return <Login />;
		}else if (user.isLogin === true){
            return <UserControl username={user.username} />;
        }
	}
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(LoginPage);