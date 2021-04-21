import asyncHandler from "express-async-handler";
import Citizen from "./../models/citizen-model.js";

const getCitizens = asyncHandler(async (req, res) => {
  const citizens = await Citizen.find({});
  res.json(citizens);
});

export { getCitizens };
