const mongoose = require("mongoose");


const batchModel = new mongoose.Schema({
    batchNo:{
        trype:Number,
        required:true
    },
    noOfStudents:{
        type:Number,
    },
    startDate:{
        type:Date
    },
    duration:{
        type:Number
    },
    currentStatus:{
        type:String
    },
    isClosed:{
        type:Boolean
    }
},{
    timestamps:true
})

module.exports = mongoose.model("batch",batchModel);