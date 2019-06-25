import React, { Component } from 'react';

class TabProductItemDetail extends Component {
  render() {
    var { product } = this.props;
    var description = "";
    if (product.id) {
      description = product.description.replace(new RegExp(/<.*?>/, 'g'), '');
    }
    return (
      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#Description">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Reviews"> Reviews</a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="Description" className="container tab-pane active"><br />
                <h3>Description</h3>
                <p>{description}</p>
              </div>
              <div id="Reviews" className="container tab-pane fade"><br />
                <h3>Reviews</h3>
                <p>There are no reviews yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabProductItemDetail;
