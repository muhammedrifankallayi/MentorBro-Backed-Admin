const {Router} = require("express")
const adminRoute = Router()
const adminAuthController = require("../controllers/AdmiAuthController")
const configController = require("../controllers/configController")
const studentController = require("../controllers/studentController")
const courseController = require("../controllers/courseController")
const userController = require("../controllers/userAuthController")
const enqryController = require("../controllers/enquiryController")

const batchController = require("../controllers/batchController")


const middleWare = require("../middlewares/AuthAdminMiddleware")

// Enquiry

adminRoute.get("/getAllEnquiries",enqryController.getAllEnquiries)
adminRoute.post("/closeEnquiry",enqryController.closeEnquiry)



// Admin Auth
adminRoute.post("/login",adminAuthController.UserLogin);

//Config Controll
adminRoute.get("/getUserList",middleWare,configController.getUserList);
adminRoute.get("/blockUser",userController.blockUser);


//StudentControll

adminRoute.post("/updateStudent",studentController.updateStudent)
adminRoute.post("/updateStudentDetails",studentController.updateStudentDetails)
adminRoute.get("/getAllStudents",studentController.getStudents)

//Course
adminRoute.post("/saveCourse",courseController.saveCourse)
adminRoute.post("/updateourse",courseController.updateCourse)
adminRoute.post("/deleteCourse",courseController.deleteCourse)
adminRoute.get("/getAllCourseList",courseController.getAllCourseList)



//task management system




//Batch Management

adminRoute.post("/addBatch",batchController.saveBatch)
adminRoute.get("/getAllBatch",batchController.getAllBatch)
adminRoute.post("/updateBatch",batchController.updateBatch)
adminRoute.get("/getNextBatchNo",batchController.getNextBatchNo)





module.exports = adminRoute