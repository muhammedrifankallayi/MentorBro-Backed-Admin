const mongoose = require("mongoose")



const EnquirySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        require:true
    },
    completed:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})



module.exports = mongoose.model("Enquires",EnquirySchema);