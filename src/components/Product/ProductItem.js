import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    var { product } = this.props;
    var scrImg = product.images.length > 0 ? product.images[0].src : "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";
    var price = product.price === '' ? 0 : product.price;
    var regularPrice = (product.sale_price !== "") ? <span style={{ textDecoration: 'line-through', color: '#aaa' }}>{product.regular_price}$ </span> : '';
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
        <div className="card box-product">
          <Route to={`/shopping-cart-reactjs/product/${product.id}`}>
            <img className="card-img-top" src={scrImg} alt="Card Product" style={{ width: '100%', height: '200px' }} />
          </Route>
          <div className="card-body" style={{ textAlign: 'center' }}>
            <h4>
              <Link to={`/shopping-cart-reactjs/product/${product.id}`} className="card-title">
                {product.name}
              </Link>
            </h4>
            <p className="card-text">{regularPrice} {price}$</p>
            <Link to={`/shopping-cart-reactjs/shopping-cart`} type="button" className="btn btn-primary">Add to cart</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;