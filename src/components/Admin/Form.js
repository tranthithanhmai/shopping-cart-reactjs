import React, { Component } from 'react';
import {
  actAddProductRequest,
  actUpdateProductRequest,
  actGetProductRequest,
  actAddImagesRequest,
  actGetImagesRequest,
  actUpdateImagesRequest,
  actFetchCategoriesRequest
} from './../../actions/index';
import { connect } from 'react-redux';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      urlImages: [],
      txtDesc: "",
      arrCat: []
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match.params.id) {
      var id = match.params.id;
      this.props.onEditImages(id);
      this.props.onEditProduct(id);
    }
    this.props.onShowCategory();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.regular_price,
        urlImages: itemEditing.images,
        txtDesc: itemEditing.description,
        arrCat: itemEditing.categories
      });
    }
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
     [name] : value
    });
  }

  onChangeCheckBox = (event) => {
    var { arrCat } = this.state;
    console.log("slug: event.target.slug  : ", event.target);
    let checkVal = {
      id: event.target.value,
      name: event.target.name,
      checked: event.target.checked
    } 
    if(arrCat === undefined) {
      arrCat = [];
    }
    arrCat.push(checkVal);
    this.setState({
      arrCat
    });
  };

  onChangeFile = async (event) => {
    var { id } = this.state;
    let files = Array.from(event.target.files);
    files.map(async (file) => {
      var formData = new FormData();
      await formData.append('file', file);
      if (id) {
        await this.props.onUpdateImages(formData);
      } else {
        await this.props.onAddImages(formData);
      }
    })
  }

  onClickSubmit = async (e) => {
    e.preventDefault();
    console.log('state submit : ', this.state);
    var { id, txtName, txtPrice, txtDesc, arrCat } = this.state;
    var { history, uploadImages } = this.props;
    var product = {
      id: id,
      name: txtName,
      regular_price: txtPrice,
      images: uploadImages,
      description: txtDesc,
      categories: arrCat
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
    var { txtName, txtPrice, txtDesc, arrCat, uploadImages } = this.state;
    var { categories} = this.props;

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
              <label>Chi tiết sản phẩm</label>
              <textarea
                type="text"
                className="form-control"
                name='txtDesc'
                value={txtDesc}
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
              <label>Categories</label>
              {this.showCategories(categories)}
            </div>
            <button to="/shopping-cart-reactjs/admin/" type="submit" className="btn btn-primary" style={{marginRight : '10px'}}>
              Submit
            </button>
            <button type="button" className="btn btn-light" onClick={this.onClickBack}>Back</button>
          </form>
        </div>
      </div>
    );
  }

  showCategories(categories) {
    
    let xhtml = null;
    if (categories !== null && categories.length > 0) {
      xhtml = categories.map((category, index) => {
        return (
          <div className="form-check" key = {index}>
            <input  type="checkbox" className="form-check-input" 
                    value= {category.id}
                    onChange= {this.onChangeCheckBox} 
                    name= {category.name}
                    slug = {category.slug}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{category.name}</label>
          </div>
        );
      });
    }
    return xhtml;
  }

}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing,
    uploadImages: state.uploadImages,
    categories: state.categories
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
    },
    onShowCategory: (categories) => {
      dispatch(actFetchCategoriesRequest(categories));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
