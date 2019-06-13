import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actSort } from './../../actions/index';

class Sort extends Component {

    handleSort = (orderBy, orderDir) => {
        this.props.actions.actSort(orderBy, orderDir);
    }

    render() {
        return (
            <div className="dropdown col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{ width: '100%' }}>
                    Sort by <span className="caret">
                    </span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" style={{ width: '100%' }}>
                    <li className="dropdown-item" role="button" onClick={() => this.handleSort('name', 'asc')}>Sort by Name: A -> Z</li>
                    <li className="dropdown-item" role="button" onClick={() => this.handleSort('name', 'desc')}>Sort by Name: Z -> A</li>
                    <li className="dropdown-item" role="button" onClick={() => this.handleSort('price', 'asc')}>Sort by price: low to high</li>
                    <li className="dropdown-item" role="button" onClick={() => this.handleSort('price', 'desc')}>Sort by price: high to low</li>
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        sort: state.sort
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onClickSort: (orderBy, orderDir) => {
        //     dispatch(actSort(orderBy, orderDir));
        // }
        actions: bindActionCreators({
            actSort
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);