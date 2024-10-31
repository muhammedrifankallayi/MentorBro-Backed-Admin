const mongoose = require("mongoose");


const batchModel = new mongoose.Schema({
    batchNo:{
        type:Number,
        required:true
    },
    noOfStudents:{
        type:Number,
        default:0
    },
    startDate:{
        type:Date
    },
    duration:{
        type:Number,
        default:0
    },
    currentStatus:{
        type:String,
        default:"Pending"
    },
    isClosed:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model("batch",batchModel);