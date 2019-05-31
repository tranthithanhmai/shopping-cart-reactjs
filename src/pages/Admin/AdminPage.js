import React, { Component } from 'react';
import Lists from './../../components/Admin/Lists';

class AdminPage extends Component {
  render() {
    return (
      <Lists match={this.props.match} />
    );
  }
}

export default AdminPage;
