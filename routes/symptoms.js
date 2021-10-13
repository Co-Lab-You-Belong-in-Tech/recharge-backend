import Router from 'express';

import {
    getAllSymptoms,
} from "../controllers/symptoms.js"

const symptomRouter = Router()

symptomRouter
    .route("/")
    .get(getAllSymptoms)


export default symptomRouter