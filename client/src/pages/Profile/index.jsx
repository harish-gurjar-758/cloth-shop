import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate()
    return (
        <div className="pt-[90px] bg-gray-50 min-h-screen px-4 md:px-10 pb-20">

            {/* ================= PROFILE HEADER ================= */}
            <section className="relative mb-20">
                <div className="h-52 md:h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl shadow-lg"></div>

                <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 flex flex-col items-center">
                    <Avatar
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        sx={{ width: 130, height: 130 }}
                        className="border-4 border-white shadow-xl"
                    />
                    <h2 className="text-2xl font-bold mt-4">Harish Gurjar</h2>
                    <p className="text-gray-500">Premium Member</p>
                </div>
            </section>

            {/* ================= USER STATS ================= */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                    { label: "Orders", value: "12" },
                    { label: "Wishlist", value: "8" },
                    { label: "Reward Points", value: "320" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
                    >
                        <h3 className="text-2xl font-bold text-pink-600">
                            {item.value}
                        </h3>
                        <p className="text-gray-500 mt-2">{item.label}</p>
                    </div>
                ))}
            </section>

            {/* ================= PERSONAL INFO ================= */}
            <section className="bg-white rounded-3xl shadow p-8 mb-10">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <Button variant="outlined" color="secondary"
                        onClick={() => navigate('/edit-profile')}
                    >
                        Edit Profile
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <div>
                        <p className="text-gray-500 text-sm">Email</p>
                        <p className="font-medium">harish@email.com</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Phone</p>
                        <p className="font-medium">+91 9876543210</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Date of Birth</p>
                        <p className="font-medium">12 March 2001</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Gender</p>
                        <p className="font-medium">Male</p>
                    </div>
                </div>
            </section>

            {/* ================= RECENT ORDERS ================= */}
            <section className="bg-white rounded-3xl shadow p-8 mb-10">
                <h3 className="text-xl font-semibold mb-6">Recent Orders</h3>

                <div className="space-y-4">
                    {[1, 2].map((order, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-100 rounded-xl hover:shadow-md transition"
                        >
                            <div>
                                <p className="font-semibold">Order #BCS{1000 + index}</p>
                                <p className="text-gray-500 text-sm">
                                    3 Items • ₹2,499 • 12 Feb 2026
                                </p>
                            </div>
                            <span className="mt-3 md:mt-0 px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                                Delivered
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WISHLIST PREVIEW ================= */}
            <section className="bg-white rounded-3xl shadow p-8 mb-10">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Wishlist</h3>
                    <Button variant="text" color="secondary">
                        View All
                    </Button>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-xl p-4 hover:shadow-lg transition"
                        >
                            <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
                            <h4 className="font-medium">Stylish Jacket</h4>
                            <p className="text-pink-600 font-semibold">₹1,499</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= SAVED ADDRESS ================= */}
            <section className="bg-white rounded-3xl shadow p-8 mb-10">
                <h3 className="text-xl font-semibold mb-6">Saved Address</h3>

                <div className="bg-gray-100 p-4 rounded-xl">
                    <p className="font-semibold">Home Address</p>
                    <p className="text-gray-600 text-sm">
                        21, Main Street, Jaipur, Rajasthan, India - 302001
                    </p>
                </div>
            </section>

            {/* ================= QUICK ACTIONS ================= */}
            <section className="bg-white rounded-3xl shadow p-8 mb-10">
                <h3 className="text-xl font-semibold mb-6">Account Settings</h3>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="contained" color="secondary"
                        onClick={() => navigate("/profile/change-password")}
                    >
                        Change Password
                    </Button>
                    <Button variant="outlined" color="secondary"
                        onClick={() => navigate("/profile/address")}
                    >
                        Manage Addresses
                    </Button>
                    <Button variant="outlined" color="secondary"
                        onClick={() => navigate("/profile/payment")}
                    >
                        Payment Methods
                    </Button>
                </div>
            </section>

            {/* ================= LOGOUT ================= */}
            <section className="text-center">
                <Button variant="contained" color="error">
                    Logout
                </Button>
            </section>

        </div>
    );
}
