import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        fullName: String,
        phone: String,
        addressLine: String,
        city: String,
        postalCode: String,
    },
    { timestamps: true }
);

export default mongoose.model("Address", addressSchema);
