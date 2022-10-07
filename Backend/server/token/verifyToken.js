import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const autoToken = req.headers.token;

  if (autoToken) {
    const token = autoToken.split(" ")[1];
    jwt.verify(token, process.env.token_scret, (err, user) => {
      if (err) res.status(403).json("Invalid token");

      req.user = user;

      next();
    });
  } else {
    res.status(403).json("You are not authenticated");
  }
};


 export const verifyUserByToken=(req, res, next)=>{
  verifyToken(req, res, next,()=>{

if(req.user.id===req.params.id || req.user.isAdmin){
  next()
}else{
  res.status(403).json('You are not authorized')
}

  })

    
   

 }

 export const verifyTokenByAdmin=(req, res, next)=>{
  verifyToken(req, res,()=>{

if(req.user.isAdmin ){

  next()
}else{
  res.status(403).json('You are not authorized')
}

  })

    
   

 }



 


