import Router from 'express';

import {
    getFeedback,
    postFeedback
} from "../controllers/feedback.js"

const feedbackRouter = Router()

feedbackRouter
    .route("/")
    .get(getFeedback)

feedbackRouter
    .route("/")
    .post(postFeedback)
export default feedbackRouter