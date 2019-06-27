import React, { Component } from 'react';
import * as callApi from '../../services/apiCaller';
import {
  actViewCategoryRequest,
  actGoCategoryItem
} from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  compareData = (categories, data) => {
    let { products } = this.state;
    let { match } = this.props;
    const id = match.params.id;
    let idCat = parseInt(id);
    categories.map(cat => {
      if (cat.id === idCat) {
        products.push(data);
      }
      return products;
    });
  }

  listData = (listData) => {
    if (listData !== null && listData.length > 0) {
      listData.map((data) => {
        if (data && data.categories.length > 0) {
          let categories =  data.categories;
          this.compareData(categories, data);
        }
        return data;
      });
    }
  }

  componentDidMount() {
    let { products } = this.state;
    let { match } = this.props;
    const id = match.params.id;
    this.props.actions.actViewCategoryRequest(id);
   
    callApi.call(`wordpress-demo/wp-json/wc/v3/products`, 'GET', null).then(res => {
      let listData = res.data;
      this.listData(listData);
      this.setState({
        products
      });
    }); 
  }
  componentDidUpdate () {
    let { categories } = this.props;
    this.props.actions.actGoCategoryItem(categories.name, `/shopping-cart-reactjs/product/${categories.id}`);
  }
  handleBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    let {
      products,
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex,
    } = this.state;
    let { categories } = this.props;

    let rowsPerPage = [];
    //Pagination
    rowsPerPage = products.slice(startIndex, endIndex + 1);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ marginBottom: '20px', display: 'flex' }}>
            {/* <button
              className="btn btn-light"
              onClick={this.handleBack}
              style={{ marginRight: '10px' }}
            >
              <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
              &nbsp;Back
                        </button> */}
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
const mapStateToProps = state => {
  return {
    categories: state.itemEditing,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actViewCategoryRequest,
      actGoCategoryItem
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProductCategory);