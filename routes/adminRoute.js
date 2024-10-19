const {Router} = require("express")
const adminRoute = Router()
const adminAuthController = require("../controllers/AdmiAuthController")
const configController = require("../controllers/configController")
const studentController = require("../controllers/studentController")
const courseController = require("../controllers/courseController")
const userController = require("../controllers/userAuthController")

// Admin Auth
adminRoute.post("/login",adminAuthController.UserLogin);

//Config Controll
adminRoute.get("/getUserList",configController.getUserList);
adminRoute.get("/blockUser",userController.blockUser);


//StudentControll

adminRoute.post("/updateStudent",studentController.updateStudent)
adminRoute.post("/updateStudentDetails",studentController.updateStudentDetails)

//Course
adminRoute.post("/saveCourse",courseController.saveCourse)
adminRoute.post("/updateourse",courseController.updateCourse)
adminRoute.post("/deleteCourse",courseController.deleteCourse)



//task management system



module.exports = adminRoute