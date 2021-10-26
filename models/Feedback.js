import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema(
    {
        mark: {required: false, type: Number, min: 0, max: 3},
        comment: {required: false, type: String},
        label: {required: false, type:String, enum : ['Needs Improvement (Tell us how)', 'Not helpful', 'Helpful', 'Awesome(Share!)'], default: 'Help'}
    }
)

const Feedback  = mongoose.model('feedback', FeedbackSchema);
export default Feedback;