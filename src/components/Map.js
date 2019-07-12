import React, { Component } from "react";
import MapAdapter from "./MapAdapter";
import CreateMarker from "./CreateMarker";
import MarkerList from "./MarkerList";
import SearchBox from "./SearchBox";
import ManageMarkerComponent from "./ManageMarker";

const EMPTY = -1;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createMarkerWindow: false,
      editMarkerAt: EMPTY,
      locations: [],
      center: null
    };
  }

  componentDidMount = () => {
    this.getSavedLocations();
  };

  /**
   * Get saved markers
   */
  getSavedLocations = () => {
    this.props.dispatchAction({
      type: "getLocation",
      data: null
    });
  };

  /**
   * User submit place in search box
   */
  onPlaceSubmit = place => {
    if (place && place.geometry) {
      const lat = place.geometry.location.lat;
      const lng = place.geometry.location.lng;
      this.setState({ center: { lat, lng }, createMarkerWindow: true });
    } else {
      alert("No such address found. Please enter more details in address.");
    }
  };

  /**
   * Close marker info window
   */
  onInfoWindowClose = e => {
    this.setState({ createMarkerWindow: false, editMarkerAt: EMPTY }); // close marker info window
  };

  /**
   * Add new marker
   * @param title Marker identifier
   */
  addNewMarker = title => {
    if (this.state.editMarkerAt === EMPTY) {
      this.props.dispatchAction({
        type: "saveLocation",
        data: {
          title: title,
          lat: this.state.center.lat,
          lng: this.state.center.lng
        }
      });
    }
  };

  /**
   * Update existing marker
   * @param title Updated marker identifier
   */
  updateExistingMarker = title => {
    if (this.state.editMarkerAt !== EMPTY) {
      const location = this.props.locations[this.state.editMarkerAt];
      location.title = title;
      this.props.dispatchAction({
        type: "saveLocation",
        data: location
      });

      this.setState({ editMarkerAt: EMPTY });
    }
  };

  /**
   * Marker add/update
   */
  onMarkerSave = title => {
    if (title && title.trim() !== "") {
      this.setState({ error: null });
      this.addNewMarker(title);
      this.updateExistingMarker(title);
      this.setState({
        createMarkerWindow: false,
        editMarkerAt: EMPTY
      }); // close marker info window
    } else {
      this.setState({ error: "Required." });
    }
  };

  /**
   * Delete existing marker
   * @param index Delete particular marker from list
   */
  onMarkerDelete = index => {
    this.props.dispatchAction({
      type: "deleteLocation",
      params: {
        id: this.props.locations[index].id
      }
    });
  };

  /**
   * Edit marker
   * @param index Edit mode of particular marker
   */
  onMarkerEdit = index => {
    this.setState({
      editMarkerAt: index,
      createMarkerWindow: true
    });
  };

  render() {
    return (
      <div className="app">
        <MapAdapter
          zoom={this.props.zoom}
          center={this.state.center || this.props.center}
          createMarkerComponent={
            this.state.createMarkerWindow && (
              <CreateMarker
                position={
                  this.state.editMarkerAt === EMPTY
                    ? this.state.center
                    : this.props.locations[this.state.editMarkerAt]
                }
                onInfoWindowClose={this.onInfoWindowClose}
                onMarkerSave={this.onMarkerSave}
                title={
                  this.state.editMarkerAt !== EMPTY
                    ? this.props.locations[this.state.editMarkerAt].title
                    : null
                }
              />
            )
          }
          markerClustorComponent={
            <MarkerList locations={this.props.locations} />
          }
          searchComponent={
            <SearchBox
              onPlaceSubmit={this.onPlaceSubmit}
              restriction={{ country: "de" }}
              style={{ width: "100%" }}
              dispatchAction={this.props.dispatchAction}
            />
          }
        />
        <div className={"marker_container"}>
          <ManageMarkerComponent
            locations={this.props.locations}
            onMarkerDelete={this.onMarkerDelete}
            onMarkerEdit={this.onMarkerEdit}
          />
        </div>
      </div>
    );
  }
}

export default Map;
