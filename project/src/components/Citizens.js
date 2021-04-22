import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { listGroups } from "../redux/groups/groupsAction";
import { listInfo } from "../redux/info/infoAction";
import { listLocations } from "../redux/location/locationsAction";

const Citizens = ( {children} ) => {
  const dispatch = useDispatch();
  const realCitizens = children.childsCollection.filter(cl => cl.childName) 
  
  const groupsData = useSelector( ( state ) => state.groups );
  const { loadingGR,  groups } = groupsData;

  const infoData = useSelector((state) => state.info);
  const { loading, info } = infoData;
  
  useEffect( () => {
    if ((!loadingGR && groups.length === 0) || (!loading && info.length === 0) ){
     
   batch( () => {
      dispatch( listGroups() );
      dispatch( listLocations() );
      dispatch( listInfo() );
   } )
  }
  }, [dispatch, info, loading, groups, loadingGR]);
  console.log(realCitizens, 22)
  console.log(info, 232)
  return (
    <div className="citizens_container">
      {!info && <h1>Sorry, something went wrong...</h1>}

      <ol>
        {info.length > 0 && realCitizens.map((citizen) => {
          const userInfo = info.find( ( inf ) => inf.id === citizen.childId );
          
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
