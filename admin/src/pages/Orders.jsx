import AdminLayout from "../components/AdminLayout";
import OrderTable from "../components/OrderTable";


export default function AdminOrders() {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
            <OrderTable />
        </AdminLayout>
    );
}
