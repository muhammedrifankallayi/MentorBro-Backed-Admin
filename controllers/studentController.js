const userModel = require("../models/userModel");

const updateStudent = async(req,res)=>{
    try {
        
     const data  = req.body

     await userModel.updateOne(
        {_id:data.id},
        {$set:{courseCode:data.course,batchNo:data.batchNo,isStudent:true}}
    );
     res.status(200).send({success:true});
    
    } catch (error) {
     res.status(400).send({success:false});
        console.log(error.message);
        
    }
}

const getStudents = async(req,res)=>{
    try {

        const studentData = await userModel.find({isStudent:true})
        res.status(200).send({success:true,data:studentData})
        
    } catch (error) {

        res.status(400).send({success:false});
        console.log(error.message);
        
    }
}


const updateStudentDetails = async(req,res)=>{
    try {

       await userModel.updateOne({
        _id:req.body._id
       },{
        $set:{batch:req.body.batchNo,course:req.body.course,isStudent:true}
       }).then(()=>{
        res.status(200).send({success:true});
       },
    (err)=>{
        res.status(400).send({success:false,error:err})
    }) 
        
    } catch (error) {
        console.log(error.message);
        res.status(400).send({error:error.message})
        
    }
}







module.exports = {
    updateStudent,
    updateStudentDetails,
    getStudents
}