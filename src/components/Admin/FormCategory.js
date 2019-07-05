import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actAddCategoryRequest,
  actGetCategoryRequest,
  actUpdateCategoryRequest,
  actAddImagesRequest,
  actGoAdminItem
} from './../../actions/index';
import { isEmpty } from 'lodash';
import { PropTypes } from 'prop-types';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtSlug: ""
      // srcImage: ""
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match.params.id) {
      const id = match.params.id;
      this.props.actions.actGetCategoryRequest(id);
      this.props.actions.actGoAdminItem('Edit', `/shopping-cart-reactjs/admin/eidt-category/${id}`);
    } else {
      this.props.actions.actGoAdminItem('Add', '/shopping-cart-reactjs/admin/add-category');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      let { itemEditing } = nextProps;
      if (!isEmpty(itemEditing)) {
        this.setState({
          id: itemEditing.id,
          txtName: itemEditing.name,
          txtSlug: itemEditing.slug
          // srcImage: itemEditing.image
        });
      }
    }
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  // getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });
  // }

  // onChangeFile = async (event) => {
  //   let srcImage = this.state.srcImage;
  //   let files = event.target.files;
  //   console.log('files: ', files[0])
  //   let file = files[0];
  //   let src =  await this.getBase64(file);
  //   this.setState({
  //     srcImage: {
  //       src : src
  //     }
  //   });
  //   console.log('scr: ', src)
  //   console.log('srcImage : ', this.state)
  // }

  onClickSubmit = async (e) => {
    e.preventDefault();
    let {
      id,
      txtName,
      txtSlug
      // srcImage 
    } = this.state;
    let { history } = this.props;
    // let urlArr = srcImage.src;
    // var formData = new FormData();
    //     formData.append('file', urlArr);
    //     await this.props.actions.actAddImagesRequest(formData);
    let category = {
      id: id,
      name: txtName,
      slug: txtSlug
      // image: {
      //   src : urlArr
      // }
    }
    if (id) {
      await this.props.actions.actUpdateCategoryRequest(category);
    } else {
      await this.props.actions.actAddCategoryRequest(category);
    }

    history.goBack();
  }

  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    let {
      txtName,
      txtSlug
      // srcImage 
    } = this.state;
    return (
      <div className="row">
        <div className="col-12">
          <h2>Form Category</h2>
        </div>
        <div className="col-12">
          <form onSubmit={this.onClickSubmit} style={{ border: '1px solid #aaa', padding: '20px', marginBottom: '20px' }}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                name='txtName'
                value={txtName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                className="form-control"
                placeholder="Slug Name"
                name='txtSlug'
                value={txtSlug}
                onChange={this.onChange}
              />
            </div>
            {/* <div className="form-group">
              <label>Image</label>
              <input
                type="file"
                className="form-control"
                placeholder="Category Image"
                name='urlImage'
                onChange={this.onChangeFile}
              />
            </div> */}
            <button to="/shopping-cart-reactjs/admin/" type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>
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
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actAddCategoryRequest,
      actGetCategoryRequest,
      actUpdateCategoryRequest,
      actAddImagesRequest,
      actGoAdminItem
    }, dispatch)
  }
}

FormCategory.propTypes = {
  actAddCategoryRequest     : PropTypes.func,
  actGetCategoryRequest     : PropTypes.func,
  actUpdateCategoryRequest  : PropTypes.func,
  actAddImagesRequest       : PropTypes.func,
  actGoAdminItem            : PropTypes.func,
  itemEditing               : PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCategory);