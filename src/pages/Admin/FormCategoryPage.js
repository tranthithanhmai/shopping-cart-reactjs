import React, { Component } from 'react';
import FormCategory from '../../components/Admin/FormCategory';

class FormCategoryPage extends Component {
  render() {
    var { history, match } = this.props;
    return (
      <div className="container">
        <FormCategory history={history} match={match} />
      </div>
    );
  }
}

export default FormCategoryPage;
