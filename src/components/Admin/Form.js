import React, { Component } from 'react';
import { actAddProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { actCloseForm } from './../../actions/index';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: 0,
            urlImages: [],
            txtDesc: ''
        };
    }


    // componentWillReceiveProps(nextProps) {
    //     if (nextProps && nextProps.itemEditing) {
    //         var { itemEditing } = nextProps;
    //         this.setState({
    //             id: itemEditing.id,
    //             txtName: itemEditing.name,
    //             txtPrice: itemEditing.price,
    //             urlImages: itemEditing.images,
    //             txtDesc: itemEditing.description
    //         });
    //     }
    // }

    onClickCancel = () => {
        this.props.handleCancel();
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onClickSubmit = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, urlImages, txtDesc } = this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            images: urlImages,
            description: txtDesc
        };
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        this.props.handleCancel();
    }

    render() {
        let { isShowForm } = this.props;
        if (isShowForm === false) return null;
        var { txtName, txtPrice, urlImages, txtDesc } = this.state;
        console.log('value: ', this.state)
        return (
            <div className="row">
                <div className="col-12">
                    <form onSubmit={this.onClickSubmit} style={{ border: '1px solid #aaa', padding: '20px', marginBottom: '20px' }}>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                                name='txtName'
                                value={txtName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Product Price"
                                name='txtPrice'
                                value={txtPrice}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Hình ảnh sản phẩm</label>
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Product Images"
                                name='urlImages'
                                value={urlImages}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Chi tiết sản phẩm</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name='txtDesc'
                                value={txtDesc}
                                onChange={this.onChange}
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
        // itemEditing: state.itemEditing,
        isShowForm: state.isShowForm,
        itemSelected: state.itemSelected
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },

        // onUpdateProduct: (product) => {
        //     dispatch(actUpdateProductRequest(product));
        // },
        handleCancel: () => {
            dispatch(actCloseForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
