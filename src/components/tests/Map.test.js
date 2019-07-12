import React from "react";
import { shallow } from "../../setupTests";

import Map from "../Map";
import MapAdapter from "../MapAdapter";
import ManageMarkerComponent from "../ManageMarker";

describe("Map Component", () => {
  const locations = [{ lat: 33.33333, lng: 22.222222, title: "Test" }];

  it("render component", () => {
    const dispatchmockFn = jest.fn();
    const wrapper = shallow(
      <Map locations={locations} dispatchAction={dispatchmockFn} />
    );

    expect(wrapper.find(MapAdapter)).toHaveLength(1);
    expect(wrapper.find(ManageMarkerComponent)).toHaveLength(1);
    expect(dispatchmockFn).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it("dispatch action upon edit", () => {
    const dispatchmockFn = jest.fn();
    const wrapper = shallow(
      <Map locations={locations} dispatchAction={dispatchmockFn} />
    );

    wrapper.setState({ editMarkerAt: 0 });
    wrapper.instance().updateExistingMarker("Hello");
    expect(dispatchmockFn).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it("dispatch action upon add", () => {
    const dispatchmockFn = jest.fn();
    const wrapper = shallow(
      <Map locations={locations} dispatchAction={dispatchmockFn} />
    );

    wrapper.setState({
      editMarkerAt: -1,
      center: { lat: 22.2222, lng: 33.3333 }
    });
    wrapper.instance().addNewMarker("Hello");
    expect(dispatchmockFn).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it("lat/lng received", () => {
    const dispatchmockFn = jest.fn();
    const wrapper = shallow(
      <Map locations={locations} dispatchAction={dispatchmockFn} />
    );

    wrapper.instance().onPlaceSubmit({
      geometry: { location: { lat: 22.22222, lng: 33.33333 } }
    });
    expect(wrapper.state("createMarkerWindow")).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
