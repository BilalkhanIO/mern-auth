import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
  const { userName, name, password, email } = req.body;
  const hashpassword = bcryptjs.hashSync(password,10)
  const newUser = new User({ userName, name, password: hashpassword, email });

  try {
      await newUser.save();
      res.status(201).json({ message: "user create successfully"});
  } catch (error) {
    res.status(500).json(error.message)
  }

};
