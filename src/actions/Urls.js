const SERVER_HOST =
  process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT;

export const GEO_CODE = {
  GET_GEO_CODE_FROM_ADDRESS: SERVER_HOST + "/geocode"
};

export const LOCATION = {
  GET: SERVER_HOST + "/location",
  POST: SERVER_HOST + "/location",
  DELETE: params => SERVER_HOST + "/location/" + params.id
};
