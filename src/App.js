import React, { Component } from "react";
import { Map } from "./components/Map";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>What to Do</h1>
        <Map></Map>
      </div>
    );
  }
}

export default App;
