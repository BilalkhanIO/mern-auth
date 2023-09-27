import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { userName, name, password, email } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, name, password: hashpassword, email });

  try {
    await newUser.save();
    res.status(201).json({ message: "user create successfully" });
  } catch (error) {
    next(errorHandler(300, "Something went worring"));
  }
};
