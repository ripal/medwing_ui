import React from "react";
import PropTypes from "prop-types";
import { InfoWindow } from "react-google-maps";
import Marker from "./Marker";

const propTypes = {
  title: PropTypes.string,
  onInfoWindowClose: PropTypes.object,
  onMarkerSave: PropTypes.object,
  position: PropTypes.object
};

class CreateMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  componentDidMount() {
    if (this.props.title) this.setState({ title: this.props.title });
  }

  /**
   * User enter marker title
   */
  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  /**
   * User enter key
   */
  onKeyDown = e => {
    if (e.key === "Enter") {
      this.onTitleSubmit();
    } else if (e.key === "Escape") {
      this.props.onInfoWindowClose();
    }
  };

  /**
   * On marker title submit
   */
  onTitleSubmit = e => {
    if (this.state.title && this.state.title.trim() !== "") {
      this.setState({ error: null });
      this.props.onMarkerSave(this.state.title);
    } else {
      this.setState({ error: "Required." });
    }
  };

  /**
   * Render input title elements
   */
  renderMarkerTitleInput = () => {
    return (
      <div className={"marker_window"}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onTitleChange}
          onKeyDown={this.onKeyDown}
          placeholder={"Title here *"}
          autoFocus
        />

        <input
          id="btn_submit"
          type="button"
          value={this.props.title ? "Update" : "Save"}
          onClick={this.onTitleSubmit}
        />
        <div className={"error"}>{this.state.error}</div>
      </div>
    );
  };

  render() {
    return (
      <Marker location={this.props.position}>
        <InfoWindow onCloseClick={this.props.onInfoWindowClose}>
          {this.renderMarkerTitleInput()}
        </InfoWindow>
      </Marker>
    );
  }
}

CreateMarker.propTypes = propTypes;
export default CreateMarker;
