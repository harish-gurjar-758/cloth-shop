import axiosInstance from "./axiosInstance";

/* =========================
   REGISTER
========================= */
export const registerApi = async (data) => {
    try {
        const response = await axiosInstance.post("/users/signup", data);
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Registration failed",
        };
    }
};

/* =========================
   LOGIN
========================= */
export const signInApi = async (credentials) => {
    try {
        const response = await axiosInstance.post("/users/signin", credentials);
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Login failed",
        };
    }
};

/* =========================
   CHECK AUTH
========================= */
export const checkAuthApi = async () => {
    try {
        const response = await axiosInstance.get("/users/update-profile");
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Authentication failed",
        };
    }
};

/* =========================
   UPDATE PROFILE
========================= */
export const updateProfileApi = async (data) => {
    try {
        const response = await axiosInstance.put(
            "/users/update-profile",
            data
        );
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Profile update failed",
        };
    }
};

/* =========================
   ADD ADDRESS
========================= */
export const addAddressApi = async (data) => {
    try {
        const response = await axiosInstance.post(
            "/users/add-address",
            data
        );
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Add address failed",
        };
    }
};

/* =========================
   UPDATE ADDRESS
========================= */
export const updateAddressApi = async (index, data) => {
    try {
        const response = await axiosInstance.put(
            `/users/update-address/${index}`,
            data
        );
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Update address failed",
        };
    }
};
