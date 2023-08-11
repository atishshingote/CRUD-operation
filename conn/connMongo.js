const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/emps-api")
.then(() =>{
    console.log("connection successfully......");
}).catch((err) =>{
    console.log("No Connection");
})