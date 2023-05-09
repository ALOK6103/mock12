
const express=require("express")
const employeeRouter=express.Router()

const {EmpModel}=require("../models/employee.models")
// const { UserRouter } = require("./users.routes")

employeeRouter.post("/add",async(req,res)=>{

    try {
        await EmpModel.create(req.body)
        res.status(200).send({"msg":"emp created"})
    } catch (error) {
        res.status(400).send({"msg":error})
        
    }
})

employeeRouter.get("/",async(req,res)=>{
    try {
        const emp=await EmpModel.find({userID:req.body.userID})
        res.status(200).send({emp})
    } catch (error) {
        res.status(400).send({"msg":error})
        
    }
})

employeeRouter.put("/update/:id",async(req,res)=>{
   const {id}=req.params 

   try {
    await EmpModel.findByIdAndUpdate({_id:id},req.body)
    res.status(200).send({"msg":"emp updated"})
   } catch (error) {
    res.status(400).send({"msg":error})
   }
})

employeeRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params 

    try {
        await EmpModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"emp deleted"})
    } catch (error) {
        res.status(400).send({"msg":error})
        
    }
})

employeeRouter.get("/salary/ascending",async(req,res)=>{
    

    const emp=await EmpModel.find({userID:req.body.userID})

    function compare(a,b){
        return a.salary-b.salary
    }

    emp.sort(compare)

    res.status(200).send({emp})
})

employeeRouter.get("/salary/descending",async(req,res)=>{
   
    const emp=await EmpModel.find({userID:req.body.userID})

    function compare(a,b){
        return b.salary-a.salary
    }

    emp.sort(compare)

    res.status(200).send({emp})
})

employeeRouter.get("/first_name",async(req,res)=>{
    const {first_name}=req.query 

    const empl=await EmpModel.find({userID:req.body.userID})

    let filterd=empl.filter((el)=>{
        return el.first_name==first_name
    })

    res.status(200).send({filterd})
})

module.exports={
    employeeRouter
}

