const taskModel = require("../models/taskModel");
const performenceModel = require("../models/performanceModel")





const nextWeekTaskAssign = async(req,res)=>{
    try {
        
     const data =  req.body

     const Model = new taskModel(data)
     await Model.save()



    } catch (error) {
        console.log(error.message);
        
    }
}

const weeklyPerformanceAdd = async(req,res)=>{
    try {

        const data = req.body
        const Model = new  performenceModel(data);
       await Model.save()
        
    } catch (error) {
        console.log(error.message);
        
    }
}


module.exports = {
    nextWeekTaskAssign,
    weeklyPerformanceAdd
}
