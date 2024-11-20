const taskModel = require("../models/taskModel");
const performenceModel = require("../models/performanceModel")
const userModel = require("../models/studentModel")
const TaskCouserWise = require("../models/couserTaskModel");

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
   // updating user with latest week
   await  userModel.findOneAndUpdate({_id:result.studentId},{$set:{current_week:result.week}})
   // creating performce model to remark the performance of the week....
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



//     course wise task save ..........


const saveCourseWiseTask = async(req,res)=>{
    try {

   const _data = JSON.parse(req.body.data);
   const filename = req.file.path ;


   const body = {
    ..._data,
    task_file_path:filename
}

   const _model = new TaskCouserWise(body) ;
   await _model.save().then((data)=>{
    res.status(200).json({success:true,data});
   })

        
    } catch (error) {
        console.log(error.message);
        
    }
}

const  updateCourseWiseTask =  async(req,res)=>{
    try {
        
const _data = req.body ;
await TaskCouserWise.findOneAndUpdate({_id:data._id},{$set:_data})
.then((data)=>{
    res.status(200).send({success:true,data})
})

    } catch (error) {
        console.log(error);
        
    }
}

const getTaskCourseWise = async(req,res)=>{
    try {
    
      const task_data = await TaskCouserWise.find() ;
      
      if(req.query.course_id){
     const data  =   task_data.filter(x=>x.course_id==req.query.course_id);
     res.status(200).json({success:true,data})
      }else{
     res.status(200).json({success:true,data:task_data})
      }

        
    } catch (error) {
        console.log(error.message);
        
    }
}

const getWeekForCouserWiseTask = async(req,res)=>{
    try {
        
        const course_id = req.params.id ;
        const _data = await TaskCouserWise.find({course_id:course_id});
        const Week = _data.length+1
        res.status(200).json({success:true,data:Week});


    } catch (error) {
        console.log(error.message);
        
    }
}







module.exports = {
    saveTask,
    weeklyPerformanceAdd,
    getWeeklyTaskByUserId,
    getWeekTaskPerformanceByUserId,
    studentNextWeekFind,
    saveCourseWiseTask,
    updateCourseWiseTask,
    getTaskCourseWise,
    getWeekForCouserWiseTask
}
