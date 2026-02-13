import React, { createContext, useState, useEffect } from "react";
import { checkAuthApi, getProfileApi } from "../Apis/Apis";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      // 1️⃣ Check if token is valid
      const authCheck = await checkAuthApi();

      if (!authCheck.success) {
        localStorage.removeItem("token");
        setUser(null);
        setLoading(false);
        return;
      }

      // 2️⃣ Fetch full profile
      const profile = await getProfileApi();

      if (profile.success !== false) {
        setUser(profile.user || profile);
      } else {
        setUser(null);
      }

    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
