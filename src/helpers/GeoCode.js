import Geocode from "react-geocode";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_V3_API);
// Enable or disable logs. Its optional.
Geocode.enableDebug();

/**
 * Get lat and lng from given address
 * @param {String} address
 */
export const searchAddress = address => {
  if (address && address.trim() !== "")
    return Geocode.fromAddress(address).then(
      response => {
        return response;
      },
      error => {
        console.error(error);
        return null;
      }
    );
  else return null;
};
