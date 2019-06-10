import React, { Component } from 'react';
import Item from './Item';
import Add from './Add';

class Lists extends Component {
    render() {
        var { products } = this.props;
        return (
            <div className="container">
                <Add />
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
                    <Item key={index}
                        item={product}
                        onDelete={this.props.onDelete}
                        index={index}
                    />
                );
            });
        }
        return xhtml;
    }
}

export default Lists;