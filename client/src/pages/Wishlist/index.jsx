import React, { useState, useMemo } from "react";
import {
    Button,
    IconButton,
    Alert,
    Snackbar,
    Divider,
    Badge,
    Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Wishlist() {
    /* ================= SAMPLE DATA ================= */
    const [wishlist, setWishlist] = useState([
        {
            id: 1,
            name: "Premium Denim Jacket",
            price: 2499,
            oldPrice: 2999,
            image:
                "https://images.unsplash.com/photo-1520975928316-3a2a8b6c2f6b?w=500",
            inStock: true,
        },
        {
            id: 2,
            name: "Casual Oversized T-Shirt",
            price: 999,
            oldPrice: 1299,
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
            inStock: false,
        },
    ]);

    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    /* ================= TOTAL CALCULATION ================= */
    const totalAmount = useMemo(() => {
        return wishlist.reduce((acc, item) => acc + item.price, 0);
    }, [wishlist]);

    /* ================= HANDLERS ================= */

    const showAlert = (message, severity = "success") => {
        setAlert({ open: true, message, severity });
    };

    const handleRemove = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
        showAlert("Item removed from wishlist", "info");
    };

    const handleAddToCart = (item) => {
        if (!item.inStock) {
            showAlert("Item is out of stock", "error");
            return;
        }

        setCart((prev) => [...prev, item]);
        showAlert("Item added to cart successfully");
    };

    const handleMoveAllToCart = () => {
        const inStockItems = wishlist.filter((item) => item.inStock);

        if (inStockItems.length === 0) {
            showAlert("No available items to move", "warning");
            return;
        }

        setCart((prev) => [...prev, ...inStockItems]);
        setWishlist((prev) => prev.filter((item) => !item.inStock));

        showAlert("All available items moved to cart");
    };

    /* ================= EMPTY STATE ================= */

    if (wishlist.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <FavoriteIcon sx={{ fontSize: 60, color: "#e91e63" }} />
                <h2 className="text-2xl font-semibold mt-4">Your Wishlist is Empty</h2>
                <p className="text-gray-500 mt-2">
                    Looks like you haven’t added anything yet.
                </p>
                <Button
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={() => showAlert("Redirect to shop page")}
                >
                    Continue Shopping
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            {/* ================= HEADER ================= */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">
                    My Wishlist
                    <Badge badgeContent={wishlist.length} color="secondary" sx={{ ml: 2 }} />
                </h2>

                <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={handleMoveAllToCart}
                >
                    Move All to Cart
                </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* ================= LEFT SECTION ================= */}
                <div className="lg:col-span-2 space-y-6">
                    {wishlist.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition"
                        >
                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-40 h-40 object-cover rounded-2xl"
                            />

                            {/* DETAILS */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-xl font-semibold">{item.name}</h4>

                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="text-lg font-bold text-secondary">
                                            ₹{item.price}
                                        </span>
                                        <span className="line-through text-gray-400">
                                            ₹{item.oldPrice}
                                        </span>
                                        <Chip
                                            label={`${Math.round(
                                                ((item.oldPrice - item.price) / item.oldPrice) * 100
                                            )}% OFF`}
                                            size="small"
                                            color="success"
                                        />
                                    </div>

                                    {!item.inStock && (
                                        <Alert severity="error" sx={{ mt: 2 }}>
                                            Currently Out of Stock
                                        </Alert>
                                    )}
                                </div>

                                {/* ACTION BUTTONS */}
                                <div className="flex gap-3 mt-4">
                                    <Button
                                        variant="contained"
                                        startIcon={<ShoppingCartIcon />}
                                        disabled={!item.inStock}
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to Cart
                                    </Button>

                                    <IconButton
                                        color="error"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= ORDER SUMMARY ================= */}
                <div className="bg-white rounded-3xl shadow-md p-6 h-fit">
                    <h3 className="text-xl font-semibold mb-4">Wishlist Summary</h3>
                    <Divider sx={{ mb: 3 }} />

                    <div className="flex justify-between mb-2">
                        <span>Total Items</span>
                        <span>{wishlist.length}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>Total Amount</span>
                        <span className="font-semibold">₹{totalAmount}</span>
                    </div>

                    <Divider sx={{ my: 3 }} />

                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        startIcon={<ShoppingCartIcon />}
                        onClick={handleMoveAllToCart}
                    >
                        Move All to Cart
                    </Button>
                </div>
            </div>

            {/* ================= SNACKBAR ================= */}
            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={() => setAlert({ ...alert, open: false })}
            >
                <Alert severity={alert.severity} variant="filled">
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
