const jwt = require("jsonwebtoken");
// middleware has req, res, next
const verifyToken = async(req, res, next)=>{
   const authHeader = req.header("Authorization");
   const token = authHeader && authHeader.split(" ")[1];

   if (!token){
    return res.status(401).json({ success: false, message: "unauthorized" });
   }

   try{
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user) => {
        if(err) return res
        .status(403)
        .json({ success: false, message: "Forbidden"});

        req.id = user.id ;
        req.author = user.author;
        req.accountType = user.accountType;

        next();
    });
   }catch(error){
    return res
    .status(500)
    .json({ success: false, message: "Internal Server Error"});
   }
}

// Bearer fef435huj6h5j6h56456j5
// we have to split -> " "
// ["Bearer", "fef435huj6h5j6h56456j5"]
// [1]