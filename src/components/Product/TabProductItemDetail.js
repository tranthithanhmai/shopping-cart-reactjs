import React, { Component } from 'react';

class TabProductItemDetail extends Component {
  render() {
    var { product } = this.props;
    var description = "";
    if (product.id) {
      description = product.description.replace(new RegExp(/[<p>,</p>,</br>]/, 'g'), '');
    }
    return (
      <div className="container" style={{ marginTop: '30px' }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#Description">Description</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#Reviews"> Reviews (0)</a>
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
            <h3>Be the first to review " {product.name} "</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <p>Your Rating</p>
            <p>
              <span className="fa fa-star-o" aria-hidden="true" style={{ marginRight: '5px' }}></span>
              <span className="fa fa-star-o" aria-hidden="true" style={{ marginRight: '5px' }}></span>
              <span className="fa fa-star-o" aria-hidden="true" style={{ marginRight: '5px' }}></span>
              <span className="fa fa-star-o" aria-hidden="true" style={{ marginRight: '5px' }}></span>
              <span className="fa fa-star-o" aria-hidden="true" style={{ marginRight: '5px' }}></span>
            </p>
            <div className="form-group">
              <label htmlFor="Your review">Your review *</label>
              <textarea className="form-control" rows={5} id="review" />
            </div>
            <div className="row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="name">Name *</label>
                <textarea className="form-control" rows={5} id="name" />
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="email">Email *</label>
                <textarea className="form-control" rows={5} id="email" />
              </div>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TabProductItemDetail;
