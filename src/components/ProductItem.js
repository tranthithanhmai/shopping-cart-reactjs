import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    var {product, match} = this.props;
    var scrImg = product.images.length > 0 ? product.images[0].src :  "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";
    var price = product.price === '' ? 0 : product.price;
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
        <div className="card box-product">
        <Route to={`/shopping-cart-reactjs/product/${product.id}`} match={match} product={product} >
          <img className="card-img-top" src={scrImg} alt="Card image" style={{ width: '100%' }} />
        </Route>
          <div className="card-body">
            <h4>
              <Link to={`/shopping-cart-reactjs/product/${product.id}`} className="card-title">
                {product.name}
              </Link>
            </h4>
            <p className="card-text">{price}.00 $</p>
            <button className="btn btn-primary" style={{ width: '100%' }}>
              ADD TO CART
				  	</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;