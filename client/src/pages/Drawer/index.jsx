import React from "react";

export default function Drawer() {
    return (
        <div className="pt-[75px] bg-gray-50 min-h-screen">

            {/* Page Header */}
            <section className="bg-pink-600 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Drawer Collection</h1>
                <p className="mt-3">Discover premium fashion for every occasion</p>
            </section>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 py-6 text-gray-600">
                Home / Shop / Drawer
            </div>

            {/* Main Section */}
            {/* Main Section */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 pb-20 relative">

                {/* Sidebar */}
                <aside className="md:w-1/4">
                    <div className="sticky top-[95px] bg-white p-6 rounded-xl shadow h-fit">

                        <h2 className="text-xl font-semibold mb-4">Filters</h2>

                        {/* Category */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Category</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" /> Men
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" /> Women
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" /> Kids
                                </label>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Price</h3>
                            <input type="range" className="w-full" />
                        </div>

                        {/* Size */}
                        <div>
                            <h3 className="font-medium mb-2">Size</h3>
                            <div className="flex gap-3 flex-wrap">
                                {["S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        className="border px-3 py-1 rounded hover:bg-pink-600 hover:text-white transition"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </aside>

                {/* Product Section */}
                <section className="md:w-3/4">

                    {/* Sort Bar */}
                    <div className="flex justify-between items-center mb-6">
                        <p>Showing 1–12 of 50 products</p>

                        <select className="border px-4 py-2 rounded">
                            <option>Default Sorting</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                        </select>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <div
                                key={item}
                                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/src/assets/mainBg.png"
                                        alt="Product"
                                        className="w-full h-64 object-cover rounded group-hover:scale-110 transition duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                                        SALE
                                    </span>
                                </div>

                                <h3 className="mt-4 font-semibold">Modern Hoodie</h3>
                                <p className="text-gray-500 line-through">₹2,999</p>
                                <p className="text-pink-600 font-bold">₹1,999</p>

                                <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>

                </section>
            </div>


            {/* Promo Banner */}
            <section className="bg-black text-white text-center py-16">
                <h2 className="text-3xl font-bold mb-4">
                    Extra 20% Off For Members
                </h2>
                <button className="bg-pink-600 px-8 py-3 rounded-full hover:scale-105 transition">
                    Join Now
                </button>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Subscribe For Latest Updates
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-6 py-3 rounded-full border outline-none w-full sm:w-80"
                    />
                    <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition">
                        Subscribe
                    </button>
                </div>
            </section>

        </div>
    );
}
