import React from "react";
import { useState } from "react";

const faqs = [
  {
    question: "Why should I choose Magnificent Travels and Tours for my trip?",
    answer:
      "Magnificent Travels and Tours offers personalized service, experienced guides, and a commitment to making your trip unforgettable. We tailor our tours to meet your needs and ensure a safe and enjoyable experience.",
  },
  {
    question: "Is it safe to travel to Nepal, Bhutan, Tibet, or India post-COVID-19?",
    answer:
      "Yes, it is generally safe to travel to these destinations post-COVID-19. However, it's important to stay informed about the latest travel advisories and health guidelines. We prioritize your safety and follow all recommended protocols.",
  },
  {
    question: "What are the main trekking options in Nepal?",
    answer:
      "The main trekking options in Nepal include the Everest Base Camp Trek, Annapurna Circuit Trek, Langtang Valley Trek, and Manaslu Circuit Trek. Each trek offers unique landscapes and cultural experiences.",
  },
  {

    question: "Is food in the mountains safe for international travelers?",
    answer:
      "Yes, food in the mountains is generally safe for international travelers. We recommend eating at reputable lodges and tea houses, and drinking bottled or purified water to avoid any health issues.",
  },
  {
    question: "What is the best season to visit Nepal?",
    answer:
      "The best seasons to visit Nepal are spring (March to May) and autumn (September to November). These seasons offer pleasant weather, clear skies, and ideal trekking conditions.",
  },
  {
    question: "Do I need special permits to travel to Tibet?",
    answer:
      "Yes, you need special permits to travel to Tibet. These permits can be arranged through a registered travel agency. We handle all the necessary paperwork to ensure a smooth and hassle-free trip.",
  },
  {
    question: "What physical preparation is necessary for trekking?",
    answer:
      "Physical preparation for trekking includes regular cardiovascular exercise, strength training, and hiking practice. It's important to build stamina and endurance to handle the physical demands of trekking.",
  },
  {
    question: "What happens if I need to cancel my trip?",
    answer:
      "If you need to cancel your trip, please refer to our cancellation policy. We offer flexible options and will work with you to reschedule or refund your booking based on the terms and conditions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-center py-12">
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-13 relative inline-block">
          Frequently Asked Questions
          <span className="block w-20 h-1 bg-green-600 mt-2 mx-auto"></span>
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-2 bg-gray-100 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left text-base">{faq.question}</span>
                <span className="text-sm">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 text-left text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
