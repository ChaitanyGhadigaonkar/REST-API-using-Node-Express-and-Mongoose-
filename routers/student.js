const express = require("express");
const Student =require("../src/models/student")
const router =express.Router();

// for creating a sudent entry in the database
// using promises
// app.post("/students",(req,res)=>{
//     const student1=new Student(req.body);
//     student1.save().then(()=>{
//         res.status(201).send(student1);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
//     console.log(student1);
//     // res.send("Connected");
// })

// post request using async await
router.post("/students",async(req,res)=>{
    try{
        const student1=new Student(req.body);
        const CreateStudent=await student1.save();
        
        res.status(201).json(CreateStudent);
        console.log(CreateStudent);

    }catch(err){
        res.status(400).send(err);
    }
})




// Get request

// get all the list of students
router.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
        res.json(studentsData);
    }catch(err){
        res.status(404).send(err);
        console.log(err);
    }
});

//get the student with its id
router.get("/students/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        // console.log(req.params.id)
        const studentData=await Student.findById({_id});
        // console.log(studentData);
        if(!studentData){
            res.status(404).send("Invalid student.");
        }else{
            res.status(201).send(studentData);
            // res.json(studentData);
        }
    }catch(err){
        res.status(404).send(err);
    }
});

// update 

router.patch("/students/:id",async(req,res)=>{
try{
    const _id=req.params.id;
    const result=await Student.findByIdAndUpdate({_id},req.body,{
        new:true
    });
    res.status(201).send(result);
    console.log(result);
}catch(err){
    res.status(404).send(err);
}
});

// delete students

router.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result =await Student.findOneAndDelete({_id},{
            new:true
        });
        res.status(201).send(result);
        console.log(result);
    }catch(err){
        res.status(400).send(err);
    }
    
});
module.exports=router;