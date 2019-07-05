import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actFetchCategoriesRequest, actGoCategories } from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

class Category extends Component {

  componentDidMount() {
    this.props.actions.actFetchCategoriesRequest();
    this.props.actions.actGoCategories('Categories', '/shopping-cart-reactjs/products/categories');
  }

  render() {
    let { categories } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <h1>List Categories</h1>
            <h5 style={{ marginTop: '15px' }}>Total: <b>{categories.length}</b> item(s)</h5>
          </div>
        </div>
        <div className="row">
          {this.showCategories(categories)}
        </div>
      </div>
    );
  }

  showCategories(categories) {
    let xhtml = null;
    if (categories !== null && categories.length > 0) {
      xhtml = categories.map((category, index) => {
        return (
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 list-item" key={index} style={{ marginBottom: '20px' }}>
            <img style={{ width: '100px', height: '100px' }} alt={category.name} src={category.image === null ? 'http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_4_front.jpg' : category.image.src} />
            <h4>
              <Link to={`/shopping-cart-reactjs/products/categories/${category.id}`} category={category}>
                {category.name}
              </Link>
            </h4>
          </div>
        );
      });
    }
    return xhtml;
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actFetchCategoriesRequest,
      actGoCategories
    }, dispatch)
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number,
      name : PropTypes.string,
      image : PropTypes.object
  })
  ),
  actFetchCategoriesRequest : PropTypes.func,
  actGoCategories           : PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

