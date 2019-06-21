import React, { Component } from 'react';
import * as callApi from '../../services/apiCaller';
import ProductItem from './../../components/Product/ProductItem';
import PaginationPage from './../Pagination/PaginationPage';

class ListProductCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      categories: {},
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

  componentDidMount() {
    var {
      products,
      categories
    } = this.state;

    var { match } = this.props;
    var id = match.params.id;
    callApi.call(`wordpress-demo/wp-json/wc/v3/products/categories/${id}`, 'GET', null).then(res => {
      categories = res.data;
      this.setState({
        categories
      });
    });
    var idCat = parseInt(id);
    callApi.call(`wordpress-demo/wp-json/wc/v3/products`, 'GET', null).then(res => {
      var listData = res.data;
      for (var j = 0; j < 10; j++) {
        listData.filter((data) => {
          if (data && j < data.categories.length) {
            var id = data.categories[j].id;
            if (id === idCat) {
              products.push(data);
            }
          }
        });
      }
      this.setState({
        products
      });
    });
  }

  handleBack = () => {
    var { history } = this.props;
    history.goBack();
  }

  render() {
    var {
      products,
      categories,
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex,
    } = this.state;

    var rowsPerPage = [];
    //Pagination
    rowsPerPage = products.slice(startIndex, endIndex + 1);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ marginBottom: '20px', display: 'flex' }}>
            <button
              className="btn btn-light"
              onClick={this.handleBack}
              style={{ marginRight: '10px' }}
            >
              <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
              &nbsp;Back
                        </button>
            <h2>Category : {categories.name}</h2>
          </div>
        </div>
        <div className="row">
          {this.showProducts(rowsPerPage)}
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
          <ProductItem key={index} product={product} />
        );
      });
    }
    return xhtml;
  }
}

export default ListProductCategory;
