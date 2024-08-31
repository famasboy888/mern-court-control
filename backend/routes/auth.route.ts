import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { validateRegisterInput } from "../middlewares/validation.middleware.js";

const router = Router();

router.post("/register", validateRegisterInput, registerUser);

export { router as authRouter };
