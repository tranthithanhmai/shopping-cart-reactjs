import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ItemCat extends Component {
  render() {
    let { category, arrCat } = this.props;
    return (
      <div className="form-check">
        <input type="checkbox"
          className="form-check-input"
          value={category.id}
          name={category.name}
          onChange={this.props.onChangeCheckBox}
          checked={this.showCheked(arrCat)}
        />
        <label className="form-check-label">{category.name}</label>
      </div>
    );
  }

  showCheked(arrCat) {
    let checked = "";
    let { category } = this.props;
    if (arrCat !== null && arrCat.length > 0) {
      for (let i = 0; i < arrCat.length; i++) {
        if (category.id === arrCat[i].id) {
          checked = "checked";
        }
      }
    }
    return checked;
  }
}

ItemCat.propTypes = {
  category: PropTypes.object,
  arrCat:  PropTypes.array
}

export default ItemCat;