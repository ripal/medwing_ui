import React from "react";
import { shallow } from "../../setupTests";

import ManageMarker from "../ManageMarker";

describe("ManageMarker Component", () => {
  const locations = [{ lat: 33.33333, lng: 22.222222, title: "Test" }];

  it("render component", () => {
    const onMarkerDelete = {};
    const onMarkerEdit = {};
    const wrapper = shallow(
      <ManageMarker
        locations={locations}
        onMarkerDelete={onMarkerDelete}
        onMarkerEdit={onMarkerEdit}
      />
    );
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });

  it("onMarkerDelete should called upon delete event", () => {
    const clickFn = jest.fn();
    const onMarkerEdit = {};
    const wrapper = shallow(
      <ManageMarker
        locations={locations}
        onMarkerDelete={clickFn}
        onMarkerEdit={onMarkerEdit}
      />
    );

    expect(wrapper.find("input")).toHaveLength(2);

    wrapper.find("#delete_btn_0").simulate("click");
    expect(clickFn).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it("onMarkerEdit should called upon edit event", () => {
    const clickFn = jest.fn();
    const onMarkerDelete = {};
    const wrapper = shallow(
      <ManageMarker
        locations={locations}
        onMarkerDelete={onMarkerDelete}
        onMarkerEdit={clickFn}
      />
    );

    expect(wrapper.find("input")).toHaveLength(2);

    wrapper.find("#edit_btn_0").simulate("click");
    expect(clickFn).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
