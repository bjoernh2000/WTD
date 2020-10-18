import React, { Component } from "react";
import { Map } from "./components/Map";
import { NavBar } from "./components/NavBar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authed: true }; // currently we're authenticated
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Map} />
            <Route path={process.env.PUBLIC_URL + "/login"} component={Login} />
            <Route path={process.env.PUBLIC_URL + "/signup"} component={Signup} />
            <PrivateRoute
              authed={this.state.authed}
              path={process.env.PUBLIC_URL + "/dashboard"}
              component={Profile}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
