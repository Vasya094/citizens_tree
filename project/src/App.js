import React from "react";
import { Route } from "react-router-dom";
import ChildComponent from "./components/ChildComponent.js";
import MainPage from "./MainPage.js";
import { useSelector } from "react-redux";

const App = () => {
  
  const locationsData = useSelector((state) => state.locations);
  const { locations } = locationsData;

  return (
    <div className="main_div main_div--continer">
      <Route path="/" render={() => <MainPage />} exact />
      {locations.length > 0 && (
        <Route
          path={`/${locations[0].type}/:id`}
          component={ChildComponent}
          exact
        />
      )}
    </div>
  );
};
export default App;
