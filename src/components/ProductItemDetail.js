import React, { Component } from 'react';
import * as callApi from './../services/apiCaller';
class ProductItemDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: []
        };
    }

    componentWillMount() {
        callApi.call('wordpress-demo/wp-json/wc/v3/products?include=64', 'GET', null).then(res => {
            console.log('RES : ', res);
            this.setState({
                product: res.data[0]
            });
        })
    }
    render() {
        var { product } = this.state;
        console.log('ressult : ', product);

        //var scrImg = product.images.length > 0 ? product.images[0].src :  "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";
        return (
            <div className="product-detail-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <img className="card-img-top" src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" alt="Card image" style={{ width: '100%' }} />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>{product.name}</h1>
                            <h3 className="card-text">
                                {product.price}.00 $
                            </h3>
                            <p>{product.description}</p>
                            <div style={{ display: 'flex' }}>

                                <input type="number" style={{ marginRight: '10px', padding: '10px' }} />
                                <button type="button" className="btn btn-primary">Add to cart</button>

                            </div>
                            <p>
                                SKU:{product.sku}
                            </p>
                            {/* <p>
                                Category:  ({product.categories.length} > 0) ? category = {product.categories[0].name} : ''
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItemDetail;