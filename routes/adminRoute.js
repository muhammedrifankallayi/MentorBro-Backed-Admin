const {Router} = require("express")
const adminRoute = Router()
const adminAuthController = require("../controllers/AdmiAuthController")
const configController = require("../controllers/configController")
const studentController = require("../controllers/studentController")

// Admin Auth
adminRoute.post("/login",adminAuthController.UserLogin);

//Config Controll
adminRoute.get("/getUserList",configController.getUserList);

//StudentControll

adminRoute.post("/updateStudent",studentController.updateStudent)


module.exports = adminRoute