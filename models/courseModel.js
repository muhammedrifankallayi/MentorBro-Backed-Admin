const mongoose = require("mongoose");


const courseModel = new mongoose.Schema({

course:{
    type:String,
    required:true
},
shortCode:{
    type:String,
    required:true
},
duration:{
type:String
},
fees:{
    type:Number
}
},{
    timestamps:true
})

module.exports = mongoose.model("courses",courseModel); 