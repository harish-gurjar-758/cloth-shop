import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignIn({ switchMode }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!form.email || !form.password) {
            return setAlert({
                open: true,
                message: "All fields are required!",
                severity: "error",
            });
        }

        // FAKE LOGIN LOGIC (Replace with API)
        if (form.email === "admin@gmail.com" && form.password === "123456") {
            setAlert({
                open: true,
                message: "Login Successful 🎉",
                severity: "success",
            });

            setTimeout(() => {
                navigate("/profile"); // REDIRECT AFTER LOGIN
            }, 1500);
        } else {
            setAlert({
                open: true,
                message: "Invalid Credentials!",
                severity: "error",
            });
        }
    };

    return (
        <>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Sign In
            </Typography>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    onChange={handleChange}
                />

                <Button variant="contained" type="submit" size="large">
                    Login
                </Button>

                <Typography variant="body2" textAlign="center">
                    Don't have an account?{" "}
                    <span
                        onClick={switchMode}
                        className="text-blue-600 cursor-pointer"
                    >
                        Sign Up
                    </span>
                </Typography>
            </form>

            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={() => setAlert({ ...alert, open: false })}
            >
                <Alert severity={alert.severity}>{alert.message}</Alert>
            </Snackbar>
        </>
    );
}
