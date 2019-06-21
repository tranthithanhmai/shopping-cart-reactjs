import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actSearch } from './../../actions/index';

class SearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: ''
    }
  }

  onClickSearch = () => {
    this.props.actions.actSearch(this.state.strSearch);
  }

  onClickClear = () => {
    this.setState({
      strSearch: ""
    });
    this.props.actions.actSearch("");
  }

  handleChange = (event) => {
    this.setState({ strSearch: event.target.value });
  }

  render() {
    var { strSearch } = this.state;

    strSearch = strSearch ? strSearch : this.props.strSearch;

    return (
      <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="input-group">
          <input value={strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
          <div className="input-group-append">
            <button onClick={this.onClickSearch} className="btn btn-info" type="button">Search</button>
            <button onClick={this.onClickClear} className="btn btn-warning" type="button">Clear</button>
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
    actions: bindActionCreators({
      actSearch
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl);