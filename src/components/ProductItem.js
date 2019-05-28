import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    var {product} = this.props;
    // console.log(product);
    var scrImg = product.images.length > 0 ? product.images[0].src :  "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
        <div className="card box-product">
        <Link to={`/shopping-cart-reactjs/product/${product.id}`} id={product.id}>
        <img className="card-img-top" src={scrImg} alt="Card image" style={{ width: '100%' }} />
        </Link>
          
          <div className="card-body">
            <h4>
              <Link to={`/shopping-cart-reactjs/product/${product.id}`} className="card-title">
                {product.name}
              </Link>
            </h4>
            <p className="card-text">{product.price} $</p>
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