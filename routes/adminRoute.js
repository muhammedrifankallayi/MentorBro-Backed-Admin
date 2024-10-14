const {Router} = require("express")
const adminRoute = Router()
const adminAuthController = require("../controllers/AdmiAuthController")


adminRoute.post("/login",adminAuthController.UserLogin);


module.exports = adminRoute