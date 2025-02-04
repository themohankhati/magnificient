import React from "react";

const Newsletter = () => {
    return (
      <section className="bg-[#002366] text-white py-12 text-center">
        <div className="max-w-2xl mx-auto pb-6">
          <h2 className="text-3xl font-bold mb-12">SIGN UP FOR OUR NEWSLETTER</h2>
          <form className="flex justify-center items-center gap-5">
            <input
              type="text"
              className="p-4 border-none rounded-md w-64 h-15 text-black bg-white"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="p-4 border-none rounded-md w-64 h-15 text-black bg-white"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="p-4 bg-green-600 text-white rounded-md text-lg h-15 hover:bg-green-700"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Newsletter;