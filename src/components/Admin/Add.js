import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Add extends Component {
    render() {
        return (
            <div className="row header-form">
                <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h2><b>Quản lí sản phẩm</b></h2>
                    <div className="action-control">
                        <Link
                            to="/shopping-cart-reactjs/admin/add"
                            type="button"
                            className="btn btn-info btn-block">
                            <i className='fa fa-plus' aria-hidden="true"></i> &nbsp;Thêm sản phẩm
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;