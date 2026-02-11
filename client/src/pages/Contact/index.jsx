import React from "react";
import FaqSection from "../../components/Contact/FaqSection";

export default function Contact() {
    return (
        <div className="pt-[75px] bg-gray-50 min-h-screen">

            {/* 1️⃣ Page Header */}
            <section className="bg-pink-600 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-3">We’d love to hear from you</p>
            </section>

            {/* 2️⃣ Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 py-6 text-gray-600">
                Home / Contact
            </div>

            {/* 3️⃣ Contact Info Cards */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

                <div className="bg-white p-8 rounded-xl shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
                    <p>Jaipur, Rajasthan, India</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
                    <p>+91 98765 43210</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow text-center">
                    <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
                    <p>support@beautyclothsshop.com</p>
                </div>

            </section>

            {/* 4️⃣ Contact Form + Map */}
            <section className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 mb-20">

                {/* Contact Form */}
                <div className="md:w-1/2 bg-white p-8 rounded-xl shadow">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="md:w-1/2 bg-white p-4 rounded-xl shadow">
                    <iframe
                        title="map"
                        className="w-full h-full min-h-[350px] rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.465!2d75.7873!3d26.9124"
                        loading="lazy"
                    ></iframe>
                </div>

            </section>

            {/* 5️⃣ FAQ Section */}
            <FaqSection />

            {/* 6️⃣ Social Media */}
            <section className="py-16 text-center bg-gray-100">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>

                <div className="flex justify-center gap-6 text-2xl">
                    <span className="cursor-pointer hover:text-pink-600 transition">🌐</span>
                    <span className="cursor-pointer hover:text-pink-600 transition">📸</span>
                    <span className="cursor-pointer hover:text-pink-600 transition">📘</span>
                </div>
            </section>

            {/* 7️⃣ Support CTA Banner */}
            <section className="bg-black text-white text-center py-16">
                <h2 className="text-3xl font-bold mb-4">
                    Need Immediate Assistance?
                </h2>
                <button className="bg-pink-600 px-8 py-3 rounded-full hover:scale-105 transition">
                    Chat With Support
                </button>
            </section>

            {/* 8️⃣ Newsletter */}
            <section className="py-20 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Subscribe For Updates
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
