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

const info = localStorage.getItem("citizensInfo")
  ? JSON.parse(localStorage.getItem("citizensInfo"))
  : [];
const locations = localStorage.getItem("locationsInfo")
  ? JSON.parse(localStorage.getItem("locationsInfo"))
  : [];

const initialState = {
  info: { loading: false, error: false, info },
  locations: { locations },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
