import React from "react";
import { shallow } from "../../setupTests";

import CreateMarker from "../CreateMarker";
import Marker from "../Marker";

describe("CreateMarker Component", () => {
  const position = { lat: 33.33333, lng: 22.222222 };
  const title = "Test";
  it("render component", () => {
    const onInfoWindowClose = jest.fn();
    const onMarkerSave = jest.fn();
    const wrapper = shallow(
      <CreateMarker
        position={position}
        onInfoWindowClose={onInfoWindowClose}
        title={title}
        onMarkerSave={onMarkerSave}
      />
    );

    expect(wrapper.find(Marker)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("onMarkerSave should called upon title submit", () => {
    const clickFn = jest.fn();
    const onInfoWindowClose = jest.fn();
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
    expect(wrapper).toMatchSnapshot();
  });
});
