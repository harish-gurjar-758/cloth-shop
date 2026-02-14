import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../Apis/Apis";

export default function SignUp({ switchMode }) {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = userData;

        if (!name || !email || !password) {
            return setAlert({
                open: true,
                message: "All fields are required!",
                severity: "error",
            });
        }

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);

            const res = await registerApi(formData);

            if (res.success && res.token) {
                localStorage.setItem('token', res.token);
                localStorage.setItem('uer', JSON.stringify(res.user));
                setAlert({
                    open: true,
                    message: res.message || "Registered successfully!",
                    severity: "success",
                });
            } else {
                setAlert({
                    open: true,
                    message: res.message || "Registered failed!",
                    severity: "error",
                })
            }

        } catch (error) {
            setAlert({
                open: true,
                message:
                    error.response?.data?.message ||
                    "Registration failed. Try again.",
                severity: "error",
            });
        }
    };

    return (
        <>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Create Account
            </Typography>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextField
                    label="Full Name"
                    name="name"
                    fullWidth
                    value={userData.name}
                    onChange={handleChange}
                />

                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    value={userData.email}
                    onChange={handleChange}
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    value={userData.password}
                    onChange={handleChange}
                />

                <Button variant="contained" type="submit" size="large">
                    Register
                </Button>

                <Typography variant="body2" textAlign="center">
                    Already have an account?{" "}
                    <span
                        onClick={switchMode}
                        className="text-blue-600 cursor-pointer"
                    >
                        Sign In
                    </span>
                </Typography>
            </form>

            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={() => setAlert({ ...alert, open: false })}
            >
                <Alert severity={alert.severity} sx={{ width: "100%" }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
}
