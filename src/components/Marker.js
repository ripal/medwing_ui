import React from "react";
import { Marker } from "react-google-maps";

const MarkerComponent = props => {
  const { location, ...markerProps } = props;
  return (
    <Marker
      {...markerProps}
      position={{ lat: location.lat, lng: location.lng }}
      label={location.title}
    />
  );
};

export default MarkerComponent;
