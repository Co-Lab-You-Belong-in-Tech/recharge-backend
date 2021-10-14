import Router from 'express';

import {
    getAllSymptoms,
    postSymptom
} from "../controllers/symptoms.js"

const symptomRouter = Router()

symptomRouter
    .route("/")
    .get(getAllSymptoms)
    .post(postSymptom)


export default symptomRouter