import React from "react";
import MarkerComponent from "./Marker";

const MarkerList = props => {
  const { locations, ...markerProps } = props;
  return locations.map((location, i) => {
    return (
      <MarkerComponent
        key={i}
        {...markerProps}
        location={{ lat: location.lat, lng: location.lng }}
        label={location.title}
      />
    );
  });
};

export default MarkerList;
