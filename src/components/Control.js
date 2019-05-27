import React, { Component } from 'react';
import SortControl from './SortControl';
import SearchControl from './SearchControl';

class Control extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-6 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <h2>Poster</h2>
                </div>
                <SortControl />
                <SearchControl />
            </div>
        );
    }
}

export default Control;