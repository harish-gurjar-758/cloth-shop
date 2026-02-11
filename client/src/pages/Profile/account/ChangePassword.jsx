import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className="pt-[90px] min-h-screen bg-gray-50 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow">
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>

        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="password"
            placeholder={key.replace(/([A-Z])/g, " $1")}
            className="w-full p-3 border rounded-xl mb-4 focus:ring-2 focus:ring-pink-500 outline-none"
          />
        ))}

        <Button variant="contained" color="secondary" fullWidth>
          Update Password
        </Button>
      </div>
    </div>
  );
}
