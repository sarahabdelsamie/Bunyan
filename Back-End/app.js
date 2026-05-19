//dotenv
require("dotenv").config();
//express
const express=require("express");
const app=express();
//middleware jason
app.use(express.json());
//connection db

//simple logger
if (process.env.NODE_ENV==="dev"){
    app.use((req,res,next)=>{
        console.log(`${req.method} ${req.originalUrl}`)
        next();
    })
}
//test route
app.get("/test",(req,res)=>{
    res.json({msg:"Test Route"})
})
const connectedDB=require("./config/db");
connectedDB();
//port
const port=process.env.PORT || 3000;
//run server
app.listen(port,() => {
    console.log(`Server Is Running ${port}`)
});
