import mongoose from 'mongoose';

const BenefitSchema = new mongoose.Schema(
    {
        name: {required: true, type: String},
        description: {required: false, type: String},
    }
)

const Benefit  = mongoose.model('Benefit', BenefitSchema);
export default Benefit;