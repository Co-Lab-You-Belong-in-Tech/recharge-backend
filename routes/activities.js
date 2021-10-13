import Router from 'express';

import {
    getAllActivities,
    getOneActivity,
} from "../controllers/activities.js"

const activityRouter = Router()

activityRouter
    .route("/")
    .get(getAllActivities)

activityRouter
    .route("/:id")
    .get(getOneActivity)

export default activityRouter