const userModel = require("../models/userModel")




const userRegister = async(req,res)=>{
    try {
        const data = req.body 
        console.log(data);
        
        const Model = new userModel(data);
        await Model.save().then(()=>{
            res.status(200).send({ success: true, message: "User registered successfully" });
        })
       
    } catch (error) {
        console.log(error.message);
        
    }
}



const blockUser = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}




module.exports = {
    userRegister,
    blockUser
}