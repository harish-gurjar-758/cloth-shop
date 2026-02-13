import AdminLayout from "../components/AdminLayout";


export default function Analytics() {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Sales Analytics</h1>

            <div className="bg-white rounded-3xl p-6 shadow">
                Chart Section (Connect with Recharts or Chart.js)
            </div>
        </AdminLayout>
    );
}
