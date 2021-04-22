import axios from "axios";

import {
  INFO_REQ,
  INFO_SUC,
  INFO_FAIL,
  CITIZEN_INFO_REQUEST,
  CITIZEN_INFO_SUCCESS,
  CITIZEN_INFO_FAIL,
} from "./infoTypes.js";


export const listInfo = () => async (dispatch) => {
  try {
    dispatch({ type: INFO_REQ });

    const { data } = await axios.get(`/api/info`);

    dispatch({
      type: INFO_SUC,
      payload: data,
    } );
    localStorage.setItem('info', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCitizenInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CITIZEN_INFO_REQUEST,
    } );  
    const { data } = await axios.get(`/api/info/${id}`);
    dispatch( {
      type: CITIZEN_INFO_SUCCESS,
      payload: data
    } )
 
  } catch ( error )
  {
    dispatch({
      type: CITIZEN_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
