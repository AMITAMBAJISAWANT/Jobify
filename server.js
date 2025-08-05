import * as dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
const app = express();
//router
import authRouter from "./router/authRouter.js";
import jobRouter from "./router/jobRouter.js";
import userRouter from "./router/userRouter.js";

//middleware
import cookieParser from "cookie-parser";
import { authenticateUser } from "./middleware/authMiddelware.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddelware.js";
//database
import mongoose from "mongoose";
dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/v1/test", (req, res) => {
  res.json({ message: "First app", data: req.body });
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
