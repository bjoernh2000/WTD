import React, { Component } from "react";
import { Map } from "./components/Map";
import { NavBar } from "./components/NavBar";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Map} />
            <Route
              path={process.env.PUBLIC_URL + "/#login"}
              component={Login}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
