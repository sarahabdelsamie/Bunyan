//dotenv
require("dotenv").config();
//express
const express=require("express");
const app=express();
const morgan = require("morgan");
//middleware jason
app.use(express.json());
//connection db

//simple logger
if (process.env.NODE_ENV==="dev"){
    app.use(morgan("dev"));
    }

//test route
app.get("/test",(req,res)=>{
    res.json({msg:"Test Route"})
})
const connectedDB=require("./config/db");
connectedDB();
const adminRoutes = require ("./routes/auth.route");
app.use("/api/dashboard",adminRoutes);
//port
const port=process.env.PORT || 3000;
//run server
app.listen(port,() => {
    console.log(`Server Is Running ${port}`)
});
