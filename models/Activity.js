import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        duration: {type: Number, min: 0, max: 30},
        source: { type: String },
        type: {required:true, type:String, enum : ['active', 'mental'], default: 'active'},
        description: {required: false, type: String },
        instructions: [{required: true, type: Object}],
        benefits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Benefit' }],
        symptoms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Symptom' }],
        preference: {required: false, type: Boolean, default: false},
    }
)

const Activity  = mongoose.model('activity', ActivitySchema);
export default Activity;