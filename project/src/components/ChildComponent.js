import React, { useEffect } from "react";
import { batch, useDispatch, useSelector, useStore } from "react-redux";
import { Link } from "react-router-dom";


import { First } from "./First";


const ChildComponent = ( props ) => {
 
  const groupsData = useSelector( ( state ) => state.groups );
  
  const { loading, error, groups } = groupsData;
  const { loading1, locations } = useSelector( ( state ) => state.locations );
  
  
  const cityName = props.match.params.upLocation
  const cityData = groups.find(gr => gr.name.split(' ')[0] === cityName)

  console.log(cityData, 3)
  return (
    <div className="child_div">
      <Link to="/"><img className="home-icon" src="https://img.icons8.com/ios-glyphs/60/000000/home.png" alt="homepage" /></Link>
      <h1 className="child_div--main_parent">{cityData.name}</h1>
      {cityData.childsCollection.map( ( collec ) => {
       
        return(
        <First
          key={collec.childName.split(" ")[0]}
          size={locations.length}
          name={collec.childName}
          groups={groups}
        >
          {groups.find((gr) => gr.name === collec.childName)}
        </First>
      )})} 
    </div>
  );
};


export default ChildComponent;
