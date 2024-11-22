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
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'course_wise_tasks',
        required: true
    },
    remarks: {
        type: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
   
  task_repeat:{
    type:Number,
    default:0
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
