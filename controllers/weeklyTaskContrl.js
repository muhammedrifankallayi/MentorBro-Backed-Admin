const taskModel = require("../models/taskModel");
const performenceModel = require("../models/performanceModel")

const nextWeekTaskAssign = async(req,res)=>{
    try {
        
     const data =  req.body

     const Model = new taskModel(data)
     await Model.save()

     res.status(200).send({success:true})


    } catch (error) {
        console.log(error.message);
        
    }
}

const weeklyPerformanceAdd = async(req,res)=>{
    try {

        const data = req.body
        const Model = new  performenceModel(data);
       await Model.save();
        
     res.status(200).send({success:true})

        
    } catch (error) {
        console.log(error.message);
        
    }
}


const getWeeklyTaskByUserId = async(req,res)=>{

try{
const id = req.query.id
    const data = await taskModel.find({studentId:id})
    res.status(200).send({{success:true})

    
}catch(error){
    
console.log(error.message)
res.status(400).send({success:false,error:error.message});
}


}


const getWeekTaskPerformanceByUserId = async(req,res)=>{

try{
    const id = req.query.id
    const data = await performenceModel.find({studentId:id})
    res.status(200).send({{success:true})

    
}catch(error){
console.log(error.message)
res.status(400).send({success:false,error:error.message});
}

}


module.exports = {
    nextWeekTaskAssign,
    weeklyPerformanceAdd,
    getWeeklyTaskByUserId,
    getWeekTaskPerformanceByUserId
}
