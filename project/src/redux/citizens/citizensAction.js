import axios from "axios";

import { CITIZENS_FAIL, CITIZENS_REQ, CITIZENS_SUC } from "./citizensTypes";

export const listCitizens = () => async (dispatch) => {
  try {
    dispatch({ type: CITIZENS_REQ });
    
    const { data } = await axios.get( `/api/citizens` );
   
    dispatch({
      type: CITIZENS_SUC,
      payload:data,
    });
  } catch (error) {
    dispatch({
      type: CITIZENS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};