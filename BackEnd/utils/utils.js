import _ from "lodash";

const setUniqueIdForEveryLocation = (citizenstData) => {
  let loopedLocations = {};
  citizenstData.map((citizen) => {
    for (let i = 0; i < citizen.groups.length + 1; i++) {
      if (citizen.groups[i - 1] !== undefined) {
        if (loopedLocations[citizen.groups[i - 1].name] === undefined) {
          loopedLocations[citizen.groups[i - 1].name] =
            citizen.groups[i - 1]._id;
        }
      }
    }
  });

  return loopedLocations;
};

const groupParentAndChilds = (data) => {
  let result = _(data)
    .groupBy("name")
    .map((pricing, name) => ({
      name,
      childsCollection: _.map(
        pricing,
        _.partialRight(_.pick, ["childName", "childId", "hierachyNumber"])
      ),
    }))
    .value();
  return result;
};

const itog = (groupedData) => {
  let iTog = [];
  groupedData.map((loc) => {
    let obj = {};

    for (var i = 0, len = loc.childsCollection.length; i < len; i++) {
      obj[loc.childsCollection[i]["childName"]] = loc.childsCollection[i];
    }
    loc.childsCollection = new Array();
    for (var key in obj) {
      loc.childsCollection.push(obj[key]);
    }
    iTog.push(loc);
  });
  return iTog;
};

const getDataToGrouping = (data) => {
  const dataToGrouping = [];
  const uniqueIds = setUniqueIdForEveryLocation(data);
  data.map((citizen) => {
    for (let i = 0; i < citizen.groups.length + 1; i++) {
      if (citizen.groups.length === i) {
        let nameToAdd = citizen.groups[i - 1].name;
        let childNameToAdd = citizen.name;
        let childIdAdd = citizen._id;
        let itemToAdd = {
          name: nameToAdd,
          hierachyNumber: i + 1,
          childName: childNameToAdd,
          childId: childIdAdd,
        };

        dataToGrouping.push(itemToAdd);
      }
      let nameToAdd = citizen.groups[i - 1]
        ? citizen.groups[i - 1].name
        : "UpOrder";
      let childNameToAdd = citizen.groups[i] ? citizen.groups[i].name : null;
      let childIdAdd = uniqueIds[childNameToAdd];

      let itemToAdd = {
        name: nameToAdd,
        hierachyNumber: i + 1,
        childName: childNameToAdd,
        childId: childIdAdd,
      };
      dataToGrouping.push(itemToAdd);
    }
  });
  const groupedData = groupParentAndChilds(dataToGrouping);
  return itog(groupedData);
};

export default getDataToGrouping;
