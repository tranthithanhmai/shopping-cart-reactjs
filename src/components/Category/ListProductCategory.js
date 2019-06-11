import React, { Component } from 'react';
import * as callApi from '../../services/apiCaller';
import ProductItem from './../../components/Product/ProductItem';

class ListProductCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        var { products } = this.state;
        var { match } = this.props;
        var idCat = parseInt(match.params.id);
        callApi.call(`wordpress-demo/wp-json/wc/v3/products`, 'GET', null).then(res => {
            var listData = res.data;
            for (var j = 0; j < 10; j++) {
                listData.filter((data) => {
                    if (data && j < data.categories.length) {
                        var id = data.categories[j].id;
                        if (id === idCat) {
                            products.push(data);
                        }
                    }
                });
            }

            this.setState({
                products
            });
        });
    }

    handleBack = () => {
        var { history } = this.props;
        history.goBack();
    }

    render() {
        var { products } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{ marginBottom: '20px', display: 'flex' }}>
                        <button className="btn btn-light" onClick={this.handleBack}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> &nbsp;Back</button>
                        <h4 style={{ marginLeft: '10px' }}>Total: <b>{products.length}</b> item(s)</h4>
                    </div>
                    {this.showProducts(products)}
                </div>
            </div>
        );
    }
    showProducts(products) {
        let xhtml = null;
        if (products !== null && products.length > 0) {
            xhtml = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} />
                );
            });
        }
        return xhtml;
    }
}

export default ListProductCategory;
