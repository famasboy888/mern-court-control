import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "something went wrong. Try again later";
  return res.status(statusCode).json({ errorMessage: msg });
};

export default errorHandlerMiddleware;
