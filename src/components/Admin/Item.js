import React, { Component } from 'react';

class Item extends Component {
    render() {
        var { item } = this.props;
        var price = (item.price !== '') ? item.price : 0;
        var srcImg = (item.images.length) > 0 ? item.images[0].src : "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";
        return (
            <tr>
                <th scope="row">
                    <img src={srcImg}
                        alt={item.name} className="img-fluid z-depth-0" style={{ width: '100px' }} />
                </th>
                <td>
                    <h5>
                        <strong>{item.name}</strong>
                    </h5>
                </td>
                <td>{price}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-xs btn-primary"
                        style={{ marginRight: '5px' }}
                    >
                       <i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp; Update
                    </button>

                    <button
                        type="button"
                        className="btn btn-xs btn-danger"
                        data-original-title="Remove item"
                    >
                       <i className="fa fa-trash-o" aria-hidden="true"></i> &nbsp; Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Item;
