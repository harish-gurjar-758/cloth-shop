import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Snackbar,
    Alert,
} from "@mui/material";
import OrderDetailsDrawer from "../../components/orders/OrderDetailsDrawer";
import OrderCard from "../../components/orders/OrderCard";

export default function Orders() {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });

    /* ================= SAMPLE DATA ================= */
    const orders = [
        {
            id: "ORD123456",
            date: "10 Feb 2026",
            total: 4598,
            status: "Delivered",
            trackingSteps: 4,
            items: [
                {
                    name: "Premium Denim Jacket",
                    price: 2499,
                    qty: 1,
                    image: "https://images.unsplash.com/photo-1520975928316-3a2a8b6c2f6b?w=500",
                },
                {
                    name: "Casual T-Shirt",
                    price: 999,
                    qty: 2,
                    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
                },
            ],
            address: "Harish Gurjar, Jaipur, Rajasthan - 302001",
            paymentMethod: "UPI Payment",
        },
        {
            id: "ORD654321",
            date: "08 Feb 2026",
            total: 1999,
            status: "Shipped",
            trackingSteps: 3,
            items: [
                {
                    name: "Classic Sneakers",
                    price: 1999,
                    qty: 1,
                    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
                },
            ],
            address: "Harish Gurjar, Jaipur, Rajasthan - 302001",
            paymentMethod: "Cash on Delivery",
        },
    ];

    /* ================= HANDLERS ================= */

    const handleOpenOrder = (order) => {
        setSelectedOrder(order);
        setOpenDrawer(true);
    };

    return (
        <Box className="min-h-screen bg-gray-50 p-6 md:p-10">
            <Typography variant="h4" fontWeight="bold" mb={4}>
                My Orders
            </Typography>

            <Grid container spacing={3}>
                {orders.map((order) => (
                    <Grid item xs={12} key={order.id}>
                        <OrderCard order={order} onClick={() => handleOpenOrder(order)} />
                    </Grid>
                ))}
            </Grid>

            {/* Order Details Drawer */}
            <OrderDetailsDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                order={selectedOrder}
            />

            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={() => setAlert({ ...alert, open: false })}
            >
                <Alert severity={alert.severity}>{alert.message}</Alert>
            </Snackbar>
        </Box>
    );
}
