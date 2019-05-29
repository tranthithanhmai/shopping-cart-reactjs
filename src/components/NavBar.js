import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

const menus = [
	{ to: '/shopping-cart-reactjs/', exact: true, name: 'Home' },
	{ to: '/shopping-cart-reactjs/product', exact: true, name: 'Product' },
	{ to: '/shopping-cart-reactjs/login', exact: true, name: 'Login' }
];

const MenuLink = ({ menu }) => {
	return (
		<Route
			path={menu.to}
			exact={menu.exact}
			children=
			{
				({ match }) => {
					let active = (match !== null) ? "active" : "";
					return (
						<li className={`nav-item px-lg-4 ${active}`} >
							<Link to={menu.to} className="nav-link text-uppercase text-expanded">
								{menu.name}
							</Link>
						</li>
					)
				}
			}
		/>
	)
}

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark py-lg-4">
				<NavLink to='/shopping-cart-reactjs/' className="navbar-brand text-uppercase text-expanded font-weight-bold">
					Shopping Cart
					</NavLink>
				<ul className="navbar-nav">
					{this.showMenus(menus)}
				</ul>
			</nav>
		);
	}

	showMenus(menus) {
		let xhtml = null;

		if (menus.length > 0) {
			xhtml = menus.map((menu, index) => {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}

		return xhtml;
	}
}

export default NavBar;
