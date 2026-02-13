import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      return setError("Please fill all fields");
    }

    setLoading(true);

    // 🔥 Simulated API Call
    setTimeout(() => {
      // Example role validation
      if (
        form.email === "admin@example.com" &&
        form.password === "admin123"
      ) {
        localStorage.setItem("adminToken", "secure_admin_token");
        localStorage.setItem("adminRole", "ADMIN");

        navigate("/dashboard");
      } else {
        setError("Invalid admin credentials");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">

      <Paper elevation={4} className="p-8 w-full max-w-md rounded-2xl">

        {/* Header */}
        <div className="text-center mb-6">
          <Typography variant="h5" className="font-bold">
            Admin Panel Login
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Sign in to access dashboard
          </Typography>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          <TextField
            fullWidth
            label="Admin Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
            className="!py-3 !rounded-xl"
          >
            {loading ? <CircularProgress size={22} /> : "Login as Admin"}
          </Button>

        </form>
      </Paper>
    </div>
  );
}
