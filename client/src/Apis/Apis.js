import axios from 'axios';

const MAIN_API = "http://localhost:10000/api";

// REGISTER
export const registerApi = async (data) => {
    try {
        const response = await axios.post(`${MAIN_API}/auth/register`, data);
        return response.data;
    } catch (error) {
        console.error("Register Error : ", error.response.data || error.message);
        return { success: false, message: "Registration Failed." };
    }
}

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

// getProfile
export const getProfileApi = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const response = await axios.get(`${MAIN_API}/users/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data;
    } catch (error) {
        console.error("Get Profile Error:", error.response?.data || error.message);
        return { success: false, message: "Failed to fetch profile." };
    }
};
