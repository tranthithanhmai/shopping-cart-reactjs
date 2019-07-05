import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Item from './Item';
import Add from './Add';
import ListCategories from './ListCategories';
import PaginationPage from './../Pagination/PaginationPage';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      totalPages: "",
      pageLimit: "",
      currentPage: "",
      startIndex: "",
      endIndex: ""
    };
  }

  onChangePage = data => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };

  render() {
    let {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    let rowsPerPage = [];
    let { products } = this.props;
    //Pagination
    rowsPerPage = products.slice(startIndex, endIndex + 1);
    return (
      <div className="container">
        <Add />
        <div className="row">
          <div className="col-12">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Products</th>
                  <th>Prices</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.showProducts(rowsPerPage)}
              </tbody>
            </table>
          </div>
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>
              {products.length} Sản phẩm | Trang {currentPage}/{totalPages}
            </p>
          </div>
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <PaginationPage
              totalRecords={products.length}
              pageLimit={pageLimit || 5}
              initialPage={1}
              pagesToShow={5}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2>List Categories Management </h2>
            <div className="action-control" style={{ display: 'flex' }} >
              <Link
                to="/shopping-cart-reactjs/admin/add-category"
                type="button"
                style={{ marginRight: '10px' }}
                className="btn btn-info">
                <i className='fa fa-plus' aria-hidden="true" style={{ paddingTop: '8px' }}></i> &nbsp;Add Category
              </Link>
            </div>
          </div>
          <ListCategories />
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

Lists.propTypes = {
  product     : PropTypes.array,
  totalPages  : PropTypes.number,
  currentPage : PropTypes.number,
  pageLimit   : PropTypes.number,
  startIndex  : PropTypes.number,
  endIndex    : PropTypes.number
}

export default Lists;