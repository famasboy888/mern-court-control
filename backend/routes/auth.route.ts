import { Router } from "express";
import {
  loginUser,
  logout,
  registerUser,
} from "../controllers/auth.controller.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middlewares/validation.middleware.js";
import rateLimit from "express-rate-limit";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: { errorMessage: "IP rate limit exceeded. Retry after 15 minutes" },
});

router.post("/register", apiLimiter, validateRegisterInput, registerUser);
router.post("/login", apiLimiter, validateLoginInput, loginUser);
export { router as authRouter };
