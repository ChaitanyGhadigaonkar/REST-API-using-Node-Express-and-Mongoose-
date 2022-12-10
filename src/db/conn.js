const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/SchoolManagementSystem",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connection sucessful")).catch((e)=>{
    console.log(e);
});