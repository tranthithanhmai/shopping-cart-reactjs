import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const breadcrumbs = [
	{to: '/shopping-cart-reactjs/'		, exact: true, name: 'Home'},
    {to: '/shopping-cart-reactjs/product'	, exact: true, name: 'Product'},
    // {to: '/product-detail'	, exact: true, name: 'Woo Ninja '},
	// {to: '/login', exact: true, name: 'Login'}
];

const BreadcrumbLink = ({ menu }) => {
	return (
		<Route 
			path={menu.to} 
			exact={menu.exact} 
			children=
				{ 
					({ match }) => {
						let active = (match !== null) ? "active" : "";
						return (
							<li className={`breadcrumb-item ${active}`} >
								<Link to={menu.to}>
									{menu.name}
								</Link>
							</li>
						)
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
	
	showBreadcrumb(breadcrumbs){
    	let xhtml = null;
		
		if(breadcrumbs.length > 0 ){
			xhtml = breadcrumbs.map((menu, index)=> {
				return (
					<BreadcrumbLink menu={menu} key={index} />
				);
			});
		}
	
    	return xhtml;
    }
}

export default Breadcrumb;
