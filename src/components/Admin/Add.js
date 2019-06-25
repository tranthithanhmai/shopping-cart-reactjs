import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Add extends Component {
  render() {
    return (
      <div className="row header-form">
        <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2>List Products Management</h2>
          <div className="action-control" style={{ display: 'flex' }} >
            <Link
              to="/shopping-cart-reactjs/admin/add"
              type="button"
              className="btn btn-info">
              <i className='fa fa-plus' aria-hidden="true" style={{ paddingTop: '8px' }}></i> &nbsp;Add Product
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;