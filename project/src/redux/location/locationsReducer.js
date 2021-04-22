import {ADD_LOCATION,
  LOCATION_REQ,
  LOCATION_SUC,
  LOCATION_FAIL  } from "./locationsTypes";



export const locationsReducer = ( state = { locations: [] }, action ) => {
  debugger
  switch (action.type) {
      case LOCATION_REQ:
        return { loading: true, locations: [] };
      case LOCATION_SUC:
        return {
          loading: false,
          locations: action.payload,
          
        };
      case LOCATION_FAIL:
        return { loading: false, locations: state.locations };
    default:
      return state;
  }
};