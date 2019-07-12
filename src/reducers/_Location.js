import * as type from "../actions/ActionTypes";

export const saveLocation = (state = {}, action) => {
  switch (action.type) {
    case type.saveLocation.success:
    case type.saveLocation.fail:
    case type.saveLocation.processing:
      return {
        ...state,
        status: action.type,
        data: action.payload.data || null
      };

    default:
      return state;
  }
};

export const getLocation = (state = {}, action) => {
  switch (action.type) {
    case type.getLocation.success:
    case type.getLocation.fail:
    case type.getLocation.processing:
      return {
        ...state,
        status: action.type,
        data: action.payload.data || null
      };

    default:
      return state;
  }
};

export const deleteLocation = (state = {}, action) => {
  switch (action.type) {
    case type.deleteLocation.success:
    case type.deleteLocation.fail:
    case type.deleteLocation.processing:
      return {
        ...state,
        status: action.type,
        data: action.payload.data || null
      };

    default:
      return state;
  }
};
