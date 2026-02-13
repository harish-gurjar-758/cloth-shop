import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";

export default function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔄 Show loader while checking auth
  if (loading) {
    return <Loader />;
  }

  // ❌ Not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // ❌ Not admin
  if (user?.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  // ✅ Authorized
  return children;
}
