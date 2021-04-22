import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ChildComponent from "./components/ChildComponent.js";
import MainPage from "./MainPage.js";
import { batch, useDispatch, useSelector } from "react-redux";
import { listGroups } from "./redux/groups/groupsAction.js";
import { listLocations } from "./redux/location/locationsAction.js";
import { listInfo } from "./redux/info/infoAction.js";


const App = () => {
  const dispatch = useDispatch();

  const { loading, locations } = useSelector( ( state ) => state.locations );
  
  const {loadingGR, groups } = useSelector( ( state ) => state.groups );
  debugger
  console.log(groups, 1)
  console.log(locations, 2)
  useEffect( () => {
    if ((!loadingGR && groups.length === 0) || (!loading && locations.length === 0) ){
     debugger
   batch( () => {
      dispatch( listGroups() );
      dispatch( listLocations() );
      dispatch( listInfo() );
   } )
  }
  }, [dispatch, groups, locations, loadingGR,loading]);


  // const { loading, locations } = locationsData;
  return (
    <div className="main_div main_div--continer">
      <Route path="/" render={() => <MainPage />} exact />
      {locations.length > 0 && (
        <Route
          path={`/:upLocation/:id`}
          component={ChildComponent}
          exact
        />
      )}
    </div>
  );
};
export default App;
