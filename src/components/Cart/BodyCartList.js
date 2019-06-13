import React, { Component } from 'react';


class BodyCartList extends Component {

  render() {
    var { carts } = this.props;
    return (
      <tbody>
        {this.showItem(carts)}
      </tbody>
    );
  }

  showItem(carts) {
    let xhtml = null;
    if (carts !== null && carts.length > 0) {
      xhtml = carts.map((cart, index) => {
        return (
          <tr key={index}>
            <td>{cart.name}</td>
            <td>{cart.price}</td>
            <td>{cart.quantity}</td>
            <td>{cart.subtotal}</td>
            <td>
              {/* <button type="button"className="btn btn-danger"
                      onClick={() => this.onDeleteItem(cart.id)}>
                 Delete
              </button> */}
            </td>
          </tr>
        );
      });
    }
    return xhtml;
  }
}


export default BodyCartList;