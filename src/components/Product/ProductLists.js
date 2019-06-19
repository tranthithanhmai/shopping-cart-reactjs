import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductItem from './ProductItem';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';
import { actFetchProductsRequest } from './../../actions/index';
import PaginationPage from '../Pagination/PaginationPage';

class ProductLists extends Component {

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

  componentDidMount() {
    this.props.actions.actFetchProductsRequest();
  }

  render() {
    var {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    var rowsPerPage = [];
    var { strSearch, sort, products } = this.props;
    var { orderBy, orderDir } = sort;
    var itemsOrigin = (products !== null) ? [...products] : [];
    //Search
    products = filter(itemsOrigin, (product) => {
      return includes(product.name.toLowerCase(), strSearch.toLowerCase());
    });
    //Sort
    products = funcOrderBy(products, [orderBy], [orderDir]);
    //Pagination
    rowsPerPage = products.slice(startIndex, endIndex + 1);

    return (
      <div className="row">
        <div className="col-12" style={{ marginBottom: '20px' }}>
        </div>
        {this.showProducts(rowsPerPage)}
        <div className="col-12" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>
            {products.length} Sản phẩm | Trang {currentPage}/{totalPages}
          </p>
        </div>
        <div className="col-12" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <PaginationPage
            totalRecords={products.length}
            pageLimit={pageLimit || 8}
            initialPage={1}
            pagesToShow={8}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>

    );
  }

  showProducts = (products) => {
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

const mapStateToProps = state => {
  return {
    strSearch: state.strSearch,
    sort: state.sort,
    products: state.product
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actFetchProductsRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductLists);