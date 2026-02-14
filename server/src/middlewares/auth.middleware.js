import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

/* =====================================
   PROTECT MIDDLEWARE
   - Verifies JWT
   - Attaches user to req.user
===================================== */
export const protect = async (req, res, next) => {
    try {
        let token;

        // Check Authorization Header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, token missing"
            });
        }

        // Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find User
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        // Check if account is active
        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                message: "Account is deactivated. Contact admin."
            });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};


/* =====================================
   ADMIN ONLY MIDDLEWARE
===================================== */
export const adminOnly = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Admin access required"
        });
    }
    next();
};


/* =====================================
   MANAGER ONLY MIDDLEWARE
===================================== */
export const managerOnly = (req, res, next) => {
    if (req.user.role !== "manager") {
        return res.status(403).json({
            success: false,
            message: "Manager access required"
        });
    }
    next();
};


/* =====================================
   ROLE BASED ACCESS (Dynamic)
   Example: authorizeRoles("admin", "manager")
===================================== */
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. Allowed roles: ${roles.join(", ")}`
            });
        }
        next();
    };
};
