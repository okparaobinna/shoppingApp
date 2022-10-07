import User from "../models/userModel.js";
import bcrypt from "bcryptjs";



export const getAllUsers = async (req, res, next) => {
     try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};


export const getUser = async (req, res, next) => {

  try {
    const users = await User.findById(req.params.id);
    if(!users)res.status(404).json({message:'user does not exist'})
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.findByIdAndUpdate(
      req.user.id,
      {  username: req.body.username,
        email: req.body.email,
        password: hashPassword, },
      { new: true }
    );
    res.status(200).json("User has been updated");
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {

  try{
    const userdeleted=await User.findByIdAndDelete(req.user.id)
    
    res.status(200).json(`${userdeleted.username} has been deleted `);
  }catch(err){
    next(err);
  }
};
