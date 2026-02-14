import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

/* =========================
   Generate JWT Token
========================= */
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

/* =========================
   SIGN UP
========================= */
export const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        const token = generateToken(newUser);

        res.status(201).json({
            success: true,
            token,
            user: newUser
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =========================
   SIGN IN
========================= */
export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = generateToken(user);

        res.status(200).json({
            success: true,
            token,
            user
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =========================
   UPDATE PROFILE
========================= */
export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            req.body,
            { new: true }
        ).select("-password");

        res.status(200).json({
            success: true,
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =========================
   ADD ADDRESS
========================= */
export const addAddress = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        user.address.push(req.body);
        await user.save();

        res.status(200).json({
            success: true,
            message: "Address added successfully",
            address: user.address
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =========================
   UPDATE ADDRESS
========================= */
export const updateAddress = async (req, res) => {
    try {
        const userId = req.user.id;
        const { addressIndex } = req.params;

        const user = await User.findById(userId);

        if (!user.address[addressIndex]) {
            return res.status(404).json({
                success: false,
                message: "Address not found"
            });
        }

        user.address[addressIndex] = req.body;
        await user.save();

        res.status(200).json({
            success: true,
            message: "Address updated successfully",
            address: user.address
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =========================
   GET ALL USERS (Admin Only)
========================= */
export const getAllUsers = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied"
            });
        }

        const users = await User.find().select("-password");

        res.status(200).json({
            success: true,
            users
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =========================
   GET TOTAL USER COUNT
========================= */
export const getTotalUserCount = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();

        res.status(200).json({
            success: true,
            totalUsers
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/* =========================
   UPDATE USER ROLE (Admin)
   If role = manager → set subRole = "manager"
========================= */
export const updateUserByAdminRoleBmanagerjob = async (req, res) => {
    try {
        const adminId = req.user.id;
        const { userId } = req.params;
        const { role } = req.body;

        const admin = await User.findById(adminId);
        if (admin.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Only admin can update roles"
            });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.role = role;

        // If assigning manager role
        if (role === "manager") {
            user.subRole = "manager";
        }

        await user.save();

        res.status(200).json({
            success: true,
            message: "User role updated successfully",
            user
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
