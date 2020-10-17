import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export class Map extends Component {
  static defaultProps = {
    center: {
      lat: 42.36,
      lng: -71.05,
    },
    zoom: 11,
  };
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default Map;
