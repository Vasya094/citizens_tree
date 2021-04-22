import React from "react";
import Citizens from "./Citizens";
import { SecondTest } from "./Second";

export const First = ({ name, children, groups, size }) => {
  if (children.childsCollection[0].hierachyNumber - 1 === size) {
    return <Citizens key={name}  data={groups} children={children}  />;
  }
  return (
    <div className="first_list">
      <div className="first_list--header">
        <strong>{name}</strong>
      </div>
      <ul className="first_list--unordered_list">
        {children.childsCollection
          .filter((every) => !!every.childName)
          .map((chld) => (
            <li key={chld.childId} className="first_list--list_item">
              {" "}
              <h4>{chld.childName}</h4>
              <SecondTest
                name={chld.childName}
                size={size}
                key={chld.childName.split(" ")[0]}
                groups={groups}
              >
                {groups.find((gr) => gr.name === chld.childName)}
              </SecondTest>
            </li>
          ))}
      </ul>
    </div>
  );
};
