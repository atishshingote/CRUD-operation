const express = require("express");
const router = new express.Router();
const Employee = require("../Scheema/Scheema");

router.post("/emps", async(req,res) =>{
    try{
        const user = new Employee(req.body);

        const createuser = await user.save();
        res.status(201).send(createuser);
    }catch(e){res.status(400).send(e);}
})

router.get("/emps/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
        const empsData = await Employee.findById(_id);
        res.send(empsData);
    }catch(e){res.send(e);}
})

router.delete("/emps/:id", async (req,res) =>{
    try{
        const _id = req.params.id;
        const deleteEmployee= await Employee.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteEmployee);
    }catch(e){
        res.status(500).send(e);}
})

router.patch("/emps/:id", async(req,res) =>{
    try{
        const updateEmployee = await Employee.findByIdAndUpdate(req.params.id,req.body , {
            new : true
        });
        res.send(updateEmployee);
    }catch(e){res.send(e)};
})

module.exports = router;