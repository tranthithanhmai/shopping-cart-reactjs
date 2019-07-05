import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Item extends Component {
  onDelete = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    let { item } = this.props;
    let price = (item.price !== '') ? item.price : 0;
    let srcImg = (item.images && item.images.length) > 0 ? item.images[0].src : "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";

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
            to={`/shopping-cart-reactjs/admin/edit/${item.id}`}
            className="btn btn-sm btn-primary"
            style={{ marginRight: '5px' }}
            id={item.id}
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp; Update
          </Link>

          <button
            type="button"
            className="btn btn-sm btn-danger"
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

Item.propTypes = {
  item: PropTypes.object
}

export default Item;
