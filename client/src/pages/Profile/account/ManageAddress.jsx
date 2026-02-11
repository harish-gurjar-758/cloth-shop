import React from "react";
import Button from "@mui/material/Button";

export default function ManageAddress() {
  return (
    <div className="pt-[90px] min-h-screen bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow">
        <h2 className="text-2xl font-bold mb-6">Saved Addresses</h2>

        <div className="bg-gray-100 p-4 rounded-xl mb-4">
          <p className="font-semibold">Home</p>
          <p className="text-gray-600">
            21 Main Street, Jaipur, Rajasthan - 302001
          </p>
        </div>

        <Button variant="outlined" color="secondary">
          Add New Address
        </Button>
      </div>
    </div>
  );
}
