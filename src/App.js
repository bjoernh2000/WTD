import React, { Component } from "react";
import { Map } from "./components/Map";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Map></Map>
      </div>
    );
  }
}

export default App;
