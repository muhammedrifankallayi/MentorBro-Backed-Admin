
const jwt = require('jsonwebtoken')

  const UserLogin = async(req,res)=>{
    try {
        
    const data = req.body
    if(data?.username=="admin"&&data?.password=="123"){
      const token = jwt.sign({ id: data.username },data.password, {
        expiresIn: "1d"
    })
        res.status(200).send({success:true,data:token});
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