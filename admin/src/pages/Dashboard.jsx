import AdminLayout from "../components/AdminLayout";
import StatCard from "../components/StatCard";


export default function Dashboard() {
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            <div className="grid md:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value="₹1,25,000" />
                <StatCard title="Orders" value="320" />
                <StatCard title="Users" value="1450" />
                <StatCard title="Products" value="85" />
            </div>
        </AdminLayout>
    );
}
