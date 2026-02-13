import { Button } from "@mui/material";

export default function ProductTable() {
    const products = [
        { id: 1, name: "Denim Jacket", price: 2499, stock: 10 },
        { id: 2, name: "Sneakers", price: 1999, stock: 5 },
    ];

    return (
        <div className="bg-white rounded-3xl shadow p-6">
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p) => (
                        <tr key={p.id} className="border-t">
                            <td>{p.name}</td>
                            <td>₹{p.price}</td>
                            <td>{p.stock}</td>
                            <td className="space-x-2">
                                <Button variant="outlined" size="small">
                                    Edit
                                </Button>
                                <Button variant="contained" color="error" size="small">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
