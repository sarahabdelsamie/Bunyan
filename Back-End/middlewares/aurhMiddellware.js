const jwt=require("jsonwebtoken");
const authMiddleware=(req,res,next)=>{
 try {
 //token from req.headers
 const authHeaders=req.headers.authorization;
 if(!authHeaders)return res.status(401).json({msg:"token required"});
 //token value 
 const token=authHeaders.split("")[1]
 //token value verify(payload)
 const payload=jwt.verify(token,process.env.JWT_SECRET);
 req.user=payload.id;
 //next
 next();
 } catch (error) {
 return res.status(401).json({msg:"invalid token"});
  }

}

