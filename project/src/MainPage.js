import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loa.js";
import Message from "./components/Messag.js";
import { batch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function MainPage() {
  const dispatch = useDispatch();
 
  const groupsData = useSelector((state) => state.groups);
  const { loading, error, groups } = groupsData;

  // useEffect( async () => {
  //   const { data } = await axios.get( `/api/groups` );
  //   console.log(data)
  // }, []);

  return (
    <div>
      <div className="App">
        {loading ? <Loader /> : ""}
        {error ? (
          <Message variant="danger">OOPS! something went wrong</Message>
        ) : (
          ""
        )}
        {groups && (
          <h1 className="App--h1">Выберите локацию верхнего поряда</h1>
        )}
        <div className="App--link_container">
          {groups.length > 0 &&
            groups
              .find((item) => item.name === "UpOrder")
              .childsCollection.map((child) => (
                <div key={child.childId} className="Link--button_container">
                  <Link
                    to={`/${child.childName.split(" ")[0]}/${child.childId}`}
                  >
                    <button className="link--button">
                      <span>{child.childName}</span>
                    </button>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
