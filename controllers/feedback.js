import Feedback from '../models/Feedback.js'

export async function getFeedback(request, response){
    try {
        const result = await Feedback.find()
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}
export async function postFeedback(request, response) {
    try {
        const newFeedback = await Feedback.create(request.body);
        response.json(newFeedback)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}