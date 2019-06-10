import React, { Component } from 'react';
import {
  actAddProductRequest,
  actUpdateProductRequest,
  actGetProductRequest,
  actAddImagesRequest,
  actGetImagesRequest,
  actUpdateImagesRequest
} from './../../actions/index';
import { connect } from 'react-redux';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      urlImages: [],
      txtDesc: '',
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditImages(id);
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState = {
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.regular_price,
        urlImages: itemEditing.images,
        txtDesc: itemEditing.description
      };
    }
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  onChangeFile =  (event) => {
    var { id} = this.state;
    var { uploadImages } = this.props;
    const files = Array.from(event.target.files);
    files.map(async (file) => {
      var formData = new FormData();
      await formData.append('file', file);
      if(id) {
        this.props.onUpdateImages(formData);
      } else {
        this.props.onAddImages(formData);
      }
      this.setState = {
        images: uploadImages
      }
    });
  }

  onClickSubmit = async (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, txtDesc } = this.state;
    var { history, uploadImages } = this.props;
    var product = {
      id: id,
      name: txtName,
      regular_price: txtPrice,
      images: uploadImages,
      description: txtDesc
    };
    if (id) {
      await this.props.onUpdateProduct(product);
    } else {
      await this.props.onAddProduct(product);
    }
    history.goBack();
  }

  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    var { txtName, txtPrice, txtDesc } = this.state;
    var { itemEditing } = this.props;
    if (itemEditing.id) {
      txtName = itemEditing.name;
      txtPrice = itemEditing.regular_price;
      txtDesc = itemEditing.description;
    }

    return (
      <div className="row">
        <div className="col-12">
          <h2>Form Control</h2>
        </div>
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
                multiple
                className="form-control"
                placeholder="Product Images"
                name='urlImages'
                onChange={this.onChangeFile}
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
            <button to="/shopping-cart-reactjs/admin/" type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-light" onClick={this.onClickBack}>Back</button>
          </form>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing,
    uploadImages: state.uploadImages
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
    onAddImages: (uploadImages) => {
      dispatch(actAddImagesRequest(uploadImages));
    },
    onEditImages: (id) => {
      dispatch(actGetImagesRequest(id));
    },
    onUpdateImages: (uploadImages) => {
      dispatch(actUpdateImagesRequest(uploadImages));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
