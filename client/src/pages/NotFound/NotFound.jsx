import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-6">

            <div className="text-center max-w-xl">

                {/* 404 Number */}
                <h1 className="text-[120px] font-extrabold text-gray-200 leading-none select-none">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 mt-[-20px]">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-4 leading-relaxed">
                    Sorry, the page you’re looking for doesn’t exist or may have been moved.
                    Please check the URL or return to the homepage.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

                    <Button
                        variant="contained"
                        startIcon={<FiHome />}
                        onClick={() => navigate("/")}
                        className="!rounded-xl !px-6 !py-2"
                    >
                        Go Home
                    </Button>

                    <Button
                        variant="outlined"
                        startIcon={<FiArrowLeft />}
                        onClick={() => navigate(-1)}
                        className="!rounded-xl !px-6 !py-2"
                    >
                        Go Back
                    </Button>

                </div>

            </div>
        </div>
    );
}
