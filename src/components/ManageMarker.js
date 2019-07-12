import React from "react";

const Marker = props => {
  const { locations, onMarkerDelete, onMarkerEdit } = props;
  return locations.map((location, index) => {
    return (
      <div className={"marker"} key={location.lat}>
        <div className={"marker_title"}>{location.title}</div>
        <div className={"marker_sub_title"}>Latitude: {location.lat}</div>
        <div className={"marker_sub_title"}>Longitue: {location.lng}</div>
        <div className={"marker_sub_title"}>
          <input
            id={"edit_btn_" + index}
            type="button"
            value="Edit"
            onClick={e => onMarkerEdit(index)}
          />{" "}
          Or{" "}
          <input
            id={"delete_btn_" + index}
            type="button"
            value="Delete"
            onClick={e => onMarkerDelete(index)}
          />
        </div>
      </div>
    );
  });
};

export default Marker;
