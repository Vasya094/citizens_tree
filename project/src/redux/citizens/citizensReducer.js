import { ADD_CITIZEN, CITIZENS_FAIL, CITIZENS_REQ, CITIZENS_SUC } from "./citizensTypes";

const initialState = []


export const citizensReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITIZEN:
      const citizens = action.payload;

      return [ ...state, citizens ]
      case CITIZENS_REQ:
        return { loading: true, citizens: [] };
      case CITIZENS_SUC:
        return {
          loading: false,
          citizens: action.payload,
          
        };
      case CITIZENS_FAIL:
        return { loading: false, error: action.payload };
    default:
      return state;
  }
};