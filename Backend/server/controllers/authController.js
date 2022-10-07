import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const RegisterUser = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const { username, email } = req.body;
  const registerUser = new User({
    username: username,
    email: email,
    password: hashPassword,
  });

  try {
  await registerUser.save();

    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ username: req.body.username });
    if (!userExist) {
      res.status(400).json("Username does not exist");
    }

    const isPassWordMatch = await bcrypt.compare(
      req.body.password,
      userExist.password
    );

    if (!isPassWordMatch) {
      res.status(400).json("Wrong Password or Username");
    }

    const token = jwt.sign(
      {
        id: userExist._id,
        isAdmin: userExist.isAdmin,
      },
      process.env.token_scret,
      { expiresIn: "3d" }
    );

    const { password, isAdmin, ...otherDetails } = userExist._doc;
    res.status(200).json({ ...otherDetails, token });
  } catch (err) {
    next(err);
  }
};
