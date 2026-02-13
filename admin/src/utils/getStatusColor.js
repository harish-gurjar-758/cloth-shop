export const getStatusColor = (status) => {
    switch (status) {
        case "Delivered":
            return "success";
        case "Processing":
            return "warning";
        case "Cancelled":
            return "error";
        default:
            return "default";
    }
};
