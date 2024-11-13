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
    date_from:{
        type:Date
    },
    date_to:{
        type:Date
    },
    file_name:{
       type:String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
