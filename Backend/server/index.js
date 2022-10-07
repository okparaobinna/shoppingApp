import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieparser from 'cookie-parser'
import userRouter from "./routes/userRouter.js";
import { createError } from "./middleWare/errorMiddleWare.js";
import { errorMiddleWareHandler } from "./middleWare/errorMiddleWareHandler.js";



const app = express();
const Port = process.env.Port || 5000;

// middleWares
app.use(express.json());
app.use(cookieparser())



app.use("/api/v1", userRouter);



app.use(createError);



app.use(errorMiddleWareHandler);

dotenv.config();

mongoose
  .connect(process.env.mongodb)
  .then(() =>
    app.listen(Port, () => {
      console.log("The server is connected");
    })
  )
  .catch((err) => {
    console.log(err);
  });
