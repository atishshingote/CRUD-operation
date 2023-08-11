const mongoose = require("mongoose");
const validator = require("validator");


const EmployeeSchema = new mongoose.Schema({
    name :{
        type:String,
        required : true,
        minlength :3
    } , 

    email :{
        type : String,
        required : true,
        unique : [true,"Email ID Already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    } ,

    phoneNo :{
        type :Number,
        required : true,
        unique : true,
        min : 10
    } ,

    adress : {
        type : String,
        required : true,
    }
});

const Employee = new mongoose.model('Employee',EmployeeSchema);

module.exports =   Employee ;  