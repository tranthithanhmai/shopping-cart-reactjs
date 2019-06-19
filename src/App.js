import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/Home/NavBar';
// import Breadcrumb from './components/Home/Breadcrumb';
import routes from './route-config';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="header-container fixed-top">
            <NavBar />
          </div>
          <div className="product-container" style={{ marginTop: '150px' }}>
            {this.showRoute(routes)}
          </div>
        </div>
      </Router>
    );
  }

  showRoute(routes) {
    let xhtml = null;

    if (routes.length > 0) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        );
      });
    }

    return <Switch>{xhtml}</Switch>;
  }
}

export default App;
