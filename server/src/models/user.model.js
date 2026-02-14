import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pincode: { type: String }
}, { _id: false });

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,     // prevents duplicate emails
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: function () {
            return !this.googleId;
            // Password not required if user signs up with Google
        }
    },
    role: {
        type: String,
        enum: ["user", "seller", "admin"],
        default: "user"
    },

    // Used when admin assigns manager job post
    subRole: {
        type: String
    },

    // For Google SignIn / SignUp
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    profilePicture: {
        type: String
    },
    provider: {
        type: String,
        enum: ["local", "google"],
        default: "local"
    },

    address: [addressSchema],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);
export default User;
