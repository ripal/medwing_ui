import React from "react";
import { connect } from "react-redux";
import * as type from "../actions/ActionTypes";
import { searchAddress } from "../helpers/GeoCode";

const CLIENT_SIDE_LAT_LONG_API = 1;
const SERVER_SIDE_LAT_LONG_API = 2;

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      geoCodeApiRequest: CLIENT_SIDE_LAT_LONG_API // client/server side api to get lat long
    };
  }

  componentWillReceiveProps = nextProps => {
    this.loadGeoCodeInfo(nextProps);
  };

  /**
   * Load lat long response from server
   */
  loadGeoCodeInfo = nextProps => {
    if (
      this.props.geoCode !== nextProps.geoCode &&
      nextProps.geoCode.data !== this.props.geoCode.data &&
      nextProps.geoCode.status === type.getGeoCodeFromAddress.success
    ) {
      const loc = nextProps.geoCode.data[0];
      const data = {
        geometry: { location: { lat: loc.latitude, lng: loc.longitude } }
      };

      // notify to parent component(i.e. map) that lat,lng available
      this.props.onPlaceSubmit(data);
    }
  };

  /**
   * User types address
   */
  onAddressChange = e => {
    this.setState({ address: e.target.value });
  };

  onKeyDown = e => {
    if (this.state.address && this.state.address.trim() !== "")
      if (e.key === "Enter") {
        // Get latidude & longitude from address.
        if (this.state.geoCodeApiRequest === CLIENT_SIDE_LAT_LONG_API) {
          searchAddress(this.state.address).then(
            response => {
              this.props.onPlaceSubmit(response.results[0]);
            },
            error => {
              console.error(error);
              this.props.onPlaceSubmit(null);
            }
          );
        } else {
          this.props.dispatchAction({
            type: "getGeoCodeFromAddress",
            data: {
              address: this.state.address
            }
          });
        }
      }
  };

  onApiTypeChange = e => {
    this.setState({ geoCodeApiRequest: Number(e.target.value) });
  };

  render() {
    return (
      <div>
        <label for="client_api">Client side Places API</label>
        <input
          type="radio"
          name="api_type"
          id="client_api"
          value={CLIENT_SIDE_LAT_LONG_API}
          checked={this.state.geoCodeApiRequest === CLIENT_SIDE_LAT_LONG_API}
          onChange={this.onApiTypeChange}
        />
        <label for="server_api">Server side GeoCode API</label>
        <input
          type="radio"
          name="api_type"
          id="server_api"
          value={SERVER_SIDE_LAT_LONG_API}
          checked={this.state.geoCodeApiRequest === SERVER_SIDE_LAT_LONG_API}
          onChange={this.onApiTypeChange}
        />
        <input
          type="text"
          value={this.state.address}
          onChange={this.onAddressChange}
          onKeyDown={this.onKeyDown}
          style={this.props.style}
          autoFocus
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    geoCode: state._geoCode.getGeoCodeFromAddress
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchBox);
