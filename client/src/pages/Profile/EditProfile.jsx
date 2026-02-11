import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function EditProfile() {
    const [imagePreview, setImagePreview] = useState(null);

    const [formData, setFormData] = useState({
        firstName: "Harish",
        lastName: "Gurjar",
        email: "harish@email.com",
        phone: "+91 9876543210",
        username: "harish_g",
        bio: "Fashion enthusiast & MERN Developer.",
        gender: "Male",
        dob: "",
        currentPassword: "",
        newPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Profile Updated Successfully 🚀");
    };

    return (
        <div className="pt-[90px] min-h-screen bg-gray-50 px-4 md:px-10 pb-20">

            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* ================= COVER BANNER ================= */}
                <div className="h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 relative">
                    <div className="absolute -bottom-16 left-10">
                        <img
                            src={
                                imagePreview ||
                                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            }
                            alt="profile"
                            className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                        />
                    </div>
                </div>

                {/* ================= FORM SECTION ================= */}
                <form onSubmit={handleSubmit} className="p-8 mt-20 space-y-12">

                    {/* Profile Image Change */}
                    <div className="flex justify-between items-center border-b pb-6">
                        <div>
                            <h2 className="text-2xl font-bold">Edit Profile</h2>
                            <p className="text-gray-500 text-sm">
                                Update your personal details
                            </p>
                        </div>

                        <label className="cursor-pointer text-pink-600 font-medium hover:underline">
                            Change Photo
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>

                    {/* ================= PERSONAL INFORMATION ================= */}
                    <section>
                        <h3 className="text-lg font-semibold mb-6">
                            Personal Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">

                            <InputField
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />

                            <InputField
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />

                            <InputField
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />

                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <InputField
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <div>
                                <label className="text-sm text-gray-600">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <InputField
                                label="Date of Birth"
                                name="dob"
                                type="date"
                                value={formData.dob}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Bio */}
                        <div className="mt-6">
                            <label className="text-sm text-gray-600">Bio</label>
                            <textarea
                                name="bio"
                                rows="4"
                                value={formData.bio}
                                onChange={handleChange}
                                className="w-full mt-2 p-4 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                            />
                        </div>
                    </section>

                    {/* ================= PASSWORD SECTION ================= */}
                    <section>
                        <h3 className="text-lg font-semibold mb-6">
                            Change Password
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <InputField
                                label="Current Password"
                                name="currentPassword"
                                type="password"
                                value={formData.currentPassword}
                                onChange={handleChange}
                            />

                            <InputField
                                label="New Password"
                                name="newPassword"
                                type="password"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </section>

                    {/* ================= ACTION BUTTONS ================= */}
                    <div className="flex justify-end gap-4 pt-8 border-t">
                        <Button variant="outlined" color="secondary">
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            sx={{ paddingX: 4 }}
                        >
                            Save Changes
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
}

/* ================= REUSABLE INPUT COMPONENT ================= */

function InputField({ label, name, type = "text", value, onChange }) {
    return (
        <div>
            <label className="text-sm text-gray-600">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition"
            />
        </div>
    );
}
