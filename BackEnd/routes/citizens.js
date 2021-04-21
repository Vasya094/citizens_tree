import express from 'express'
import { getCitizens } from './../controllers/citizensController.js'
const router = express.Router()

router.route("/").get(getCitizens);


export default router;
