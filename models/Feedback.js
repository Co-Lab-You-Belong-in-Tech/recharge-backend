import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema(
    {
        mark: {required: false, type: Number, min: 1, max: 5},
        comment: {required: false, type: String},
    }
)

const Feedback  = mongoose.model('feedback', FeedbackSchema);
export default Feedback;