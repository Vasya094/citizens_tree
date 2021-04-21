import {
  INFO_REQ,
  INFO_SUC,
  INFO_FAIL,
  CITIZEN_INFO_REQUEST,
  CITIZEN_INFO_SUCCESS,
  CITIZEN_INFO_FAIL,
} from "./infoTypes.js";



export const infoReducer = (state = [], action) => {
  switch (action.type) {
      case INFO_REQ:
        return { loading: true, info: [] };
      case INFO_SUC:
        return {
          loading: false,
          info: action.payload,
          
        };
      case INFO_FAIL:
        return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const citizenInfoReducer = (state = [], action) => {
  switch (action.type) {
      case CITIZEN_INFO_REQUEST:
        return { loading: true, citizenInfo: [] };
      case CITIZEN_INFO_SUCCESS:
        return {
          loading: false,
          citizenInfo: action.payload,
          
        };
      case CITIZEN_INFO_FAIL:
        return { loading: false, error: action.payload };
    default:
      return state;
  }
};