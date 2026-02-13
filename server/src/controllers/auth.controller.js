import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";


// ================= REGISTER =================
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const normalizedEmail = email.toLowerCase();

        const userExists = await User.findOne({ email: normalizedEmail });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            name,
            email: normalizedEmail,
            password,
        });

        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// ================= LOGIN =================
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const normalizedEmail = email.toLowerCase();

        const user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // 🚫 Check if blocked
        if (user.isBlocked) {
            return res.status(403).json({ message: "Account is blocked by admin" });
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        generateToken(res, user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// ================= LOGOUT =================
export const logoutUser = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    res.json({ message: "Logged out successfully" });
};



// ================= BLOCK / UNBLOCK USER (ADMIN) =================
export const toggleBlockUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Prevent admin blocking themselves
        if (req.user._id.toString() === id) {
            return res.status(400).json({ message: "You cannot block yourself" });
        }

        user.isBlocked = !user.isBlocked;
        await user.save();

        res.json({
            message: `User ${user.isBlocked ? "blocked" : "unblocked"} successfully`,
            isBlocked: user.isBlocked,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
