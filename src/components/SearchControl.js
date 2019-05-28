// import React, { Component } from 'react';

// class SearchControl extends Component {
//     render() {
//         return (
//             <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
//                 <div className="input-group">
//                     <input type="text" className="form-control" placeholder="Search" />
//                     <div className="input-group-append">
//                         <button className="btn btn-primary" type="submit">Search</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SearchControl;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSearch } from './../actions/index';

class SearchControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch : ''
        }
    }

    onClickSearch = () => {
        this.props.handleSearch(this.state.strSearch);
    }

    onClickClear = () => {
        this.state.strSearch = '';
        this.props.handleSearch(this.state.strSearch);
    }

    handleChange = (event) => {
        this.setState({ strSearch: event.target.value });
    }

    render() {
        var {strSearch} = this.state;
        console.log('strSearchDef : ', strSearch);

        var strSearch = strSearch ? strSearch : this.props.strSearch;
        console.log('strSearch : ', strSearch);

        return (
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="input-group">
                    <input value={strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
                    <div className="input-group-append">
                        <button onClick={this.onClickSearch} className="btn btn-info" type="button">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        strSearch: state.strSearch
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSearch: (strSearch) => {
            dispatch(actSearch(strSearch));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl);