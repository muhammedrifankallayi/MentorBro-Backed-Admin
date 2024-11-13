const taskModel = require("../models/taskModel");
const performenceModel = require("../models/performanceModel")

const saveTask = async(req,res)=>{
    try {
        const file = req.file;
        const taskData = JSON.parse(req.body.data);

        const data = {...taskData,file_name:file.path}

     const Model = new taskModel(data)
     await Model.save().then(async(result)=>{

const perfomData = new performenceModel({
    studentId:result.studentId,
    taskId:result._id,
    week:result.week
})
    await perfomData.save().then(()=> res.status(200).send({success:true,data:result}))

       
     }).catch((err)=>{
        res.status(500).send({success:false,err})
     })

  


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
    res.status(200).send({success:true})

    
}catch(error){
    
console.log(error.message)
res.status(400).send({success:false,error:error.message});
}


}


const getWeekTaskPerformanceByUserId = async(req,res)=>{

try{
    const id = req.query.id
    const data = await performenceModel.find({studentId:id})
    res.status(200).send({success:true,data})

    
}catch(error){
console.log(error.message)
res.status(400).send({success:false,error:error.message});
}

}


const studentNextWeekFind  = async(req,res)=>{
    try {

       const id = req.query.id ; 

       const weekData = await taskModel.find({studentId:id});
       const nextWeek = weekData.length+1 ;
       res.status(200).send({success:true,data:nextWeek});
        
    } catch (error) {
        console.log(error);
        
    }
}







module.exports = {
    saveTask,
    weeklyPerformanceAdd,
    getWeeklyTaskByUserId,
    getWeekTaskPerformanceByUserId,
    studentNextWeekFind
}
