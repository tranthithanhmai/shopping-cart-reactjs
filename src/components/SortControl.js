import React, { Component } from 'react';

class SortControl extends Component {
    render() {
        return (
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
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
        );
    }
}

export default SortControl;