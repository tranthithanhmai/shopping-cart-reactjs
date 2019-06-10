import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { item } = this.props;
        var price = (item.price !== '') ? item.price : 0;
        var srcImg = (item.images.length) > 0 ? item.images[0].src : "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";
       
        return (
            <tr>
                <th scope="row">
                    <img src={srcImg} alt={item.name} className="img-fluid z-depth-0" style={{ width: '100px' }} />
                </th>
                <td>
                    <h5>
                        <strong>{item.name}</strong>
                    </h5>
                </td>
                <td>{price}$</td>
                <td>
                    <Link
                        to={`/shopping-cart-reactjs/admin/${item.id}/edit`}
                        className="btn btn-xs btn-primary"
                        style={{ marginRight: '5px' }}
                        id = {item.id}
                    >
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp; Update
                    </Link>

                    <button
                        type="button"
                        className="btn btn-xs btn-danger"
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.id)}
                    >
                        <i className="fa fa-trash-o" aria-hidden="true"></i> &nbsp; Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Item;
