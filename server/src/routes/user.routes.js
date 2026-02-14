import express from "express";
import {
    signUp,
    signIn,
    updateProfile,
    addAddress,
    updateAddress,
    getAllUsers,
    getTotalUserCount,
    updateUserByAdminRoleBmanagerjob
} from "../controller/user.controller.js";

import {
    protect,
    adminOnly,
    managerOnly,
    authorizeRoles
} from "../middlewares/auth.middleware.js";

const router = express.Router();

/* =================================================
   AUTH ROUTES
================================================= */

// Register User
router.post("/signup", signUp);

// Login User
router.post("/signin", signIn);


/* =================================================
   USER PROFILE ROUTES (Protected)
================================================= */

// Update Profile
router.put("/update-profile", protect, updateProfile);


/* =================================================
   ADDRESS ROUTES (Protected)
================================================= */

// Add New Address
router.post("/add-address", protect, addAddress);

// Update Existing Address (by index)
router.put("/update-address/:addressIndex", protect, updateAddress);


/* =================================================
   ADMIN ROUTES
================================================= */

// Get All Users (Admin Only)
router.get("/all-users", protect, adminOnly, getAllUsers);

// Get Total User Count (Admin Only)
router.get("/total-users", protect, adminOnly, getTotalUserCount);

// Update User Role (Admin → Manager Job Post)
router.put(
    "/update-role/:userId",
    protect,
    adminOnly,
    updateUserByAdminRoleBmanagerjob
);


/* =================================================
   EXAMPLE ROLE-BASED ROUTES (Optional Usage)
================================================= */

// Example: Manager Only Route
router.get("/manager-dashboard", protect, managerOnly, (req, res) => {
    res.json({ success: true, message: "Welcome Manager" });
});

// Example: Admin + Manager Access
router.get(
    "/admin-manager",
    protect,
    authorizeRoles("admin", "manager"),
    (req, res) => {
        res.json({ success: true, message: "Shared Access Route" });
    }
);

export default router;
