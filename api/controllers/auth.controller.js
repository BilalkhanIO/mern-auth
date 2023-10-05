import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not fund"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "wrong credentials"));
    }
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashpassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 10800000);
    res
      .cookie("access_toke", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashpassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 10800000);
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(16).slice(-8) +
        Math.random().toString(16).slice(-8);

      const hashpassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        name: req.body.name,
        userName:
          req.body.name.split(" ").join("").toLowerCase().slice(5) +
          Math.random().toString(16).slice(-5),
        email: req.body.email,
        password: hashpassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = Jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashpassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 10800000);
      res
        .cookie("access_toke", token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie("access_token").status(200).json("Sign Out seccuessfully!");
};
