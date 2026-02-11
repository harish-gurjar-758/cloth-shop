import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="pt-[75px] min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-100">

        <header className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="text-center md:text-left space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Your <span className="text-pink-600">Fashion Style</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Upgrade your wardrobe with the latest trends in clothing.
              Premium quality. Affordable prices. Fast delivery.
            </p>

            <Link
              to="/shop"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transition duration-300"
            >
              Shop Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/src/assets/mainBg.png"
              alt="Fashion"
              className="w-[300px] md:w-[450px] object-contain animate-float"
            />
          </div>

        </header>

      </div>

      {/* --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Men", "Women", "Kids", "Accessories"].map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src="/src/assets/mainBg.png"
                  alt={item}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition duration-300"
              >
                <img
                  src="/src/assets/mainBg.png"
                  alt="Product"
                  className="w-full h-60 object-cover rounded-md"
                />

                <h3 className="mt-4 font-semibold">Stylish Jacket</h3>
                <p className="text-pink-600 font-bold">₹1,999</p>

                <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          50% OFF On Summer Collection
        </h2>
        <p className="mb-6 text-lg">
          Limited Time Offer. Don’t Miss Out!
        </p>

        <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Shop Now
        </button>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We provide high quality fabrics and trendy designs.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and secure delivery across India.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                7-day hassle-free return policy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get updates about new arrivals and special offers.
        </p>

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

    </>
  );
}
