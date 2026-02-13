import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../client/src/context/AuthContext";

export default function AdminRoute({ children }) {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;

    if (!user || user.role !== "admin") {
        return <Navigate to="/" />;
    }

    return children;
}
