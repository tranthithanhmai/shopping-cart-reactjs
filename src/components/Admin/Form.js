import React, { Component } from 'react';
import {
  actAddProductRequest,
  actUpdateProductRequest,
  actGetProductRequest,
  actAddImagesRequest,
  actFetchCategoriesRequest,
  actFetchProductsRequest
} from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import ItemCat from './ItemCat';

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
          urlImages: itemEditing.images.map(item => ({...item, uploaded: true})),
          txtDesc: itemEditing.description,
          arrCat: itemEditing.categories
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
    } else {
      arrCat.push(checkVal);
      for (var i = 0; i < arrCat.length; i++) {
        var idChecked = arrCat.length - 1;
        if ((arrCat[i].id === arrCat[idChecked].id) && (arrCat[idChecked].checked === false)) {
          arrCat.splice(i, 1);
        }
      }
    }

    this.setState({
      arrCat
    });
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onChangeFile = async (event) => {
    let urlImages = [...this.state.urlImages]
    let files = Array.from(event.target.files);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let src = await this.getBase64(file);
      urlImages.push({src, uploaded: false, file})
    }
    this.setState({urlImages})
  }

  onClickSubmit = async (e) => {
    e.preventDefault();
    let { id, txtName, txtPrice, txtDesc, arrCat, urlImages } = this.state;
    let urlArr = urlImages.filter(file => file.uploaded);
    for (let i = 0; i < urlImages.length; i++) {
      const fileData = urlImages[i];
      if (!fileData.uploaded) {
        var formData = new FormData();
        formData.append('file', fileData.file);
        await this.props.actions.actAddImagesRequest(formData);
      } 
    }
    let { history, uploadImages } = this.props;
    urlArr = [...urlArr, ...uploadImages];
    var product = {
      id: id,
      name: txtName,
      regular_price: txtPrice,
      images:  urlArr,
      description: txtDesc,
      categories: arrCat
    };

    if (id) {
      await this.props.actions.actUpdateProductRequest(product);
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
    var { txtName, txtPrice, txtDesc } = this.state;
    var { categories } = this.props;
    txtDesc = txtDesc.replace(new RegExp(/[<p>,</p>,</br>]/, 'g'), '');
    
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
              <div className="col-12">
                {this.state.urlImages.map((item, index) => <img src={item.src} alt="Hình ảnh" key={index } style={{ width: '100px', height: '100px', marginRight: '5px'}} />)}
              </div>
              
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
    var { arrCat } = this.state;
    let xhtml = null;
    if (categories !== null && categories.length > 0) {
      xhtml = categories.map((category, index) => {
        return (
          <ItemCat
            onChangeCheckBox={this.onChangeCheckBox}
            id={category.id}
            key={index}
            category={category}
            arrCat={arrCat}
          />
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
    actions: bindActionCreators({
      actAddProductRequest,
      actGetProductRequest,
      actUpdateProductRequest,
      actAddImagesRequest,
      actFetchCategoriesRequest,
      actFetchProductsRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
