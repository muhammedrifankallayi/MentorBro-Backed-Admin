const {Router} = require("express")
const userAuthController = require("../controllers/userAuthController")
const mainRoute = Router()


mainRoute.post("/userRegister",userAuthController.userRegister);



module.exports = mainRoute