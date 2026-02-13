import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp({ switchMode }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
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

        if (!form.name || !form.email || !form.password) {
            return setAlert({
                open: true,
                message: "All fields are required!",
                severity: "error",
            });
        }

        try {
            await registerUser(form);

            setAlert({
                open: true,
                message: "Account Created Successfully 🎉",
                severity: "success",
            });

            setTimeout(() => {
                navigate("/profile");
            }, 1500);

        } catch (error) {
            setAlert({
                open: true,
                message: error,
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
                    onChange={handleChange}
                />
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
                <Alert severity={alert.severity}>{alert.message}</Alert>
            </Snackbar>
        </>
    );
}
