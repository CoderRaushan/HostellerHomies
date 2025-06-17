const ComplaintSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'hostel'
    },
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    date: {
        type: Date,
        default: Date.now
    },
    resolvedAt: {
        type: Date,
        default: null
    }
});

ComplaintSchema.index({ resolvedAt: 1 }, { expireAfterSeconds: 604800 });
