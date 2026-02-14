import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// 🔐 PROTECT ROUTE
export const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        next();

    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

// 🔒 ADMIN ONLY
export const adminOnly = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ success: false, message: "Admin only access" });
    }
    next();
};
