const {Router} = require("express")
const userAuthController = require("../controllers/userAuthController")
const configController = require("../controllers/configController")
const mainRoute = Router()


mainRoute.post("/userRegister",userAuthController.userRegister);
mainRoute.get("/getCourses",configController.getCourseList)
mainRoute.get("/getFacultyList",configController.facultyList)
mainRoute.get("/getReviewList",configController.reviewList)
mainRoute.get("/getOvarallStatistics",configController.statisticsList)


module.exports = mainRoute