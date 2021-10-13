import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import cors from 'cors';
import connectToDatabase from "./models/index.js";
import activityRouter from './routes/activities.js';
import benefitRouter from './routes/benefits.js';
import feedbackRouter from './routes/feedback.js';
import symptomRouter from './routes/symptoms.js';

const app = express()

const PORT = process.env.PORT || 8080;
app.use(express.json())
app.use(cors())
app.get("/", (req, res)=> {
    res.send("Hello World")
})


app.use("/activities", activityRouter)

app.use("/benefits", benefitRouter)

app.use("/feedback", feedbackRouter)

app.use("/symptoms", symptomRouter)




connectToDatabase().then((err) => {
    if(err){
        return console.log(err)
    }
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})