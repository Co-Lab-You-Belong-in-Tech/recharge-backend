import Activity from '../models/Activity.js'

export async function getAllActivities(request, response){
    try {
        const result = await Activity.find().populate("benefits").populate("symptoms")
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getOneActivity(request, response){
    try {
        Activity.findById(request.params.id).populate("benefits").populate("symptoms")
        .then(activityFound => {
            if(!activityFound){
                return response.status(404).end()
            } return response.status(200).json(activityFound)
        })
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function postActivity(request, response) {
    try {
        const newActivity = await Activity.create(request.body);
        response.json(newActivity)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}