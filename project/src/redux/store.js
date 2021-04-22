import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { citizensReducer } from "./citizens/citizensReducer";
import { locationsReducer } from "./location/locationsReducer";
import { groupsReducer } from "./groups/groupsReducer";
import { enableBatching } from "./butcher";
import { citiesReducer } from "./cities/citiesReducer";
import { infoReducer } from "./info/infoReducer";

const reducer = combineReducers({
  cities: citiesReducer,
  citizens: citizensReducer,
  locations: locationsReducer,
  groups: groupsReducer,
  batching: enableBatching,
  info: infoReducer,
});

const info = localStorage.getItem("info")
  ? JSON.parse(localStorage.getItem("info"))
  : [];
const locations = localStorage.getItem("locations")
  ? JSON.parse(localStorage.getItem("locations"))
  : [];
const groups = localStorage.getItem("groups")
  ? JSON.parse(localStorage.getItem("groups"))
  : [];
// console.log(groups)
const initialState = {
  info: { loading: false, error: false, info:info },
  locations: {loading: false, error: false, locations: locations  },
  groups: {loadingGR: false, error: false,groups: groups}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
