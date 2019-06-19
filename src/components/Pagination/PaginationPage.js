import React, { Component } from "react";
import PropTypes from "prop-types";

class PaginationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      pageLimit: "",
      totalPages: "",
      currentPage: "",
      initialPage: "",
      pagesToShow: ""
    };
  }

  componentDidMount() {
    this.setState({
      totalRecords: this.props.totalRecords,
      pageLimit: this.props.pageLimit || 10,
      totalPages: Math.ceil(this.props.totalRecords / this.props.pageLimit),
      pagesToShow: this.props.pagesToShow || 5,
      currentPage: this.props.initialPage || 1
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      totalRecords: nextProps.totalRecords,
      pageLimit: nextProps.pageLimit || 10,
      totalPages: Math.ceil(nextProps.totalRecords / nextProps.pageLimit),
      pagesToShow: nextProps.pagesToShow || 5
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.totalRecords !== prevState.totalRecords ||
      this.state.pageLimit !== prevState.pageLimit
    ) {
      this.setPage(this.state.currentPage);
    }
  }

  setPage(page) {
    var { totalRecords, pageLimit, totalPages } = this.state;

    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    this.setState({
      currentPage: page
    });

    var startIndex = (page - 1) * pageLimit;
    var endIndex = Math.min(startIndex + pageLimit - 1, totalRecords - 1);

    this.props.onChangePage({
      pageLimit,
      totalPages,
      page,
      startIndex,
      endIndex
    });
  }

  getPager() {
    var { pagesToShow, currentPage, totalPages } = this.state;
    var pages = [],
      startFromNumber;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      pagesToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1;
      } else if (
        currentPage + Math.floor((pagesToShow - 1) / 2) >=
        totalPages
      ) {
        startFromNumber = totalPages - (pagesToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2);
      }
    }

    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      currentPage,
      totalPages,
      pages
    };
  }

  render() {
    // console.log(this.state);
    if (!this.state.totalRecords || this.state.totalPages === 1) return null;

    var pager = this.getPager();
    // console.log(pager);

    return (
      <ul className="pagination">
        <li className="page-item"
          disabled={pager.currentPage === 1 ? true : false}
          onClick={() => this.setPage(1)}
        >
          <button className="page-link"><i className="fa fa-angle-double-left" aria-hidden="true"></i></button>
        </li>
        <li className="page-item"
          disabled={pager.currentPage === 1 ? true : false}
          onClick={() => this.setPage(pager.currentPage - 1)}
        >
          <button className="page-link"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage === page ? "page-item active" : "page-item"}
            onClick={() => this.setPage(page)}
          >
            <button className="page-link"> {page}</button>
          </li>
        ))}
        <li className="page-item"
          disabled={pager.currentPage === pager.totalPages ? true : false}
          onClick={() => this.setPage(pager.currentPage + 1)}
        >
          <button className="page-link"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
        </li>
        <li className="page-item"
          disabled={pager.currentPage === pager.totalPages ? true : false}
          onClick={() => this.setPage(pager.totalPages)}
        >
          <button className="page-link"><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
        </li>
      </ul>
    );
  }
}

PaginationPage.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onChangePage: PropTypes.func
};

export default PaginationPage;