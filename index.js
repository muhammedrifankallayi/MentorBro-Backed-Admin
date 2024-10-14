const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors = require('cors');
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const userRoute = require("./routes/mainRoute");
const adminRoute = require("./routes/adminRoute");



app.use(cors({origin:"*"}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())

app.use('/api/Auth',userRoute)
app.use('/api/Admin',adminRoute)


// mongoose.connect("mongodb+srv://rifanrifan55544:aDB91gIo6i30s2rw@cluster0.cwkwruy.mongodb.net/DB_Mentor_Br").then(() => {
//     console.log("Connected to MongoDB");
  
//   }).catch(err => {
//     console.error("Error connecting to MongoDB:", err);
//   });

app.listen(3000,()=>{
    console.log("server loading");
})