import axios from "axios";

const API = "http://localhost:10000/api";

const axiosInstance = axios.create({
    baseURL: API,
    headers: {
        "Content-Type": "application/json",
    },
});

/* =========================
   REQUEST INTERCEPTOR
   → Attach JWT Token
========================= */
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/* =========================
   RESPONSE INTERCEPTOR
   → Auto Logout if 401
========================= */
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/signin";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
