import asyncHandler from "express-async-handler";
import City from "../models/cities-model.js";


const getCities = asyncHandler(async (req, res) => {
  const cities = await City.find({});
  res.json(cities);
});

export { getCities };