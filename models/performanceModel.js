const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    feedback: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Performance', performanceSchema);
