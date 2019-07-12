"use strict";
import { combineReducers } from "redux";
import * as _geoCode from "./_GeoCode";
import * as _location from "./_Location";

const reducer = combineReducers({
  _geoCode: combineReducers({ ..._geoCode }),
  _location: combineReducers({ ..._location })
});

export default reducer;
