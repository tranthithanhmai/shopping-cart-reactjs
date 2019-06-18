import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

const menus = [
	{ to: '/shopping-cart-reactjs/', exact: true, name: 'Home' },
	{ to: '/shopping-cart-reactjs/product', name: 'Product' },
	{ to: '/shopping-cart-reactjs/products/categories', name: 'Category' },
	{ to: '/shopping-cart-reactjs/admin', name: 'Admin' },
	{ to: '/shopping-cart-reactjs/shopping-cart', name: 'Orders' },
	{ to: '/shopping-cart-reactjs/login', name: 'Login' }
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
					var name = menu.name;
					if (name === 'Login') {
						name = <i className="fa fa-sign-in" aria-hidden="true"></i>;
					} else {
						name = menu.name;
					}
					return (
						<li className={`nav-item px-lg-4 ${active}`} >
							<Link to={menu.to} className="nav-link text-uppercase text-expanded">
								{name}
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
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark py-lg-4" style={{ display: 'flex',justifyContent: 'space-between'}}>
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
