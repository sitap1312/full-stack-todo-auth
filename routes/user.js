import { Router } from "express";
import { signUp } from "../controllers/users.js";

const router = Router();

// Sign Up : POST
router.post("/sign-up", signUp);
// Sign In : POST
router.post("/sign-in");
// Verify : GET
router.get("/verify");
// Change Password : POST
router.post("/change-password");

export default router;
