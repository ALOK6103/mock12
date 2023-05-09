const mongoose = require("mongoose");

const EmpSchema = mongoose.Schema(
  {
    first_name:String,
    last_name:String,
    email:String,
    department:String,
    salary:Number,
    userID:String
  },
  {
    versionKey: false,
  }
);

const EmpModel=mongoose.model("employees",EmpSchema)

module.exports={
    EmpModel
}
