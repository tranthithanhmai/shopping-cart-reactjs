import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actViewCartsRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';
import CartLists from '../../components/Cart/CartLists';

class ViewOrderPage extends Component {
  
  componentDidMount() {
    let { id } = this.props.match.params;
    if (id) {
      this.props.actions.actViewCartsRequest(id);
    }
  }

  render() {
    var { cart } = this.props;
    return (
      <div className="container">
        <CartLists cart={cart} history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.itemEditing
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actViewCartsRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrderPage);
