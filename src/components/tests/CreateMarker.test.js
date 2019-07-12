import React from "react";
import { shallow } from "../../setupTests";

import CreateMarker from "../CreateMarker";
import Marker from "../Marker";

describe("CreateMarker Component", () => {
  it("render component", () => {
    const position = { lat: 33.33333, lng: 22.222222 };
    const onInfoWindowClose = {};
    const title = "Test";
    const onMarkerSave = {};
    const wrapper = shallow(
      <CreateMarker
        position={position}
        onInfoWindowClose={onInfoWindowClose}
        title={title}
        onMarkerSave={onMarkerSave}
      />
    );

    // Expect the wrapper object to be defined
    expect(wrapper.find(Marker)).toHaveLength(1);
  });

  it("onMarkerSave should called upon title submit", () => {
    const clickFn = jest.fn();
    const position = { lat: 33.33333, lng: 22.222222 };
    const onInfoWindowClose = {};
    const title = "Test";
    const onMarkerSave = clickFn;
    const wrapper = shallow(
      <CreateMarker
        position={position}
        onInfoWindowClose={onInfoWindowClose}
        title={title}
        onMarkerSave={onMarkerSave}
      />
    );

    wrapper.find("#btn_submit").simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
