import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

export default function NavBar() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <nav className="h-[75px] w-full bg-white/80 backdrop-blur-md fixed top-0 flex items-center justify-between px-6 md:px-12 border-b z-50 shadow-sm">

            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold text-pink-600 hover:scale-105 transition duration-300 cursor-pointer">
                Beauty ClothsShop
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 font-medium">
                <li>
                    <Link to="/" className="hover:text-pink-600 transition duration-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/drawer" className="hover:text-pink-600 transition duration-300">
                        Drawer
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-pink-600 transition duration-300">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Icons Section */}
            <div className="hidden md:flex items-center gap-6">
                <Avatar alt="User" />

                <Badge badgeContent={2} color="secondary">
                    <FavoriteIcon className="cursor-pointer hover:scale-110 transition duration-300" />
                </Badge>

                <Badge badgeContent={5} color="secondary">
                    <LocalGroceryStoreIcon className="cursor-pointer hover:scale-110 transition duration-300" />
                </Badge>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                {mobileMenu ? (
                    <CloseIcon
                        className="cursor-pointer"
                        onClick={() => setMobileMenu(false)}
                    />
                ) : (
                    <MenuIcon
                        className="cursor-pointer"
                        onClick={() => setMobileMenu(true)}
                    />
                )}
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`absolute top-[75px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 transform transition-all duration-500 ease-in-out ${mobileMenu ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
                    } md:hidden`}
            >
                <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
                <Link to="/drawer" onClick={() => setMobileMenu(false)}>Drawer</Link>
                <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>

                <div className="flex gap-6 pt-4">
                    <Badge badgeContent={2} color="secondary">
                        <FavoriteIcon />
                    </Badge>
                    <Badge badgeContent={5} color="secondary">
                        <LocalGroceryStoreIcon />
                    </Badge>
                </div>
            </div>

        </nav>
    );
}
