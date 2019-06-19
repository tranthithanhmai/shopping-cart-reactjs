import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actAddCategoryRequest, actGetCategoryRequest, actUpdateCategoryRequest } from './../../actions/index';
import { isEmpty } from 'lodash';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      scrImage: []
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match.params.id) {
      var id = match.params.id;
      console.log('id : ', id)
      this.props.actions.actGetCategoryRequest(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      if (!isEmpty(itemEditing)) {
        this.setState({
          id: itemEditing.id,
          txtName: itemEditing.name,
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

  onClickSubmit = async (e) => {
    e.preventDefault();
    let { history, match } = this.props;
    let id = match.params.id;
    let category = {
      id: this.state.id,
      name: this.state.txtName
    }
    console.log('id : ', id)
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
    var { txtName } = this.state;
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
            <button to="/shopping-cart-reactjs/admin/" type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>
              Submit
            </button>
            <button type="button" className="btn btn-light" onClick= {this.onClickBack}>Back</button>
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
      actUpdateCategoryRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCategory);