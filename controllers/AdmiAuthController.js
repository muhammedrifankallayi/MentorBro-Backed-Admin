const userModel = require("../models/userModel")


  const UserLogin = async(req,res)=>{
    try {
        
    const data = req.body
    

    if(data?.username=="admin"&&data?.password=="123"){
        res.status(200).send("1");
        return
    }
    res.status(400).send("0");

    } catch (error) {
        console.log(error.message);
        
    }
  }


  module.exports = {
    UserLogin
  }