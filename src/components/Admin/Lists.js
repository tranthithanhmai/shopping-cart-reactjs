import React, { Component } from 'react';
import Item from './Item';
import Add from './Add';
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
    var {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    var rowsPerPage = [];
    var { products } = this.props;
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
                  <th>Hình ảnh</th>
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
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