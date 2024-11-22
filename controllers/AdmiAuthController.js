
const jwt = require('jsonwebtoken')
   require("dotenv").config()
  const UserLogin = async(req,res)=>{
    try {
        
    const data = req.body

    if(data?.username=="admin"&&data?.password=="123"){
      const token = jwt.sign({ username: data.username }, process.env.SECRET_KEY, {
        expiresIn: "1d",
    });
    
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
      const token = req.body.token;
  
      if (!token) {
        return res.status(401).send({ success: false, message: "Token is required" });
      }
  
      let verified;
      try {
        verified = jwt.verify(token, process.env.SECRET_KEY); 
      } catch (error) {
        return res.status(401).send({ success: false, message: "Authentication Failed" }); 
      }
  
      // Decode the token to check expiration
      const decoded = jwt.decode(token);
      if (decoded && decoded.exp) {
        const currentTime = Math.floor(Date.now() / 1000); 
  
        if (decoded.exp < currentTime) {
          return res.status(200).json({ success: false, message: "Token expired" });
        } else {
          return res.status(200).json({ success: true, message: "Token is valid" });
        }
      } else {
        return res.status(400).json({ success: false, message: "Invalid token structure" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  }



  module.exports = {
    UserLogin,
    checkAdminToken
  }