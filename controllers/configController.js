const userModel = require("../models/userModel");


const getUserList = async(req,res)=>{

const userList = await userModel.find();

res.status(200).send(userList)

}


module.exports = {
    getUserList
}