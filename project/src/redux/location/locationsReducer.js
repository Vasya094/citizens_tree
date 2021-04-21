import {ADD_LOCATION,
  LOCATION_REQ,
  LOCATION_SUC,
  LOCATION_FAIL  } from "./locationsTypes";



export const locationsReducer = (state = {locations: []}, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      const locations = action.payload;

      return [ ...state, locations ]
      case LOCATION_REQ:
        return { loading: true, locations: [] };
      case LOCATION_SUC:
        return {
          loading: false,
          locations: action.payload,
          
        };
      case LOCATION_FAIL:
        return { loading: false, error: action.payload };
    default:
      return state;
  }
};