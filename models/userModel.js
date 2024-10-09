const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Number,
        default:0
    },
    isBlocked:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

module.exports = mongoose.model("userModel",userSchema);