import React, { Component } from 'react';
import {
  actAddProductRequest,
  actUpdateProductRequest,
  actGetProductRequest,
  actAddImagesRequest,
  actGetImagesRequest,
  actUpdateImagesRequest,
  actFetchCategoriesRequest,
  actFetchProductsRequest
} from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

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
      var idImg = match.params.id;
      // this.props.actions.actGetImagesRequest(idImg);
      this.props.actions.actGetProductRequest(id);
    }
    this.props.actions.actFetchCategoriesRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      if (!isEmpty(itemEditing)) {
        this.setState({
          id: itemEditing.id,
          txtName: itemEditing.name,
          txtPrice: itemEditing.regular_price,
          urlImages: itemEditing.images,
          txtDesc: itemEditing.description,
          arrCat: itemEditing.categories
        });
      } else {
        this.setState({
          urlImages: itemEditing.images
        });
      }
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

  onChangeCheckBox = (event) => {
    var { arrCat } = this.state;
    let checkVal = {
      id: +event.target.value,
      name: event.target.name,
      checked: event.target.checked
    }
    if (arrCat === undefined) {
      arrCat = [];
    }
    
    arrCat.push(checkVal);
    this.setState({
      arrCat
    });
  };

  onChangeFile = (event) => {
    var { id } = this.state;
    let files = Array.from(event.target.files);
    files.map(async (file) => {
      var formData = new FormData();
      formData.append('file', file);
      if (id) {
        await this.props.actions.actUpdateImagesRequest(formData);
      } else {
        await this.props.actions.actAddImagesRequest(formData);
      }
    })
  }

  onClickSubmit = async (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, txtDesc, arrCat, urlImages } = this.state;
    var { history, uploadImages } = this.props;
    var product = {
      id: id,
      name: txtName,
      regular_price: txtPrice,
      images: (id !== '') ? urlImages : uploadImages, //uploadImages, 
      description: txtDesc,
      categories: arrCat
    };

    console.log('product submit : ', product);

    if (id) {
      await this.props.actions.actUpdateProductRequest(product);
      console.log('uploadImages submit : ', uploadImages);
    } else {
      await this.props.actions.actAddProductRequest(product);
    }
    history.goBack();
  }

  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    var { txtName, txtPrice, txtDesc, urlImages } = this.state;
    var { categories } = this.props;
    var txtImg = [];
    if(urlImages && urlImages.length !== 0) {
      for (var i = 0 ; i < urlImages.length; i++) {
        txtImg.push(urlImages[i].name);
        txtImg.join(',').toString();
        console.log('txtImg : ', txtImg);
      }
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
            <button to="/shopping-cart-reactjs/admin/" type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>
              Submit
            </button>
            <button type="button" className="btn btn-light" onClick={this.onClickBack}>Back</button>
          </form>
        </div>
      </div>
    );
  }

  showCategories(categories) {
    var {arrCat} = this.state;
    let xhtml = null;
    
    if (categories !== null && categories.length > 0) {
      xhtml = categories.map((category, index) => {
        return (
          <div className="form-check" key={index}>
           <input type="checkbox" 
                  className="form-check-input"
                  value={category.id}
                  onChange={this.onChangeCheckBox}
                  name={category.name}
                />
            <label className="form-check-label">{category.name}</label>
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
    // onAddProduct: (product) => {
    //   dispatch(actAddProductRequest(product));
    // },
    // onEditProduct: (id) => {
    //   dispatch(actGetProductRequest(id));
    // },
    // onUpdateProduct: (product) => {
    //   dispatch(actUpdateProductRequest(product));
    // },
    // onAddImages: (uploadImages) => {
    //   dispatch(actAddImagesRequest(uploadImages));
    // },
    // onEditImages: (id) => {
    //   dispatch(actGetImagesRequest(id));
    // },
    // onUpdateImages: (uploadImages) => {
    //   dispatch(actUpdateImagesRequest(uploadImages));
    // },
    // onShowCategory: (categories) => {
    //   dispatch(actFetchCategoriesRequest(categories));
    // },
    // onShowProduct: () => {
    //   dispatch(actFetchProductsRequest());
    // }

    actions: bindActionCreators({
      actAddProductRequest,
      actGetProductRequest,
      actUpdateProductRequest,
      actAddImagesRequest,
      actGetImagesRequest,
      actUpdateImagesRequest,
      actFetchCategoriesRequest,
      actFetchProductsRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
