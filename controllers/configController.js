const userModel = require("../models/userModel");


const getUserList = async(req,res)=>{

const userList = await userModel.find();

res.status(200).send(userList)

}

//Course

const getCourseList = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}



//Faculty

const facultyList = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}


const reviewList = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}


const statisticsList = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}



module.exports = {
    getUserList,
    getCourseList,
    facultyList,
    getCourseList,
    reviewList,
    statisticsList
}