import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How long does delivery take?",
    answer:
      "Orders are delivered within 3–5 business days across India. Express delivery is available in selected cities.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day hassle-free return policy. Products must be unused and in original packaging.",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, Cash on Delivery is available on eligible orders across India.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking link via SMS and email.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-4">
            Everything you need to know about our products & services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQItem({ item, isOpen, onClick }) {
  const contentRef = useRef();

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">
          {item.question}
        </span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-pink-600" : ""
          }`}
        />
      </button>

      {/* Answer */}
      <div
        ref={contentRef}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>

    </div>
  );
}
