import { BadRequestError } from "../errors/custom.error.js";

export const sanitizeEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmedEmail = email.trim();
  if (!emailRegex.test(trimmedEmail)) {
    throw new BadRequestError("Invalid email address");
  }
  return trimmedEmail;
};
