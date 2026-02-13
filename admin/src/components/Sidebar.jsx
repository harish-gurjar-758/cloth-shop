import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const linkClass =
        "block px-4 py-3 rounded-xl hover:bg-black hover:text-white transition";

    return (
        <div className="w-64 bg-white shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

            <nav className="space-y-3">
                <NavLink to="/admin/dashboard" className={linkClass}>
                    Dashboard
                </NavLink>
                <NavLink to="/admin/products" className={linkClass}>
                    Products
                </NavLink>
                <NavLink to="/admin/orders" className={linkClass}>
                    Orders
                </NavLink>
                <NavLink to="/admin/users" className={linkClass}>
                    Users
                </NavLink>
                <NavLink to="/admin/analytics" className={linkClass}>
                    Analytics
                </NavLink>
                <NavLink to="/admin/settings" className={linkClass}>
                    Settings
                </NavLink>
            </nav>
        </div>
    );
}
