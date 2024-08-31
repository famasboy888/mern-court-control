import { RequestHandler } from "express";
import userModel from "../models/user.model.js";
import { USER_ROLES } from "../utils/constants.util.js";
import { hashPassword } from "../utils/password.util.js";

export const registerUser: RequestHandler = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstAccount ? USER_ROLES.ADMIN : USER_ROLES.USER;

  req.body.password = await hashPassword(req.body.password);

  const user = await userModel.create(req.body);
  return res.status(200).json({ message: "user created" });
};
