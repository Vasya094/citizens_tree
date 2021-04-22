import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listGroups } from "../redux/groups/groupsAction";
import { listInfo } from "../redux/info/infoAction";
import { listLocations } from "../redux/location/locationsAction";

import { First } from "./First";
import Loader from "./Loa";

const ChildComponent = (props) => {
  const dispatch = useDispatch();

  const groupsData = useSelector((state) => state.groups);
  const { loadingGR, groups } = groupsData;

  const { loading, locations } = useSelector((state) => state.locations);
  const cityName = props.match.params.upLocation;
  const cityData = groups.find((gr) => gr.name.split(" ")[0] === cityName);
  useEffect(() => {
    if (
      (!loadingGR && groups.length === 0) ||
      (!loading && locations.length === 0)
    ) {
      debugger;
      batch(() => {
        dispatch(listGroups());
        dispatch(listLocations());
        dispatch(listInfo());
      });
    }
  }, [dispatch, groups, loading, locations, loadingGR]);

  return (
    <div className="child_div">
      <Link to="/">
        <img
          className="home-icon"
          src="https://img.icons8.com/ios-glyphs/60/000000/home.png"
          alt="homepage"
        />
      </Link>
      {(loading || loadingGR) && <Loader />}

      {cityData && <h1 className="child_div--main_parent">{cityData.name}</h1>}
      {cityData &&
        cityData.childsCollection.map((collec) => {
          return (
            <First
              key={collec.childName.split(" ")[0]}
              size={locations.length}
              name={collec.childName}
              groups={groups}
            >
              {groups.find((gr) => gr.name === collec.childName)}
            </First>
          );
        })}
    </div>
  );
};

export default ChildComponent;
