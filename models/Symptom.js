import mongoose from 'mongoose';

const SymptomSchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        description: {required: false, type: String},
    }
)

const Symptom  = mongoose.model('symptom', SymptomSchema);
export default Symptom;