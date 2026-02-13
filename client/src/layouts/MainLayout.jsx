import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MainLayout() {
    return (
        <>
            <NavBar />
            <div className="mainBody min-h-screen bg-gray-50">
                <Outlet />
            </div>
        </>
    );
}
