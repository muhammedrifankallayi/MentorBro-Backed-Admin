const studentModel = require("../models/studentModel");



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
        res.status(200).send({success:true,data})
       
        
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