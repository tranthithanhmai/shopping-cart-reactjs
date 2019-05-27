import React, { Component } from 'react';

class SearchControl extends Component {
    render() {
        return (
            <div className="row" style={{ marginBottom: '50px' }}>
                <div className="input-group col-12">
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