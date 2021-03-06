import axios from "axios";
import {GROUPS_REQ,
  GROUPS_SUC,
  GROUPS_FAIL  } from "./groupsTypes";

export const listGroups = () => async (dispatch) => {
  try {
    dispatch({ type: GROUPS_REQ });
    
    const { data } = await axios.get( `/api/groups` );
    
    dispatch({
      type: GROUPS_SUC,
      payload:data,
    } );
    localStorage.setItem('groups', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: GROUPS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};