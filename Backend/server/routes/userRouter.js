import express from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/userController.js";
import { RegisterUser, loginUser } from "../controllers/authController.js";
import { verifyTokenByAdmin, verifyUserByToken} from "../token/verifyToken.js";


const userRouter = express.Router();


// login
userRouter.post("/user/login",  loginUser);


// Registration
userRouter.post("/user/register",  RegisterUser);


// Get All Users
userRouter.get("/users", verifyTokenByAdmin, getAllUsers);


// Get User
userRouter.get("/user/:id", verifyUserByToken, getUser);


// Update User
userRouter.patch("/user/update", verifyUserByToken,  updateUser);

// delete User
userRouter.delete("/user/delete", verifyUserByToken,  deleteUser);





export default userRouter;


