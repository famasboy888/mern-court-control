import { StatusCodes } from "http-status-codes";
type messageParam = string | string[];
const superFn = (message: messageParam) =>
  typeof message === "string" ? message : message.join(", ");

export class NotFoundError extends Error {
  constructor(message: messageParam) {
    super(superFn(message));
    this.name = "NotFoundError";
  }
  private readonly statusCode: number = StatusCodes.NOT_FOUND;
}
export class BadRequestError extends Error {
  constructor(message: messageParam) {
    super(superFn(message));
    this.name = "BadRequestError";
  }
  private readonly statusCode: number = StatusCodes.BAD_REQUEST;
}
export class UnauthenticatedError extends Error {
  constructor(message: messageParam) {
    super(superFn(message));
    this.name = "UnauthenticatedError";
  }
  private readonly statusCode: number = StatusCodes.UNAUTHORIZED;
}
export class UnauthorizedError extends Error {
  constructor(message: messageParam) {
    super(superFn(message));
    this.name = "UnauthorizedError";
  }
  private readonly statusCode: number = StatusCodes.FORBIDDEN;
}
