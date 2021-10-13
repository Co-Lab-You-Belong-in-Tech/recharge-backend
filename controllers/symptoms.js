import Symptom from '../models/Symptom.js'

export async function getAllSymptoms(request, response){
    try {
        const result = await Symptom.find()
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}
