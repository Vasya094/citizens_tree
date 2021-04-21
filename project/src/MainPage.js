import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loa.js";
import Message from "./components/Messag.js";
import { batch } from "react-redux";
import { Link } from "react-router-dom";
import { listGroups } from "./redux/groups/groupsAction.js";
import { listLocations } from "./redux/location/locationsAction.js";
import { listInfo } from "./redux/info/infoAction.js";

function MainPage() {
  const dispatch = useDispatch();
  const groupsData = useSelector((state) => state.groups);
  const { loading, error, groups } = groupsData;
  const locationsData = useSelector((state) => state.locations);
  const { loadingLOC, errorLOC, locations } = locationsData;
  const deeping = 0;
  useEffect(() => {
    batch(() => {
      dispatch(listGroups());
      dispatch( listLocations() );
      dispatch( listInfo() )
      dispatch( listLocations() )
      
    });
  }, [dispatch]);
  return (
    <div>
      <div className="App">
        {loadingLOC || loading ? <Loader /> : ""}
        {errorLOC || error ? (
          <Message variant="danger">OOPS! something went wrong</Message>
        ) : (
          ""
        )}
        {locations.length > 0 && groups.length > 0 && (
          <h1 className="App--h1">Выберите локацию верхнего поряда</h1>
        )}
        <div className="App--link_container"> 
        {locations.length > 0 &&
          groups.length > 0 &&
          groups
            .find((item) => item.name === "UpOrder")
            .childsCollection.map((child) => (
              <div key={child.childId} className="Link--button_container">
                <Link
                  to={{
                    pathname: `/${locations[deeping].type}/${child.childId}`,
                    state: {
                      position: groups.find(
                        (item) => item.name === child.childName
                      ),
                      size: locations.length,
                      groups: groups,
                    },
                  }}
                >
                  <button className="link--button">
                    <span>{child.childName}</span>
                  </button>
                </Link>
              </div>
            ) )}
            </div>
      </div>
    </div>
  );
}

export default MainPage;
