import React, { Component } from 'react';

class ItemCat extends Component {
  render() {
    var { category, arrCat } = this.props;
    return (
      <div className="form-check">
        <input type="checkbox"
          className="form-check-input"
          value={category.id}
          name={category.name}
          onChange={this.props.onChangeCheckBox}
          checked = {this.showCheked(arrCat)}
        />
        <label className="form-check-label">{category.name}</label>
      </div>
    );  
  }

  showCheked (arrCat) {
    var checked = "";
    var { category } = this.props;
    if(arrCat !== null && arrCat.length > 0) {
      for(var i = 0; i < arrCat.length ; i++) {
        if(category.id === arrCat[i].id) {
          checked = "checked";
        }
      }
    }
    return checked;
  }
}

export default ItemCat;