import * as type from "../actions/ActionTypes";

export const getGeoCodeFromAddress = (state = {}, action) => {
  switch (action.type) {
    case type.getGeoCodeFromAddress.success:
    case type.getGeoCodeFromAddress.fail:
    case type.getGeoCodeFromAddress.processing:
      return {
        ...state,
        status: action.type,
        data: action.payload.data || null
      };

    default:
      return state;
  }
};
