import React, { Component } from 'react';

class SearchControl extends Component {
    render() {
        return (
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchControl;