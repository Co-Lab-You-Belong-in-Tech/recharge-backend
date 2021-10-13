import Router from 'express';

import {
    getFeedback,
} from "../controllers/feedback.js"

const feedbackRouter = Router()

feedbackRouter
    .route("/")
    .get(getFeedback)


export default feedbackRouter