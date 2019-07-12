import React, { Component } from "react";
import MapComponent from "./components/Map";
import { connect } from "react-redux";
import { action } from "./actions/Actions";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { locations } = this.props;
    return (
      <MapComponent
        center={{ lat: 51.1657, lng: 10.4515 }}
        zoom={8}
        dispatchAction={this.props.dispatchAction}
        locations={
          (locations &&
            locations.data &&
            locations.data.length > 0 &&
            locations.data) ||
          []
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state._location.getLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAction: (param1, param2) => {
      dispatch(action(param1, param2));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
