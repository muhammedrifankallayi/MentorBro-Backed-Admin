
const jwt = require('jsonwebtoken')
const dotenv =     require("dotenv").config()
  const UserLogin = async(req,res)=>{
    try {
        
    const data = req.body
    if(data?.username=="admin"&&data?.password=="123"){
      const token = jwt.sign(data.username,process.env.SECRET_KEY, {
        expiresIn: "1h"
    })
        res.status(200).send({success:true,data:token});
        return
    }
    res.status(400).send("0");

    } catch (error) {
        console.log(error.message);
        
    }
  }

  const checkAdminToken = async(req,res)=>{
    try {



      const token  = req.body.token ;
   const verified = jwt.verify(token, SECRET_KEY);

   if(!verified){
    res.status(401).send({success:false,message:"Authentication Failed"})
   }


            const decoded = jwt.decode(token);
            
            
            if (decoded && decoded.exp) {
                const currentTime = Math.floor(Date.now() / 1000); 
               if(decoded.exp < currentTime){
                res.status(200).json({success:false})
               }else{
                return res.status(200).json({success:true});
               }
            }else{
              return res.status(200).json({success:false});
            }
           
      
    } catch (error) {
      console.log(error);
      
    }
  }



  module.exports = {
    UserLogin,
    checkAdminToken
  }