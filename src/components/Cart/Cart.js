import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <div className="row header-form">
                    <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h2><b>Giỏ hàng </b></h2>
                        <div className="action-control">
                            <button className="btn btn-primary">
                                <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp; Thêm sản phẩm
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Danh sách sản phẩm</h2>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <img src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_4_front.jpg" alt="image" style={{ width: '100px' }} />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        Ship Your Idea
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        25$
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <input className="form-control" type="number" />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <button className="btn btn-danger btn-xs">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <img src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_2_front.jpg" alt="image" style={{ width: '100px' }} />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        Premium Quality
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        25$
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <input className="form-control" type="number" />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <button className="btn btn-danger btn-xs">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <img src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_4_front.jpg" alt="image" style={{ width: '100px' }} />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        Ninja Silhouette
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        25$
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <input className="form-control" type="number" />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <button className="btn btn-danger btn-xs">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <img src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_1_front.jpg" alt="image" style={{ width: '100px' }} />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        Woo Logo
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        25$
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <input className="form-control" type="number" />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <button className="btn btn-danger btn-xs">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <img src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_2_front.jpg" alt="image" style={{ width: '100px' }} />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        Woo Ninja
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        25$
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <input className="form-control" type="number" />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <button className="btn btn-danger btn-xs">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <img src="http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_3_front.jpg" alt="image" style={{ width: '100px' }} />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        Woo Logo
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        25$
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <input className="form-control" type="number" />
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <button className="btn btn-danger btn-xs">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody> */}
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <b>Tổng: 150$</b>
                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <button className="btn btn-success">Thanh toán</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;