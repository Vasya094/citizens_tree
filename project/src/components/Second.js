import React from "react";
import Citizens from "./Citizens";
import { First } from "./First";

export const SecondTest = ({ name, children, groups, size }) => {
  if (children.childsCollection[0].hierachyNumber - 1 === size) {
    return <Citizens data={children.childsCollection.filter((evertC) => evertC.childName)} />;
  }
  return (
    <div className="Second_container">
     {name !== children.name && <h3>
        <i>{name}</i>
      </h3>}
      <ul>
        {children.childsCollection.map((chld) => (
          <li className="Second_container--list_item">
            {" "}
            <h4>{chld.childName}</h4>
            <First
              name={chld.childName}
              size={size}
              key={chld.childName.split(" ")[0]}
              groups={groups}
            >
              {groups.find((gr) => gr.name === chld.childName)}
            </First>
          </li>
        ))}
      </ul>
    </div>
  );
};
