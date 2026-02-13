import React, { useState } from "react";
import {
  Avatar,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Switch,
} from "@mui/material";

import { FiMoreVertical, FiSearch } from "react-icons/fi";

const dummyUsers = [
  {
    id: "U001",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "U002",
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Customer",
    status: "Blocked",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "U003",
    name: "Michael Lee",
    email: "michael@example.com",
    role: "Customer",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function UserTable() {
  const [users, setUsers] = useState(dummyUsers);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading] = useState(false);

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleStatusToggle = (userId) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          User Management
        </h2>

        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search users..."
            className="bg-transparent outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <TableContainer component={Paper} className="rounded-xl shadow-none">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Toggle</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading
              ? Array.from(new Array(5)).map((_, index) => (
                  <TableRow key={index}>
                    {Array.from(new Array(5)).map((_, i) => (
                      <TableCell key={i}>
                        <Skeleton />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id} hover>

                      {/* USER INFO */}
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar src={user.avatar} />
                          <div>
                            <p className="font-medium text-gray-800">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>

                      {/* ROLE */}
                      <TableCell>
                        <Chip
                          label={user.role}
                          color={user.role === "Admin" ? "primary" : "default"}
                          size="small"
                        />
                      </TableCell>

                      {/* STATUS */}
                      <TableCell>
                        <Chip
                          label={user.status}
                          color={
                            user.status === "Active" ? "success" : "error"
                          }
                          size="small"
                        />
                      </TableCell>

                      {/* TOGGLE */}
                      <TableCell align="center">
                        <Switch
                          checked={user.status === "Active"}
                          onChange={() => handleStatusToggle(user.id)}
                          color="success"
                        />
                      </TableCell>

                      {/* ACTION */}
                      <TableCell align="right">
                        <IconButton
                          onClick={(e) => handleMenuClick(e, user)}
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
          count={filteredUsers.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) =>
            setRowsPerPage(parseInt(e.target.value, 10))
          }
        />
      </TableContainer>

      {/* ACTION MENU */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>View Profile</MenuItem>
        <MenuItem onClick={handleClose}>Edit User</MenuItem>
        <MenuItem onClick={handleClose} className="text-red-500">
          Delete User
        </MenuItem>
      </Menu>
    </div>
  );
}
