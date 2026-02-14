import express from "express";
import {
    registerUser,
    loginUser,
    // toggleBlockUser,
    checkMe,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
// import { adminOnly, protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.put("/users/:id/block", protect, adminOnly, toggleBlockUser);
router.get("/me", verifyToken, checkMe);
export default router;
