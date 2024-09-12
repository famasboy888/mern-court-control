import { RequestHandler } from "express";
import { UnauthenticatedError } from "../errors/custom.error.js";
import { UserPayload, verifyJWT } from "../utils/token.util.js";

export const authenticateUser: RequestHandler = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("authentication invalid");
  try {
    const { userId, role } = verifyJWT(token) as UserPayload;
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};
