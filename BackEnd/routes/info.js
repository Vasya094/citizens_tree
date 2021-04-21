import express from 'express'
import { getCitizenInfoById, getInfo } from '../controllers/infoCitiesController.js';
const router = express.Router()

router.route("/").get(getInfo);
router.route("/:id").get(getCitizenInfoById);


export default router;