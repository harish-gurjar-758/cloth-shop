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

// verify token
export const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check if Authorization header exists and has Bearer token
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized. Invalid token format." });
        }

        const token = authHeader.split(" ")[1];

        // Verify token with secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch user from database (excluding password)
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ error: "User not found." });
        }

        req.user = user; // Attach user to request
        next(); // Proceed to next middleware/controller
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token", details: err.message });
    }
};
