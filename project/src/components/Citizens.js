import React from "react";
import { useSelector } from "react-redux";

const Citizens = ({ data }) => {
  const infoData = useSelector((state) => state.info);
  const { error, info } = infoData;

  return (
    <div className="citizens_container">
      {error && <h1>Sorry, something went wrong...</h1>}

      <ol>
        {data.map((citizen) => {
          const userInfo = info.find((inf) => inf.id === citizen.childId);
          return (
            <li className="ordered_list--item" key={citizen.childId}>
              <strong className="strong">
                <i className="citizens_container-italic">{citizen.childName}</i>
                <span className="strong--tooltiptext">
                  {userInfo.cityInfo.name}, {userInfo.cityInfo.data} жителей
                </span>
              </strong>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Citizens;
