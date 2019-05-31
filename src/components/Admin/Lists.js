import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { actOpenForm } from './../../actions/index';
import * as callApi from '../../services/apiCaller';
import Add from './Add';
import Form from './Form';

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        callApi.call('wordpress-demo/wp-json/wc/v3/products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            });
        })
    }

    render() {
        var { products } = this.state;
        return (
            <div className="container">
                <Add />
                <Form />
                <div className="row">
                    <div className="col-12">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>Danh sách sản phẩm</h2>
                            <h4>Total : <b>{products.length}</b> product(s)</h4>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showProducts(products)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    showProducts(products) {
        let xhtml = null;
        if (products !== null && products.length > 0) {
            xhtml = products.map((product, index) => {
                return (
                    <Item key={index} item={product} />
                );
            });
        }
        return xhtml;
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        sort: state.sort,
        strSearch: state.strSearch
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleEdit: () => {
            dispatch(actOpenForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);