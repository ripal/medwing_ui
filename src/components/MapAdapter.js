import React, { PureComponent } from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.AsyncMap = null;
    this.mapURL =
      "https://maps.googleapis.com/maps/api/js?key=" +
      process.env.REACT_APP_GOOGLE_V3_API +
      "&libraries=places";
  }

  render() {
    if (!this.AsyncMap) {
      this.AsyncMap = withScriptjs(
        withGoogleMap(props => (
          <GoogleMap
            google={this.props.google}
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
          >
            {this.props.searchComponent}
            {this.props.markerClustorComponent}
            {this.props.createMarkerComponent}
          </GoogleMap>
        ))
      );
    }

    return (
      <this.AsyncMap
        googleMapURL={this.mapURL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: "50%", width: "50%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
export default Map;
