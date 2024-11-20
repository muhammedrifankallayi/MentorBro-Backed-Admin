const {Router} = require("express")
const adminRoute = Router()
const adminAuthController = require("../controllers/AdmiAuthController")
const configController = require("../controllers/configController")
const studentController = require("../controllers/studentController")
const courseController = require("../controllers/courseController")
const enqryController = require("../controllers/enquiryController")
const weeklyTaskController = require("../controllers/weeklyTaskContrl")
const facultyController = require("../controllers/facultyController")
const batchController = require("../controllers/batchController")


const middleWare = require("../middlewares/AuthAdminMiddleware")
const multer = require("../middlewares/multer")



// Enquiry

adminRoute.get("/getAllEnquiries",enqryController.getAllEnquiries)
adminRoute.post("/closeEnquiry",enqryController.closeEnquiry)



// Admin Auth
adminRoute.post("/login",adminAuthController.UserLogin);





//StudentControll
adminRoute.post("/saveStudent",studentController.saveStudent)
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



// Faculty

adminRoute.post("/saveFaculty",facultyController.saveFaculty);
adminRoute.post("/updateFaculty",facultyController.updateFaculty);
adminRoute.post("/deleteFaculty",facultyController.deleteFaculty);
adminRoute.get("/getAllFaculties",facultyController.getAllFaculties)


// weekly Task Management

adminRoute.get("/getTaskPerformanceListByUser",weeklyTaskController.getWeekTaskPerformanceByUserId)
adminRoute.get("/getNextWeekByStudent",weeklyTaskController.studentNextWeekFind)
adminRoute.post("/saveTask",multer.single("file"),weeklyTaskController.saveTask)

// couser wise task 

adminRoute.post("/saveCourseTask",multer.single('file'),weeklyTaskController.saveCourseWiseTask) ;
adminRoute.post("/upadteCourseTask",weeklyTaskController.updateCourseWiseTask) ;
adminRoute.post("/getCourseWiseTask",weeklyTaskController.getTaskCourseWise) ;
adminRoute.get("/getNextWeekCourseTask/:id",weeklyTaskController.getWeekForCouserWiseTask)


// Token Expire check

adminRoute.post("/checkToken",adminAuthController.checkAdminToken)


module.exports = adminRoute;