import express from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    // toggleBlockUser,
    checkMe,
} from "../controllers/auth.controller.js";
// import { adminOnly, protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
// router.put("/users/:id/block", protect, adminOnly, toggleBlockUser);
router.get("/me", checkMe)
export default router;
