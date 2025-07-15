import React from "react";
import Header from "../shared_components/Header";
import Footer from "../shared_components/Footer";
import Associations from "../shared_components/Associations";
import Newsletter from "../shared_components/Newsletter";
import MapSection from "../components/MapSection";

const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="bg-blue-100 py-12 px-4 flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold mb-2 text-blue-900">Contact Us</h1>
        <p className="text-gray-700 mb-8 max-w-2xl text-center">
          We would love to hear from you! Whether you have a question about tours, pricing, or anything else, our team
          is ready to answer all your questions.
        </p>
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 justify-center items-start">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8 flex-1 min-w-[280px]">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Get in Touch</h2>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/Images/phone-icon.png"
                alt="Phone"
                className="h-6 w-6"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span className="text-gray-800 font-medium">+977 1 4523218, 4529264</span>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/Images/google-logo.png" alt="Email" className="h-6 w-6" />
              <span className="text-gray-800 font-medium">info@magnificenttravels.com</span>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/Images/Magnificent logo.png" alt="Location" className="h-6 w-6" />
              <span className="text-gray-800 font-medium">Kathmandu, Nepal</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" title="Facebook">
                <img src="/Images/Facebook-logo.png" alt="Facebook" className="h-7 w-7" />
              </a>
              <a href="#" title="Instagram">
                <img src="/Images/instagram-logo.png" alt="Instagram" className="h-7 w-7" />
              </a>
              <a href="#" title="X">
                <img src="/Images/x-logo.png" alt="X" className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-lg shadow-md p-8 flex-1 min-w-[280px]" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Send Us a Message</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Map Section */}
        <div className="w-full max-w-5xl mt-10">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Our Location</h2>
          <MapSection />
        </div>
      </section>
      <Newsletter />
      <Associations />
      <Footer />
    </>
  );
};

export default ContactUs;
