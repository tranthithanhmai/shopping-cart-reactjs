import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as callApi from './../../services/apiCaller';
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
        var { match } = this.props;
        var id = match.params.id;
        callApi.call(`wordpress-demo/wp-json/wc/v3/products/${id}`, 'GET', null).then(res => {
            this.setState({
                product: res.data
            });
        })
    }

    render() {
        var { product } = this.state;
        var images = product.images;
        var category = (product.length === 0) ? '' : product.categories[0].name;
        var regularPrice = (product.sale_price !== "") ? <span style={{ textDecoration: 'line-through', color: '#aaa' }}>{product.regular_price}.00$ </span> : '';
        return (
            <div className="product-detail-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="carousel slideimages" data-ride="carousel">
                                <div className="carousel-inner">
                                    {this.showImages(images)}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>{product.name}</h1>
                            <h3 className="card-text">
                                {regularPrice}  {product.price === '' ? 0 : product.price}.00 $
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
                                Category:  <Link to="/shopping-cart-reactjs/products/categories">{category}</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <TabProductItemDetail product={product} />
                <RelatedProduct product={product.related_ids} />
            </div>
        );

    }

    showImages(images) {
        let xhtml = null;
        if (images !== undefined) {
            if (images.length > 0) {
                xhtml = images.map((image, index) => {
                    return (
                        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                            <img src={image.src} alt={image.name} style={{ width: '100%' }} />
                        </div>
                    );
                });
            } else {

                images = [
                    {
                        alt: "",
                        date_created: "2019-05-16T03:22:32",
                        date_created_gmt: "2019-05-16T03:22:32",
                        date_modified: "2019-05-16T03:22:32",
                        date_modified_gmt: "2019-05-16T03:22:32",
                        id: 62,
                        name: "hoodie_3_front.jpg",
                        src: "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg"
                    },
                    {
                        alt: "",
                        date_created: "2019-05-16T03:22:33",
                        date_created_gmt: "2019-05-16T03:22:33",
                        date_modified: "2019-05-16T03:22:33",
                        date_modified_gmt: "2019-05-16T03:22:33",
                        id: 63,
                        name: "hoodie_3_back.jpg",
                        src: "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/Poster_4_flat.jpg"
                    }
                ];
                xhtml = images.map((image, index) => {
                    return (
                        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                            <img src={image.src} alt={image.name} style={{ width: '100%' }} />
                        </div>
                    );
                });
            }

        }
        return xhtml;
    };
}

export default ProductItemDetail;