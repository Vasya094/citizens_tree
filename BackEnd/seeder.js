import dotenv from "dotenv";
import connectDB from "./config/db.js";
import citizens from "./data/citizens.js";
import cities from "./data/cities.js";
import Citizen from "./models/citizen-model.js";
import Location from "./models/location-model.js";
import City from "./models/cities-model.js";



dotenv.config();

connectDB();


const getReadyLocationsToDb = ( citizens ) => {
  const locationToDB = []
  citizens[0].groups.map(group => locationToDB.push({type: group.type}))
  
  return locationToDB
}


const importData = async () => {
  try {
    await Citizen.deleteMany();
    await Location.deleteMany();
    await City.deleteMany();

    const locations = getReadyLocationsToDb(citizens)

    await Citizen.insertMany(citizens);
    await Location.insertMany( locations ,  {ordered: true});
    await City.insertMany(cities);
  

    console.log( "Data imported!!!");
    process.exit();
  } catch (error) {
    console.error(`${error}!!`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Citizen.deleteMany();
    await Location.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
