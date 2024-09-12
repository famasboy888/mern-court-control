import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/custom.error.js";
import mongoose from "mongoose";

//types
export type UserPayload = {
  userId: mongoose.Types.ObjectId;
  role: string;
};

// type guard
const isString = (value: unknown) => {
  return typeof value === "string";
};

export const createJWT = (payload: UserPayload): string => {
  if (isString(process.env.JWT_SECRET)) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
  } else {
    throw new BadRequestError("invalid JWT secret");
  }
};

export const verifyJWT = (token: string) => {
  if (isString(process.env.JWT_SECRET)) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } else {
    throw new BadRequestError("invalid JWT secret");
  }
};
