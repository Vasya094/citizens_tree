import asyncHandler from "express-async-handler";
import City from "../models/cities-model.js";
import citiesAndCitizens from "../utils/citiesUtil.js";
import citiesOfCitizen from "../utils/oneCitizenInfoAdding.js";
import Citizen from "./../models/citizen-model.js";


const getInfo = asyncHandler(async (req, res) => {
  const citizens = await Citizen.find( {} );
  const cities = await City.find({});
  res.json(citiesAndCitizens(citizens, cities));
} );

const getCitizenInfoById = asyncHandler( async ( req, res ) => {
  const cities = await City.find({});
  const citizenWithOutInfo = await Citizen.findById(req.params.id);
  const citizen = citiesOfCitizen( citizenWithOutInfo, cities )
  console.log(citizen)
  if (citizen) {
    res.json(citizen);
  } else {
    throw new Error("User not found");
  }
} );

export { getInfo, getCitizenInfoById };
