import {GROUPS_REQ,
  GROUPS_SUC,
  GROUPS_FAIL  } from "./groupsTypes";



export const groupsReducer = (state = {groups: []}, action) => {
  switch (action.type) {
      case GROUPS_REQ:
        return { loadingGR: true, groups: [] };
      case GROUPS_SUC:
      return {
  
        loadingGR: false,
          groups: action.payload,
          
        };
      case GROUPS_FAIL:
        return { loadingGR: false, error: action.payload };
    default:
      return state;
  }
};