import axios from "axios";

import { LOCATION_REQ, LOCATION_SUC, LOCATION_FAIL } from "./locationsTypes";
export const listLocations = () => async (dispatch) => {
  try {
    dispatch({ type: LOCATION_REQ });

    const { data } = await axios.get(`http://localhost:5000/api/locations`);

    dispatch({
      type: LOCATION_SUC,
      payload: data,
    } );
    localStorage.setItem('locationsInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: LOCATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
