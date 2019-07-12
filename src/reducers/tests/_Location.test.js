import { saveLocation, getLocation, deleteLocation } from "../_Location";
import * as type from "../../actions/ActionTypes";

describe("_Location Reducer", () => {
  describe("Get saved location", () => {
    it("should return the initial state", () => {
      expect(getLocation(undefined, {})).toEqual({});
    });

    it("should handle getting saved locations", () => {
      const result = getLocation(undefined, {
        type: type.getLocation.processing,
        payload: { data: {} }
      });
      expect(result).toEqual({
        status: "GETLOCATION_PROCESSING",
        data: {}
      });
    });

    it("should handle successfull getting saved locations", () => {
      const result = getLocation(undefined, {
        type: type.getLocation.success,
        payload: {
          data: [{ lat: 22.2222, lng: 33.33333, title: "Title", id: 11 }]
        }
      });
      expect(result).toEqual({
        status: "GETLOCATION_SUCCESS",
        data: [{ lat: 22.2222, lng: 33.33333, title: "Title", id: 11 }]
      });
    });

    it("should handle fail getting saved locations", () => {
      const result = getLocation(undefined, {
        type: type.getLocation.fail,
        payload: {
          data: {}
        }
      });
      expect(result).toEqual({
        status: "GETLOCATION_FAIL",
        data: {}
      });
    });
  });

  describe("Save/Update location", () => {
    it("should return the initial state", () => {
      expect(saveLocation(undefined, {})).toEqual({});
    });

    it("should handle saving locations", () => {
      const result = saveLocation(undefined, {
        type: type.saveLocation.processing,
        payload: { data: { lat: 22.2222, lng: 33.3333, title: "Title" } }
      });
      expect(result).toEqual({
        status: "SAVELOCATION_PROCESSING",
        data: { lat: 22.2222, lng: 33.3333, title: "Title" }
      });
    });

    it("should handle successfull saving locations", () => {
      const result = saveLocation(undefined, {
        type: type.saveLocation.success,
        payload: {
          data: [{ lat: 22.2222, lng: 33.3333, title: "Title", id: 11 }]
        }
      });
      expect(result).toEqual({
        status: "SAVELOCATION_SUCCESS",
        data: [{ lat: 22.2222, lng: 33.3333, title: "Title", id: 11 }]
      });
    });

    it("should handle fail saving locations", () => {
      const result = saveLocation(undefined, {
        type: type.saveLocation.fail,
        payload: {
          data: {}
        }
      });
      expect(result).toEqual({
        status: "SAVELOCATION_FAIL",
        data: {}
      });
    });
  });

  describe("Delete location", () => {
    it("should return the initial state", () => {
      expect(deleteLocation(undefined, {})).toEqual({});
    });

    it("should handle delete location", () => {
      const result = deleteLocation(undefined, {
        type: type.deleteLocation.processing,
        payload: { data: { id: 1 } }
      });
      expect(result).toEqual({
        status: "DELETELOCATION_PROCESSING",
        data: { id: 1 }
      });
    });

    it("should handle successfull delete locations", () => {
      const result = deleteLocation(undefined, {
        type: type.deleteLocation.success,
        payload: {
          data: []
        }
      });
      expect(result).toEqual({
        status: "DELETELOCATION_SUCCESS",
        data: []
      });
    });

    it("should handle fail delete locations", () => {
      const result = deleteLocation(undefined, {
        type: type.deleteLocation.fail,
        payload: {
          data: {}
        }
      });
      expect(result).toEqual({
        status: "DELETELOCATION_FAIL",
        data: {}
      });
    });
  });

  // it("should handle successfully got lat long", () => {
  //   const result = getGeoCodeFromAddress(undefined, {
  //     type: type.getGeoCodeFromAddress.success,
  //     payload: {
  //       data: [{ lat: 22.2222, lng: 33.33333, title: "Title", id: 11 }]
  //     }
  //   });

  //   expect(result).toEqual({
  //     status: "GETGEOCODEFROMADDRESS_SUCCESS",
  //     data: [{ lat: 22.2222, lng: 33.33333, title: "Title", id: 11 }]
  //   });
  // });

  // it("should handle fail get lat long", () => {
  //   const result = getGeoCodeFromAddress(undefined, {
  //     type: type.getGeoCodeFromAddress.fail,
  //     payload: {
  //       data: null
  //     }
  //   });

  //   expect(result).toEqual({
  //     status: "GETGEOCODEFROMADDRESS_FAIL",
  //     data: null
  //   });
  // });
});
