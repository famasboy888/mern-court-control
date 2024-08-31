import mongoose from "mongoose";
import { USER_ROLES } from "../utils/constants.util.js";

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.USER,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
