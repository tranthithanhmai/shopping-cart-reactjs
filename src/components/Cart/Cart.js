import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actDeleteCartRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import { PropTypes } from 'prop-types';

class Cart extends Component {
  onDeleteItem = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.actions.actDeleteCartRequest(id);
    }
  }

  render() {
    let { carts } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
            <h2><b>List Orders</b></h2>
            <div className="action-control">
              <Link
                to="/shopping-cart-reactjs/shopping-cart/add"
                type="button"
                className="btn btn-info btn-block">
                <i className='fa fa-plus' aria-hidden="true"></i> &nbsp;Create Order
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ReactTable
              data={carts}
              columns={[
                {
                  Header: "Key order",
                  accessor: "order_key"
                },
                {
                  Header: "First Name",
                  accessor: "billing.first_name"
                },
                {
                  Header: "Last Name",
                  accessor: "billing.last_name"
                },
                {
                  Header: "Address",
                  accessor: "billing.address_1"
                },
                {
                  Header: "Phone",
                  accessor: "billing.phone"
                },
                {
                  Header: "Postcode",
                  accessor: "billing.postcode"
                },
                {
                  Header: "State",
                  accessor: "billing.state"
                },
                {
                  Header: "Action",
                  Cell: state =>
                    <Fragment>
                      <Link
                        to={`/shopping-cart-reactjs/shopping-cart/view/${state.original.id}`}
                        type="button"
                        className="btn btn-sm btn-success">
                        View
                      </Link>
                      <Link
                        to={`/shopping-cart-reactjs/shopping-cart/edit/${state.original.id}`}
                        style={{ marginLeft: '5px' }}
                        type="button"
                        className="btn btn-sm btn-info">
                        Edit
                      </Link>
                      <button type="button" className="btn btn-sm btn-danger" style={{ marginLeft: '5px' }}
                        onClick={() => this.onDeleteItem(state.original.id)}>
                        Delete
                      </button>
                    </Fragment>
                }
              ]}
              defaultPageSize={5}
              className="-striped -highlight"
              showPaginationBottom
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actDeleteCartRequest
    }, dispatch)
  }
}

Cart.propTypes = {
  carts : PropTypes.array,
  actDeleteCartRequest: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Cart);