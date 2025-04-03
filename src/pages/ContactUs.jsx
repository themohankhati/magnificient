import React from "react";
import Header from "../shared_components/Header";
import Footer from "../shared_components/Footer";
import Associations from "../shared_components/Associations";
import Newsletter from "../shared_components/Newsletter";

const contactUs = () => {

  return (
    <>
      <Header />
      <section className="bg-blue-100 h-[400px] flex flex-col items-center justify-center text-center p-6 w-full">
        {/* <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-gray-700 mt-2">
         
        </p> */}

        <img src="Contactus.png" alt="" />
      </section>
   

      <Newsletter />
      <Associations />
      <Footer />
    </>
  );
};

export default contactUs;
