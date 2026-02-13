import React, { useState } from "react";
import { Avatar, Badge, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { FiBell, FiSearch, FiMenu } from "react-icons/fi";
import { MdLogout, MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Topbar({ onToggleSidebar }) {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationAnchor, setNotificationAnchor] = useState(null);

    const open = Boolean(anchorEl);
    const notificationOpen = Boolean(notificationAnchor);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationClick = (event) => {
        setNotificationAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setNotificationAnchor(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/auth");
    };

    return (
        <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6 fixed top-0 left-0 z-50">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">
                <IconButton onClick={onToggleSidebar}>
                    <FiMenu size={22} />
                </IconButton>

                <h1 className="text-xl font-semibold tracking-wide text-gray-800">
                    Admin Dashboard
                </h1>
            </div>

            {/* CENTER SEARCH */}
            <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-xl w-[350px]">
                <FiSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none w-full text-sm"
                />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

                {/* Notifications */}
                <Tooltip title="Notifications">
                    <IconButton onClick={handleNotificationClick}>
                        <Badge badgeContent={4} color="error">
                            <FiBell size={20} />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={notificationAnchor}
                    open={notificationOpen}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>New Order Received</MenuItem>
                    <MenuItem onClick={handleClose}>New User Registered</MenuItem>
                    <MenuItem onClick={handleClose}>Server Warning</MenuItem>
                </Menu>

                {/* Profile */}
                <Tooltip title="Account">
                    <IconButton onClick={handleProfileClick}>
                        <Avatar
                            alt="Admin User"
                            src="https://i.pravatar.cc/150?img=3"
                            sx={{ width: 36, height: 36 }}
                        />
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => navigate("/admin/profile")}>
                        <MdSettings className="mr-2" /> Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <MdLogout className="mr-2 text-red-500" /> Logout
                    </MenuItem>
                </Menu>
            </div>
        </header>
    );
}
