// admin model
const Admin = require("../models/Admin");
// joi schema
const loginSchema = require ("./validation/authAdminValidation");
// jwt 
const jwt = require("jsonwebtoken");
// function
const loginController = async (req,res) => {
    try {
        // joi validation
        const {error,value} = loginSchema.validate(req.body,{
            abortEarly:false,
            stripUnknown:true
        })
        if (error){
            return res.status(400).json({
                msg:error.details.map((err)=> err.message),
            });
            //get data from value
            const {email,password}=value;
            //check admin found or not 
            const Admin=await Admin.findOne({email}).select("+password");
            // if user not found 
            if (!Admin) return res.status(400).json({msg:"invalid email or password"});
            // compare password
            const matchedPassword = await Admin.comparePassword(password);
            // if password false
            if (!matchedPassword) return res.status(400).json({msg:"invalid email or password"});
            const token = await jwt.sign({id:Admin._id},process.env.JWT_SECRET,{expiresIn:"1d"});
            res.status(200).json({msg:"Sucess Login",token});
        }
        
    } catch (error) {
        
    }
}
// export