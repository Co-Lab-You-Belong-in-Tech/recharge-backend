import Benefit from '../models/Benefit.js'

export async function getAllBenefits(request, response){
    try {
        const result = await Benefit.find()
        response.json(result)
    } catch(err) {
        response.status(500).json({message: error.message})
    }
}

export async function getOneBenefit(request, response){
    try {
        Benefit.findById(request.params.id)
        .then(benefitFound => {
            if(!benefitFound){
                return response.status(404).end()
            } return response.status(200).json(benefitFound)
        })
    } catch(error){
        response.status(500).json({ message: error.message})
    }
}

export async function postBenefit(request, response) {
    try {
        const newBenefit = await Benefit.create(request.body);
        response.json(newBenefit)
    } catch(error) {
        response.status(400).json({ message: error.message})
    }
}