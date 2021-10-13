import Feedback from '../models/Feedback.js'

export async function getFeedback(request, response){
    try {
        const result = await Feedback.find()
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}