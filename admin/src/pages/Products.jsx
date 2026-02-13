import AdminLayout from "../../../../admin/src/components/AdminLayout";
import ProductTable from "../../../../admin/src/components/ProductTable";

export default function AdminProducts() {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
            <ProductTable />
        </AdminLayout>
    );
}
