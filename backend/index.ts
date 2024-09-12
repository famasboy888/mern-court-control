import "express-async-errors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import testRouter from "./routes/test.route.js";
import { authRouter } from "./routes/auth.route.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware.js";
import { StatusCodes } from "http-status-codes";

dotenv.config();

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV;

const app = express();

const corsOptions = {
  origin: NODE_ENV === "development" ? "*" : process.env.FRONTEND_URL,
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);
// ------- Not Found --------
app.use("*", (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({ msg: "404 not found" });
});
// ------- Error --------
app.use(errorHandlerMiddleware);

// Connect to Database
try {
  mongoose.connect(process.env.MONGO_URI || "", { dbName: "main_db" });
  console.log("Connected to MongoDB database successfully");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);

  process.exit(1);
}
