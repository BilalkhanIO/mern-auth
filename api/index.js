import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();

//express server
const app = express();

//mongoose connection
mongoose
  .connect(process.env.MONGOO)
  .then(() => {
    console.log("server is connected");
  })
  .catch((error) => {
    console.log(error);
  });

//
app.listen(3000, () => {
  console.log("server is runing...");
});
