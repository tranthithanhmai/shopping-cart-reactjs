import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const breadcrumbs = [
	{ to: '/shopping-cart-reactjs/', name: 'Home' },
	// {to: '/shopping-cart-reactjs/product', name: 'Product'},
	// {to: '/shopping-cart-reactjs/login', name: 'login'}
];

const BreadcrumbLink = ({ menu }) => {
	return (
		<Route
			path={menu.to}
			exact={menu.exact}
			children=
			{
				({ match }) => {
					if (match !== null && match.isExact === true) {
						return <li className="active">{menu.name}</li>;
					} else {
						return <li><Link to={menu.to} >{menu.name}</Link></li>;
					}
				}
			}
		/>
	)
}

class Breadcrumb extends Component {
	render() {
		return (
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					{this.showBreadcrumb(breadcrumbs)}
				</ol>
			</nav>
		);
	}

	showBreadcrumb(breadcrumbs) {
		let xhtml = null;

		if (breadcrumbs.length > 0) {
			xhtml = breadcrumbs.map((menu, index) => {
				return (
					<BreadcrumbLink menu={menu} key={index} />
				);
			});
		}

		return xhtml;
	}
}

export default Breadcrumb;
