import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        duration: {type: Number, min: 0, max: 30},
        source: { type: String },
        preference: [{required: true, type:String}],
        description: {required: false, type: String },
        instructions: [{required: true, type: Object}],
        benefits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Benefit' }],
        symptoms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Symptom' }],
    }
)

const Activity  = mongoose.model('activity', ActivitySchema);
export default Activity;