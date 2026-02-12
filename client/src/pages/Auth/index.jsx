import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import SignIn from "../../components/auth/SignIn";
import SignUp from "../../components/auth/SignUp";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Box className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-6">
            <Paper
                elevation={10}
                className="w-full max-w-5xl rounded-3xl overflow-hidden flex"
            >
                {/* LEFT DESIGN PANEL */}
                <Box className="hidden md:flex w-1/2 bg-black text-white items-center justify-center p-10 flex-col">
                    <h2 className="text-3xl font-bold mb-4">
                        {isLogin ? "Welcome Back 👋" : "Join Our Fashion World 👗"}
                    </h2>
                    <p className="text-gray-300 text-center">
                        Discover premium clothing collections curated for modern lifestyle.
                    </p>

                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                        {isLogin ? "Create Account" : "Already have an account?"}
                    </button>
                </Box>

                {/* RIGHT FORM PANEL */}
                <Box className="w-full md:w-1/2 p-10">
                    {isLogin ? (
                        <SignIn switchMode={() => setIsLogin(false)} />
                    ) : (
                        <SignUp switchMode={() => setIsLogin(true)} />
                    )}
                </Box>
            </Paper>
        </Box>
    );
}
