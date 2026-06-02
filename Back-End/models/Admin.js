const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const { required } = require("joi");
const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username Is Required"],
    },
    email:{
        type:String,
        required:[true,"Email Is Required"],
    },
     password:{
        type:String,
        required:[true,"Password Is Required"],
        minlength:6,
        select:false,
    },

},{timestamps:true});

adminSchema.pre("save",async function () {
    if (!this.isModified("passwoed")) return ;
    this.password=await bcrypt.hash(this.password,10);
    
});
adminSchema.methods.comparePassword=async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword,this.password);    
};
const Admin =mongoose.model("Admin",adminSchema);

module.exports=Admin;
