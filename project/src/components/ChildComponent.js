import React from "react";
import { Link } from "react-router-dom";


import { First } from "./First";


const ChildComponent = ( { location } ) => {

  return (
    <div className="child_div">
      <Link to="/"><img className="home-icon" src="https://img.icons8.com/ios-glyphs/60/000000/home.png" alt="homepage" /></Link>
      <h1 className="child_div--main_parent">{location.state.position.name}</h1>
      {location.state.position.childsCollection.map((collec) => (
        <First
          key={collec.childName.split(" ")[0]}
          size={location.state.size}
          name={collec.childName}
          groups={location.state.groups}
        >
          {location.state.groups.find((gr) => gr.name === collec.childName)}
        </First>
      ))}
    </div>
  );
};


export default ChildComponent;
