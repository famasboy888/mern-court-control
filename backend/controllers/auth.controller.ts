import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/custom.error.js";
import userModel from "../models/user.model.js";
import { USER_ROLES } from "../utils/constants.util.js";
import { comparePassword, hashPassword } from "../utils/password.util.js";
import { createJWT } from "../utils/token.util.js";

export const registerUser: RequestHandler = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstAccount ? USER_ROLES.ADMIN : USER_ROLES.USER;

  req.body.password = await hashPassword(req.body.password);

  const user = await userModel.create(req.body);
  return res.status(StatusCodes.CREATED).json({ message: "user created" });
};

export const loginUser: RequestHandler = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password || ""));
  req.body.password = await hashPassword(req.body.password);
  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id, role: user.role });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 3600 * 1000),
    secure: process.env.NODE_ENV === "production",
  });

  return res.status(StatusCodes.OK).json({ message: "user logged in!" });
};

export const logout: RequestHandler = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  return res.status(StatusCodes.OK).json({ message: "user logged out!" });
};
