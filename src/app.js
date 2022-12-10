const express = require("express");
require("./db/conn");
const Student=require("./models/student");
const studentRouter=require("../routers/student");

const PORT =process.env.PORT || 8000
const app =express();

app.use(express.json());
app.use(studentRouter);

// app.get("/",(req,res)=>{
//     res.send("Connected");
// })

// listening 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
