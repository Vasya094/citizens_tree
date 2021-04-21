import asyncHandler from 'express-async-handler'
import getDataToGrouping from '../utils/utils.js';
import Citizen from "./../models/citizen-model.js";


const getGroups = asyncHandler(async (req, res) => {
  const citizens = await Citizen.find( {} )
  const groups = getDataToGrouping( citizens )
  res.json(groups)
} );




export { getGroups }