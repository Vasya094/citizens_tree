import asyncHandler from "express-async-handler";
import Location from "./../models/location-model.js";

const getLocations = asyncHandler(async (req, res) => {
  const locations = await Location.find({});
  res.json(locations);
});

export { getLocations };
