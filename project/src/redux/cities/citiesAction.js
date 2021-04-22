import axios from "axios";

import { CITIES_REQ,
  CITIES_SUC,
  CITIES_FAIL } from "./citiesTypes";

export const listCities = () => async (dispatch) => {
  try {
    dispatch({ type: CITIES_REQ });
    
    const { data } = await axios.get( `/api/cities` );
   
    dispatch({
      type: CITIES_SUC,
      payload:data,
    });
  } catch (error) {
    dispatch({
      type: CITIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};