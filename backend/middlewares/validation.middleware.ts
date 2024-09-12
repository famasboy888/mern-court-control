import { body, ValidationChain, validationResult } from "express-validator";
import { BadRequestError } from "../errors/custom.error.js";
import { NextFunction, Request, Response } from "express";
import userModel from "../models/user.model.js";

const withValidationErrors = (validateValues: ValidationChain[]) => {
  return [
    ...validateValues,
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body("username").notEmpty().withMessage("username is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is invalid")
    .custom(async (email) => {
      const user = await userModel.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is invalid"),
  body("password").notEmpty().withMessage("password is required"),
]);
