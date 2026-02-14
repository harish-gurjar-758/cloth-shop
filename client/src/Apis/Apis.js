import axios from "axios";

const MAIN_API = "http://localhost:10000/api";

// REGISTER
export const registerApi = async (data) => {
    try {
        const response = await axios.post(
            `${MAIN_API}/auth/register`,
            data,
            { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Registration failed.",
        };
    }
};

// LOGIN
export const signInApi = async (credentials) => {
    try {
        const response = await axios.post(
            `${MAIN_API}/auth/login`,
            credentials,
            { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Login failed.",
        };
    }
};

// CHECK AUTH
export const checkAuthApi = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
            `${MAIN_API}/auth/me`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        return response.data;

    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Authentication failed.",
        };
    }
};
