import express, { Request, Response } from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

// Connect to MongoDB Atlas
mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// console.log(process.env.MONGODB_URI);

app.use("/", (req: Request, res: Response) => {
  res.send("On page");
});
if (process.env.NODE_ENV === "development") {
  app.listen(port, () => {
    console.log(`app running on port ${port}`);
  });
}
