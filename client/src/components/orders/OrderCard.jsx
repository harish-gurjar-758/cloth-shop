import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Divider,
} from "@mui/material";

export default function OrderCard({ order, onClick }) {
  const getStatusColor = () => {
    switch (order.status) {
      case "Delivered":
        return "success";
      case "Shipped":
        return "info";
      case "Processing":
        return "warning";
      case "Cancelled":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Card className="rounded-3xl shadow hover:shadow-lg transition cursor-pointer">
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <Typography variant="h6" fontWeight="bold">
              Order ID: {order.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Placed on {order.date}
            </Typography>
            <Typography mt={1} fontWeight="bold">
              ₹{order.total}
            </Typography>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <Chip label={order.status} color={getStatusColor()} />
            <Button variant="contained" size="small" onClick={onClick}>
              View Details
            </Button>
          </div>
        </div>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" color="text.secondary">
          {order.items.length} Item(s)
        </Typography>
      </CardContent>
    </Card>
  );
}
