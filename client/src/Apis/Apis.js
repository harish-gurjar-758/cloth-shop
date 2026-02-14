import axios from "axios";

const MAIN_API = "http://localhost:10000/api";

const API = axios.create({
    baseURL: MAIN_API,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});


// -------
//  user Register
// --------

// REGISTER
export const registerApi = async (data) => {
    try {
        const response = await axios.post(`${MAIN_API}/auth/register`, data);
        return response.data;
    } catch (error) {
        console.error("Register Error:", error.response?.data || error.message);
        return { success: false, message: "Registration failed." };
    }
};

// Login
export const signInApi = async (credentials) => {
    try {
        const response = await axios.post(`${MAIN_API}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        return { success: false, message: "Login failed." };
    }
};

// Auth Check
export const checkAuthApi = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");
        const response = await axios.get(`${MAIN_API}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error("Auth Check Error:", error.response?.data || error.message);
        return { success: false, message: "Authentication failed." };
    }
};