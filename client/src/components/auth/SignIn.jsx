import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignIn({ switchMode }) {
    const navigate = useNavigate();
    const { login } = useAuth();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(form);

        if (res.success) {
            setAlert({
                open: true,
                message: "Login Successful 🎉",
                severity: "success",
            });

            setTimeout(() => navigate("/profile"), 1000);
        } else {
            setAlert({
                open: true,
                message: res.message || "Login Failed",
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
