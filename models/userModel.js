const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
    week: {
        type: Number, // e.g., 1 for Week 1, 2 for Week 2
        required: true
    },
    score: {
        type: Number, // e.g., percentage or grade
        required: true
    },
    feedback: {
        type: String, // feedback on the performance
    }
});

const taskSchema = new mongoose.Schema({
    week: {
        type: Number, // e.g., 1 for Week 1, 2 for Week 2
        required: true
    },
    taskName: {
        type: String, // name of the task
        required: true
    },
    description: {
        type: String, // task details
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});




const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: Number
    },
    qualification:{
        type: String
    },
    isAdmin:{
        type: Number,
        default: 0
    },
    isBlocked:{
        type: Number,
        default: 0
    },
    isStudent:{
        type: Number,
        default: 0
    },
    course: [{
        courseCode: {
            type: String,
            required: true
        },
        joinDate: {
            type: Date,
            required: true
        },
        completionDate: {
            type: Date
        }
    }],
    batch: {
        type:{
            type:String
        }
    },
    currentWeek:{
        type:Number,
        default:0
    }
},{
    timestamps: true
});

module.exports = mongoose.model("userModel", userSchema);
