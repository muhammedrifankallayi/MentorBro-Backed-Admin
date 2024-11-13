const mongoose = require("mongoose");


const facultySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    qualification:{
        type:String
    },
    salary:{
        type:String
    },
    delete:{
        type:Boolean,
        default:false
    },
    join_date:{
        type:Date
    }
},{
    timestamps:true
})



module.exports =  mongoose.model("faculty",facultySchema)