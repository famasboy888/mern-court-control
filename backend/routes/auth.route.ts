import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { validateRegisterInput } from "../middlewares/validation.middleware.js";
import rateLimit from "express-rate-limit";

const router = Router();

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 5,
  message: { errorMessage: "IP rate limit exceeded. Retry after 1 minute" },
});

router.post("/register", apiLimiter, validateRegisterInput, registerUser);

export { router as authRouter };
