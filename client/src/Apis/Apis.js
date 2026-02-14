import axios from "axios";

const MAIN_API = "http://localhost:10000/api";

const API = axios.create({
    baseURL: MAIN_API,
    withCredentials: true, // VERY IMPORTANT
});

// REGISTER
export const registerApi = async (data) => {
    const response = await API.post("/auth/register", data);
    return response.data;
};

// Login
export const signInApi = async (data) => {
    const response = await API.post("/auth/login", data);
    return response.data;
};

// Auth Check
export const checkAuthApi = async () => {
    const response = await API.get("/auth/me");
    return response.data;
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
