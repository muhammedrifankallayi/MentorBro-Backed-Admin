const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    }
,
qualification:{
    type:String
},

    isAdmin:{
        type:Number,
        default:0
    },
    isBlocked:{
        type:Number,
        default:0
    },
    isStudent:{
        type:Number,
        default:0
    },
    courseCode:{
        type:Number
    },
    batchNo:{
        type:Number
    }
},{
    timestamps:true
})

module.exports = mongoose.model("userModel",userSchema);