import React, { Component, Fragment } from 'react';
import PaginationPage from '../Pagination/PaginationPage';
import { connect } from 'react-redux';
import {
  actFetchCategoriesRequest
} from './../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class ListCategories extends Component {
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

  componentDidMount() {
    this.props.actions.actFetchCategoriesRequest();
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
    let { categories } = this.props;
    let rowsPerPage = [];
    //Pagination
    rowsPerPage = categories.slice(startIndex, endIndex + 1);
    return (
      <Fragment>
        <div className="col-12">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Slug</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.showCategories(rowsPerPage)}
            </tbody>
          </table>
        </div>
        <div className="col-12" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>
            {categories.length} Sản phẩm | Trang {currentPage}/{totalPages}
          </p>
        </div>
        <div className="col-12" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <PaginationPage
            totalRecords={categories.length}
            pageLimit={pageLimit || 5}
            initialPage={1}
            pagesToShow={5}
            onChangePage={this.onChangePage}
          />
        </div>
      </Fragment>
    );
  }

  showCategories(categories) {
    let xhtml = null;
    if (categories !== null && categories.length > 0) {
      xhtml = categories.map((category, index) => {
        return (
          <tr key={index}>
            <td>{category.name}</td>
            <td>{category.slug}</td>
            <td>
              <Link
                to={`/shopping-cart-reactjs/admin/edit-category/${category.id}`}
                className="btn btn-xs btn-primary"
                style={{ marginRight: '5px' }}
                id={category.id}
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp; Update
              </Link>
            </td>
          </tr>
        );
      });
    }
    return xhtml;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actFetchCategoriesRequest,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);