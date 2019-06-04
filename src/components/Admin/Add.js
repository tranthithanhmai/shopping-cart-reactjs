import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actToggleForm, actItemUnSelect } from './../../actions/index';

class Add extends Component {
    handToggleForm = () => {
        this.props.handToggleForm(); // dispatch({ type: 'TOGGLE_FORM'});
    }

    render() {
        var { isShowForm } = this.props;
        return (
            <div className="row header-form">
                <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h2><b>Quản lí sản phẩm</b></h2>
                    <div className="action-control">
                        <button
                            onClick={this.handToggleForm}
                            type="button"
                            className={isShowForm === false ? 'btn btn-info btn-block' : 'btn btn-danger btn-block'}>
                             <i className={isShowForm === false ? 'fa fa-plus' : 'fa fa-times'} aria-hidden="true"></i> &nbsp;{isShowForm === false ? 'Thêm sản phẩm' : 'Đóng Form' }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm,
        itemSelected: state.itemSelected
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handToggleForm: () => {
            dispatch(actItemUnSelect());
            dispatch(actToggleForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);