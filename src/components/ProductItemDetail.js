import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as callApi from './../services/apiCaller';
import TabProductItemDetail from './TabProductItemDetail';
import RelatedProduct from './RelatedProduct';

class ProductItemDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: []
        };
    }

    componentWillMount() {
        var {match} = this.props;
        var id = match.params.id;
        console.log('matchadasdas : ', match);
        callApi.call(`wordpress-demo/wp-json/wc/v3/products?include=${id}`, 'GET', null).then(res => {
            console.log('RES : ', res.data[0]);
            this.setState({
                product: res.data[0]
            });
        })
    }
    render() {
        var {product} = this.state;
        console.log('product : ', product);
        var scrImg = [];
        var category = [];
        scrImg = product.length === 0 ?  "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" : product.images[0].src ;
        category = (product.length === 0) ? '' : product.categories[0].name ;
        return (
            <div className="product-detail-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <img className="card-img-top" src={scrImg} alt="Card image" style={{ width: '100%' }} />
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
                            <p>
                                Category:  <a>{category}</a>
                            </p> 
                        </div>
                    </div>
                </div>
                <TabProductItemDetail product={product} />
                <RelatedProduct />
            </div>
        );
    }
}

export default ProductItemDetail;