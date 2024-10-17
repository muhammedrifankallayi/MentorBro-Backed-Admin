const mongoose = require("mongoose");

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
    batch: [{
        batchNo: {
            type: String,
            required: true
        },
        joinDate: {
            type: Date,
            required: true
        },
        leaveDate: {
            type: Date
        }
    }]
},{
    timestamps: true
});

module.exports = mongoose.model("userModel", userSchema);
