const mongoose = require("mongoose");


const courseModel = new mongoose.Schema({

course:{
    type:String,
    required:true
},
shortCode:{
    type:String,
},
duration:{
type:String
},
fees:{
    type:Number
},
description:{
type:String
},
isPublished:{
   type:Boolean,
   default:false
},
delete:{
    type:Boolean,
    default:false
},
payType:{
    type:Number
}
},{
    timestamps:true
})

module.exports = mongoose.model("courses",courseModel); 