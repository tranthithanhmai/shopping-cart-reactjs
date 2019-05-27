import React, { Component } from 'react';
import {Route, NavLink, Link} from 'react-router-dom';

const menus = [
	{to: '/'		, exact: true, name: 'Home'},
	{to: '/product'	, exact: true, name: 'Product'},
	{to: '/product-detail'	, exact: true, name: 'Product Detail'},
	{to: '/login', exact: true, name: 'Login'}
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
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-lg-4">
			    <div className="container">
			    	<NavLink to='/' className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none">
						Shopping Cart
					</NavLink>
			        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
			        <span className="navbar-toggler-icon" />
			        </button>
			        <div className="collapse navbar-collapse" id="navbarResponsive">
			            <ul className="navbar-nav mx-auto">
			            	{this.showMenus(menus)}
			            </ul>
			        </div>
			    </div>
			</nav>
		);
	}
	
	showMenus(menus){
    	let xhtml = null;
		
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}
	
    	return xhtml;
    }
}

export default NavBar;
