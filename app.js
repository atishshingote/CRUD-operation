const express = require("express");
const Employee = require("./Scheema/Scheema");
require("./conn/connMongo");
const employeeRouter = require("./router/router")

const app = express();
const port = process.env.PORT || 8000 ;

app.use(express.json());
app.use(employeeRouter);

app.listen(port,() =>{
    console.log(`i am connected at ${port}`)
});