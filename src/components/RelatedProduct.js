import React, { Component } from 'react';

class RelatedProduct extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{ margin: '30px -15px' }}>
                    <div className="col-12">
                        <p style={{ height: '2px', width: '50px', background: '#000' }}></p>
                        <h2>Related products</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
                        <div className="card">
                            <img className="card-img-top" src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Woo Logo</h4>
                                <p className="card-text">15.00 $</p>
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
                        <div className="card">
                            <img className="card-img-top" src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Woo Logo</h4>
                                <p className="card-text">15.00 $</p>
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
                        <div className="card">
                            <img className="card-img-top" src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Woo Logo</h4>
                                <p className="card-text">15.00 $</p>
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" style={{ marginBottom: '20px' }}>
                        <div className="card">
                            <img className="card-img-top" src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Woo Logo</h4>
                                <p className="card-text">15.00 $</p>
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default RelatedProduct;

