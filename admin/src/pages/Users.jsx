import AdminLayout from "../components/AdminLayout";
import UserTable from "../components/UserTable";

export default function AdminUsers() {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
            <UserTable />
        </AdminLayout>
    );
}
