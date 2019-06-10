import React, { Component } from 'react';
import Form from './../../components/Admin/Form';

class FormControlPage extends Component {
  render() {
    var {history, match} = this.props;
    return (
      <div className="container">
        <Form history = {history}  match = {match} />
      </div>
    );
  }
}

export default FormControlPage;
