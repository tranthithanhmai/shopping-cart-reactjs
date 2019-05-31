import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as callApi from './../../services/apiCaller';
import { actCloseForm, actSubmitForm } from './../../actions/index';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task_id: '',
            task_name: '',
            task_price: 0,
            task_images: [],
            task_description: ''
        }
    }

    componentWillMount() {
        this.updateItem(this.props.itemSelected)
    }
    componentWillReceiveProps(nextProps) {
        this.updateItem(nextProps.itemSelected)
    }

    updateItem(item) {
        if (item !== null) {
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_price: item.price,
                task_images: item.images,
                task_description: item.description
            });
        }
    }

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    onClickSubmit = (event) => {
        let item = {
            id: this.state.task_id,
            name: this.state.task_name,
            price: this.state.task_price,
            images: this.state.task_images,
            description: this.state.task_description
        }
        callApi.call('wordpress-demo/wp-json/wc/v3/products', 'POST', {
            id: item.id,
            name: item.name,
            price: item.price,
            images: item.images,
            description: item.description
        }).then(res => {
            console.log(res);
        });
        this.props.handleSubmit(item);
        event.preventDefault();
    }

    onClickCancel = () => {
        this.props.handleCancel();
    }

    render() {
        let { isShowForm } = this.props;
        if (isShowForm === false) return null;
        return (
            <div className="row">
                <div className="col-12">
                    <form onSubmit={this.onClickSubmit} style={{border: '1px solid #aaa', padding: '20px', marginBottom: '20px'}}>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                                name='task_name'
                                value={this.state.task_name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Product Price"
                                name='task_price'
                                value={this.state.task_price}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Hình ảnh sản phẩm</label>
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Product Images"
                                name='task_images'
                                value={this.state.task_images}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Chi tiết sản phẩm</label>
                            <textarea 
                                type="text"
                                className="form-control"
                                name='task_description'
                                value={this.state.task_description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-light" onClick={this.onClickCancel}>Cancel</button>
                    </form>
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
        handleCancel: () => {
            dispatch(actCloseForm());
        },

        handleSubmit: (item) => {
            dispatch(actSubmitForm(item));
            dispatch(actCloseForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);