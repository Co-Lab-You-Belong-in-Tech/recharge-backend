import Router from 'express';

import {
    getAllActivities,
    getOneActivity,
    postActivity
} from "../controllers/activities.js"

const activityRouter = Router()

activityRouter
    .route("/")
    .get(getAllActivities)
    .post(postActivity)

activityRouter
    .route("/:id")
    .get(getOneActivity)

export default activityRouter