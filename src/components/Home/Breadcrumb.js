import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MenuLink = ({ menu }) => {
	return (
		<Route
			path={menu.to}
			exact={menu.exact}
			children=
			{
				({ match }) => {
					if (match === null || (match !== null && match.isExact === true)) {
						return <li style={{ marginRight: '10px' }} className="active" >{menu.name}</li>;
					} else {
						return <li style={{ marginRight: '10px' }}><Link to={menu.to} >{menu.name}</Link></li>;
					}
				}
			}
		/>
	)
}

class Breadcrumb extends Component {
	render() {
		let menus = this.props.breadcrumb;
		let xhtml = null;
		if (menus.length > 0) {
			xhtml = menus.map((menu, index) => {
				if (menu !== undefined) {
					return (
						<MenuLink menu={menu} key={index} />
					);
				}
				return null;
			});
		}
		return <ol className="breadcrumb">{xhtml}</ol>;
	}
}

const mapStateToProps = state => {
	return {
		breadcrumb: state.breadcrumb
	}
}

Breadcrumb.propTypes = {
	breadcrumb: PropTypes.array
}

export default connect(mapStateToProps, null)(Breadcrumb);
