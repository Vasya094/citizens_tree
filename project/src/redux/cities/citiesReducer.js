import { CITIES_REQ,
  CITIES_SUC,
  CITIES_FAIL} from "./citiesTypes";





export const citiesReducer = (state = [], action) => {
  switch (action.type) {
      case CITIES_REQ:
        return { loading: true, cities: [] };
      case CITIES_SUC:
        return {
          loading: false,
          cities: action.payload,
          
        };
      case CITIES_FAIL:
        return { loading: false, error: action.payload };
    default:
      return state;
  }
};