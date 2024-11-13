const studentModel = require("../models/studentModel");
const courseModel = require("../models/courseModel");
const batchModel = require("../models/batchModel");



const saveStudent = async(req,res)=>{
    try {
        
        const data  = req.body

    const model = new studentModel(data)
    await model.save()
    .then(()=>{
        res.status(200).send({success:true})
    })


    } catch (error) {
        console.log(error.message);
        
    }
}





const updateStudent = async(req,res)=>{
    try {
        
 
    
    } catch (error) {
     res.status(400).send({success:false});
        console.log(error.message);
        
    }
}

const getStudents = async(req,res)=>{
    try {

      const data =   await studentModel.find();

      const enrichedData = await Promise.all(
        data.map(async (student) => {
          const course = await courseModel.findById(student.courseId);
          const batch = await batchModel.findById(student.batchId);
      
          return {
            ...student.toObject(), 
           course: course.course, 
           batch: batch.batchNo,  
           courseId:course._id,
           batchId:batch._id
          };
        })
      );

        res.status(200).send({success:true,data:enrichedData})
       
        
    } catch (error) {

        res.status(400).send({success:false});
        console.log(error.message);
        
    }
}


const updateStudentDetails = async(req,res)=>{
    try {

      
        
    } catch (error) {
        console.log(error.message);
        res.status(400).send({error:error.message})
        
    }
}







module.exports = {
    updateStudent,
    updateStudentDetails,
    getStudents,
    saveStudent
}