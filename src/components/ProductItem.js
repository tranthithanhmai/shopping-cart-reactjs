import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const item = [
	{ 
		to: '/product-detail', 
		name: 'Woo Ninja', 
		price: 18 
	}
];

const ItemLink = ({ menu }) => {
	return (
		<Route
			path={menu.to}
			exact={menu.exact}
			children=
			{

				<div className="card-body">
					<h4>
						<Link to={menu.to} className="card-title">
							{menu.name}
						</Link>
					</h4>
					<p className="card-text">{menu.price} $</p>
					<Link to={menu.to} className="btn btn-primary stretched-link">
						ADD TO CART
					</Link>
				</div>
			}
		/>
	)
}

class ProductItem extends Component {
	render() {
		return (
			<div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
				<div className="card box-product">
					<img className="card-img-top" src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" alt="Card image" style={{ width: '100%' }} />
					{this.showItem(item)}
				</div>
			</div>
		);
	}

	showItem(item) {
		let xhtml = null;

		if (item.length > 0) {
			xhtml = item.map((menu, index) => {
				return (
					<ItemLink menu={menu} key={index} />
				);
			});
		}

		return xhtml;
	}
}

export default ProductItem;
