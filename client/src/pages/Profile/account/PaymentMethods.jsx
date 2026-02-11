import React from "react";
import Button from "@mui/material/Button";

export default function PaymentMethods() {
    return (
        <div className="pt-[90px] min-h-screen bg-gray-50 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow">
                <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>

                <div className="bg-gray-100 p-4 rounded-xl mb-4 flex justify-between">
                    <div>
                        <p className="font-semibold">Visa **** 4242</p>
                        <p className="text-gray-600 text-sm">Expires 12/27</p>
                    </div>
                    <Button size="small" color="error">
                        Remove
                    </Button>
                </div>

                <Button variant="outlined" color="secondary">
                    Add Payment Method
                </Button>
            </div>
        </div>
    );
}
