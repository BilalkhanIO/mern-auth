import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

//express server
const app = express();

//mongoose connection
mongoose
  .connect(process.env.MONGOO)
  .then(() => {
    console.log("server is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//
app.listen(3000, () => {
  console.log("server is runing...");
});

app.use("/api/user", userRoutes);
