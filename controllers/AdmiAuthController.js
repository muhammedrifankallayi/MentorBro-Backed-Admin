const userModel = require("../models/userModel")
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

//   const login = async (req, res) => {
//     try {
//         const user = await userModel.findOne({ email: req.body.username })
//         if (!user) {
//             return res
//                 .status(200).send({ message: 'User Does not exist', success: false })
//         }
//         const isMatch = await bcrypt.compare(req.body.password, user.password)
//         if (!isMatch) {
//             return res
//                 .status(200).send({ message: "Password is incorrect", success: false })
//         } else {
//             if (user.otp === 'isVerified') {
//                 const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
//                     expiresIn: "1d"
//                 })
//                 res.status(200).send({ message: "Login SuccessFull", success: true, data: token })
//             } else {
//                 res.status(200).send({ message: 'you are in Blocked', success: false })
//             }
//         }
//     } catch (error) {
//         res.status(500).send({ message: "Error logged in", success: false, error })
//     }
// }


  module.exports = {
    UserLogin
  }