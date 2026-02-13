import API from "./axios";


// ================= REGISTER =================
export const registerUser = async (data) => {
    try {
        const res = await API.post("/auth/register", data);
        return res.data;
    } catch (error) {
        throw error;
    }
};


// ================= LOGIN =================
export const loginUser = async (data) => {
    try {
        const res = await API.post("/auth/login", data);
        return res.data;
    } catch (error) {
        throw error;
    }
};


// ================= LOGOUT =================
export const logoutUser = async () => {
    try {
        const res = await API.post("/auth/logout");
        return res.data;
    } catch (error) {
        throw error;
    }
};


// ================= CHECK AUTH =================
export const checkAuth = async () => {
    try {
        const res = await API.get("/auth/check");
        return res.data;
    } catch (error) {
        throw error;
    }
};


// ================= GET PROFILE =================
export const getProfile = async () => {
    try {
        const res = await API.get("/users/profile");
        return res.data;
    } catch (error) {
        throw error;
    }
};
