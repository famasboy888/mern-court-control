import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import testRouter from "./routes/test.route.js";

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

// Connect to Database
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB database successfully");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
