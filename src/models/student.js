const mongoose =require("mongoose");
const validator = require("validator");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLenght:5,
    },
    email:{
        type:String,
        require:true,
        unique:[true,"email address already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email Adress");
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:10,
    },
    address:{
        type:String,
    }
});

const Student = new mongoose.model("Student",studentSchema);
module.exports=Student;