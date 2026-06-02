//require dotenv
require("dotenv").config();
//require mongoose 
const mongoose = require("mongoose");
// admin model
const Admin = require("../models/Admin");
// create new function (server)
const seedSuperAdmin = async () =>{
    try {
        // DB connection
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db is connected")
        // exist admin
        const existAdmin = await Admin.findOne({email: process.env.EMAIL_ADMIN,});
        if (existAdmin) return console.log("already found admin");
        // create new admin
        const newAdmin = {
            username:"super admin",
            email:process.env.EMAIL_ADMIN,
            password:process.env.PASSWORD_ADMIN,
        };
        const admin=await Admin.create(newAdmin);
        console.log(admin);

    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.connection.close();
        console.log("db is closed");
        process.exit(0)
    }
}
// Run function
seedSuperAdmin();
