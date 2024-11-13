const mongoose = require("mongoose");


const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
  type:String,
  required:true
    },
    mobile:{
        type:Number
    },
    address:{
        type:String
    },
    batchId:{
        type:String
    },
    courseId:{
        type:String
    },
    joinDate:{
        type:String
    },
    education:{
        type:String
    },
    current_week:{
        type:Number,
        default:0
    },
   weekId:{
    type:String
   }
})


module.exports = mongoose.model("students",userModel);