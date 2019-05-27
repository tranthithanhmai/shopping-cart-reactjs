import React, { Component } from 'react';

class SortControl extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-6 col-sm-6 col-md-8 col-lg-8 col-xl-9">
                    <h2>Poster</h2>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="form-group">
                        <select className="form-control">
                            <option value="menu_order">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by latest</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default SortControl;