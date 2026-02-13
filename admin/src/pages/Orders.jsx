import AdminLayout from "../../../../admin/src/components/AdminLayout";
import OrderTable from "../../../../admin/src/components/OrderTable";

export default function AdminOrders() {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
            <OrderTable />
        </AdminLayout>
    );
}
