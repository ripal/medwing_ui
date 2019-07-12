import { getGeoCodeFromAddress } from "../_GeoCode";
import * as type from "../../actions/ActionTypes";

describe("_GeoCode Reducer", () => {
  it("should return the initial state", () => {
    expect(getGeoCodeFromAddress(undefined, {})).toEqual({});
  });

  it("should handle getting lat long data", () => {
    const result = getGeoCodeFromAddress(undefined, {
      type: type.getGeoCodeFromAddress.processing,
      payload: { data: { address: "Address" } }
    });
    expect(result).toEqual({
      status: "GETGEOCODEFROMADDRESS_PROCESSING",
      data: { address: "Address" }
    });
  });

  it("should handle successfully got lat long", () => {
    const result = getGeoCodeFromAddress(undefined, {
      type: type.getGeoCodeFromAddress.success,
      payload: {
        data: [{ lat: 22.2222, lng: 33.33333, title: "Title", id: 11 }]
      }
    });

    expect(result).toEqual({
      status: "GETGEOCODEFROMADDRESS_SUCCESS",
      data: [{ lat: 22.2222, lng: 33.33333, title: "Title", id: 11 }]
    });
  });

  it("should handle fail get lat long", () => {
    const result = getGeoCodeFromAddress(undefined, {
      type: type.getGeoCodeFromAddress.fail,
      payload: {
        data: null
      }
    });

    expect(result).toEqual({
      status: "GETGEOCODEFROMADDRESS_FAIL",
      data: null
    });
  });
});
