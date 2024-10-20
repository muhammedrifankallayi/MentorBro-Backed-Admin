const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
