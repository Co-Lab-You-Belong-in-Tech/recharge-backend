import Router from 'express';

import {
    getAllBenefits,
    getOneBenefit,
    postBenefit
} from "../controllers/benefits.js"

const benefitRouter = Router()

benefitRouter
    .route("/")
    .get(getAllBenefits)
    .post(postBenefit)

benefitRouter
    .route("/:id")
    .get(getOneBenefit)

export default benefitRouter