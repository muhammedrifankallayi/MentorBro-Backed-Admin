const mongoose =  require("mongoose");

const courseWiseTask = new mongoose.Schema({
    week:{
        type:Number
    },
    task_name:{
        type:String
    },
    course_id:{
        type:String
    },
    task_file_path:{
        type:String
    },
    active:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model("course_wise_tasks",courseWiseTask)