import React from "react";
import {
    Drawer,
    Box,
    Typography,
    Divider,
    Stepper,
    Step,
    StepLabel,
    Button,
} from "@mui/material";

const steps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Delivered",
];

export default function OrderDetailsDrawer({ open, onClose, order }) {
    if (!order) return null;

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box width={400} p={4} className="bg-gray-50 min-h-screen">
                <Typography variant="h6" fontWeight="bold">
                    Order Details
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Tracking Stepper */}
                <Typography fontWeight="bold" mb={2}>
                    Track Order
                </Typography>

                <Stepper activeStep={order.trackingSteps - 1} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label} completed={index < order.trackingSteps}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Divider sx={{ my: 3 }} />

                {/* Items List */}
                <Typography fontWeight="bold" mb={2}>
                    Items
                </Typography>

                {order.items.map((item, i) => (
                    <Box key={i} className="flex gap-3 mb-4 bg-white p-3 rounded-xl shadow">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                            <Typography fontWeight="500">{item.name}</Typography>
                            <Typography variant="body2">
                                ₹{item.price} × {item.qty}
                            </Typography>
                        </div>
                    </Box>
                ))}

                <Divider sx={{ my: 3 }} />

                {/* Shipping Info */}
                <Typography fontWeight="bold">Shipping Address</Typography>
                <Typography variant="body2" mt={1}>
                    {order.address}
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Payment */}
                <Typography fontWeight="bold">Payment Method</Typography>
                <Typography variant="body2" mt={1}>
                    {order.paymentMethod}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Button fullWidth variant="contained" color="secondary">
                    Need Help?
                </Button>
            </Box>
        </Drawer>
    );
}
