
const mongoose=require("mongoose")
const express=require("express")

const {connection}=require("./db")
const {UserRouter}=require("./routes/users.routes")
const {isAuth}=require("./middleware/auth.middleware")
const {employeeRouter}=require("./routes/employee.routes")
require("dotenv").config()

const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/users",UserRouter)
app.use(isAuth)
app.use("/employee",employeeRouter)

app.listen(process.env.PORT,async()=>{
   try {
    await connection 
    console.log("connected")
   } catch (error) {
    console.log(error)
   }
})
