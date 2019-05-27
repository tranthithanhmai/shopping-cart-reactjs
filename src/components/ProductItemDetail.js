import React, { Component } from 'react';

class ProductItemDetail extends Component {
    render() {
        return (
            <div className="product-detail-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <img className="card-img-top" src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" alt="Card image" style={{ width: '100%' }} />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>Flying Ninja</h1>
                            <h3 className="card-text"><span style={{ textDecoration: 'line-through', color: '#aaa' }}>15.00 $</span> 12.00 $</h3>
                            <p>
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                            <div style={{ display: 'flex' }}>
                                <input type="number" style={{ marginRight: '10px', padding: '10px' }} />
                                <button type="button" className="btn btn-primary">Add to cart</button>
                            </div>
                            <p>
                                SKU: POSTER-FLYING-NINJA
                        </p>
                            <p>
                                Category:  <a href="/">Posters</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu1"> Reviews (0)</a>
                        </li>
                    </ul>
                    {/* <div className="tab-content">
                        <div id="home" className="container tab-pane active"><br />
                            <h3>Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div id="menu1" className="container tab-pane fade"><br />
                            <h3> Reviews (0)</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default ProductItemDetail;