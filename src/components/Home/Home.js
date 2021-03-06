import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes} from 'prop-types';
import { actGoHome } from './../../actions/index';

class Home extends Component {

  componentWillMount() {
    this.props.actions.actGoHome();
  }
  render() {
    return (
      <div className="container">
        <h1>Welcome to Shopping Cart!</h1>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actGoHome
    }, dispatch)
  }
}

Home.propTypes = {
  actGoHome : PropTypes.func
}

export default connect(null, mapDispatchToProps)(Home);