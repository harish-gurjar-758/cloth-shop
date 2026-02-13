import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Chip,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Skeleton,
} from "@mui/material";

import { FiMoreVertical, FiSearch } from "react-icons/fi";

const dummyOrders = [
    {
        id: "#ORD-1001",
        customer: "John Doe",
        date: "2026-02-01",
        amount: "$240",
        status: "Delivered",
    },
    {
        id: "#ORD-1002",
        customer: "Sarah Smith",
        date: "2026-02-03",
        amount: "$120",
        status: "Pending",
    },
    {
        id: "#ORD-1003",
        customer: "Michael Lee",
        date: "2026-02-05",
        amount: "$560",
        status: "Cancelled",
    },
];

export default function OrderTable() {
    const [orders] = useState(dummyOrders);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [search, setSearch] = useState("");
    const [loading] = useState(false);

    const handleMenuClick = (event, order) => {
        setAnchorEl(event.currentTarget);
        setSelectedOrder(order);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedOrder(null);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredOrders = orders.filter((order) =>
        order.customer.toLowerCase().includes(search.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status) {
            case "Delivered":
                return "success";
            case "Pending":
                return "warning";
            case "Cancelled":
                return "error";
            default:
                return "default";
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            {/* HEADER SECTION */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Recent Orders
                </h2>

                <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl">
                    <FiSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search customer..."
                        className="bg-transparent outline-none text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* TABLE SECTION */}
            <TableContainer component={Paper} className="rounded-xl shadow-none">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {loading
                            ? Array.from(new Array(5)).map((_, index) => (
                                <TableRow key={index}>
                                    {Array.from(new Array(6)).map((_, i) => (
                                        <TableCell key={i}>
                                            <Skeleton />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                            : filteredOrders
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((order) => (
                                    <TableRow
                                        key={order.id}
                                        hover
                                        className="transition duration-200"
                                    >
                                        <TableCell className="font-medium text-gray-700">
                                            {order.id}
                                        </TableCell>
                                        <TableCell>{order.customer}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.amount}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={order.status}
                                                color={getStatusColor(order.status)}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                onClick={(e) => handleMenuClick(e, order)}
                                            >
                                                <FiMoreVertical />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                    </TableBody>
                </Table>

                {/* PAGINATION */}
                <TablePagination
                    component="div"
                    count={filteredOrders.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>

            {/* ACTION MENU */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>View</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose} className="text-red-500">
                    Delete
                </MenuItem>
            </Menu>
        </div>
    );
}
