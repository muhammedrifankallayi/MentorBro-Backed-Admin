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
    remarks: {
        type: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
   
    file_name:{
       type:String
    },
    course_task_id:{
        type:String
    },
    task_completed_date:{
        type:Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
