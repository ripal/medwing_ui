import React from "react";
import { mount } from "../../setupTests";

import { SearchBox } from "../SearchBox";

describe("SearchBox Component", () => {
  it("render component", () => {
    const wrapper = mount(<SearchBox />);

    expect(wrapper.state("geoCodeApiRequest")).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("search result available", () => {
    const mockFn = jest.fn();
    const wrapper = mount(<SearchBox onPlaceSubmit={mockFn} geoCode={""} />);
    const geoCode = {
      geoCode: {
        status: "GETGEOCODEFROMADDRESS_SUCCESS",
        data: [{ latitude: 22.22222, longitue: 33.3333 }]
      }
    };

    wrapper.setProps(geoCode);
    expect(mockFn).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it("search submit", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <SearchBox
        onPlaceSubmit={mockFn}
        geoCode={{
          status: "GETGEOCODEFROMADDRESS_SUCCESS",
          data: [{ latitude: 22.22222, longitue: 33.3333 }]
        }}
      />
    );

    wrapper.setState({ address: "Test" });
    wrapper.instance().onKeyDown({ key: "Enter" });
    expect(wrapper).toMatchSnapshot();
  });
});
