import Router from 'express';

import {
    getAllBenefits,
    getOneBenefit,
} from "../controllers/benefits.js"

const benefitRouter = Router()

benefitRouter
    .route("/")
    .get(getAllBenefits)

benefitRouter
    .route("/:id")
    .get(getOneBenefit)

export default benefitRouter