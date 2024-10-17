const userModel = require("../models/userModel");

const updateStudent = async(req,res)=>{
    try {
        
     const data  = req.body

     await userModel.updateOne({_id:data.id},{$set:{courseCode:data.course,batchNo:data.batchNo}});
     res.status(200).send({success:true});
      

    } catch (error) {
     res.status(400).send({success:false});
        console.log(error.message);
        
    }
}


const updateStudentDetails = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}







module.exports = {
    updateStudent,
    updateStudentDetails
}