const {Router} = require("express")

const configController = require("../controllers/configController")
const enqryController = require("../controllers/enquiryController")
const mainRoute = Router()


mainRoute.get("/getCourses",configController.getCourseList)
mainRoute.get("/getFacultyList",configController.facultyList)
mainRoute.get("/getReviewList",configController.reviewList)
mainRoute.get("/getOvarallStatistics",configController.statisticsList)
mainRoute.post("/add-enquiry",enqryController.SaveEnquiry)






module.exports = mainRoute