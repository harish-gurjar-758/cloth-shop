import React, { createContext, useContext, useEffect, useState } from "react";
import { registerApi, signInApi, checkAuthApi } from "../apis/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /* =============================
       CHECK AUTH ON PAGE LOAD
    ============================= */
    useEffect(() => {
        const checkAuth = async () => {
            const res = await checkAuthApi();
            if (res.success) {
                setUser(res.user);
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    /* =============================
       REGISTER
    ============================= */
    const register = async (formData) => {
        const res = await registerApi(formData);

        if (res.success) {
            localStorage.setItem("token", res.token);
            setUser(res.user);
        }

        return res;
    };

    /* =============================
       LOGIN
    ============================= */
    const login = async (credentials) => {
        const res = await signInApi(credentials);

        if (res.success) {
            localStorage.setItem("token", res.token);
            setUser(res.user);
        }

        return res;
    };

    /* =============================
       LOGOUT
    ============================= */
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, loading, register, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
