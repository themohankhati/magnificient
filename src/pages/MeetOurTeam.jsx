import React from 'react';
import Header from "../shared_components/Header";
import Footer from "../shared_components/Footer";
import Associations from "../shared_components/Associations";
import NewsLetter from "../shared_components/Newsletter";

const MeetOurTeam = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <section className="bg-blue-100 h-[400px] flex flex-col items-center justify-center text-center p-6 w-full">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-gray-700 mt-2">[RANDOM COMPANY AND PEOPLE PICTURES]</p>
      </section>

      <div className="bg-gray-50 shadow-md object-cover container mx-auto px-4  w-full">
      <section className="max-w-5xl mx-auto text-left px-6 mt-14 w-full">
        <h2 className="text-3xl font-bold pt-20">
          The Power Behind <span className="text-blue-900">Magnificence</span>: Meet Our Team
        </h2>  
        <p className="text-gray-600 mt-6">
          At Magnificent Travels, our team is the heartbeat of our success—driven by passion,
          expertise, and an unwavering commitment to excellence. From operations and finance to
          sales and customer experience, each member plays a vital role in crafting seamless and
          unforgettable journeys for our clients.
        </p>
        <p className="text-gray-600 mt-4">
          We are more than just a team; we are explorers, storytellers, and visionaries, united by a
          love for travel and a shared mission to redefine the way the world experiences adventure.
          With years of expertise and an ever-growing portfolio of extraordinary destinations, we
          continue to push the boundaries of travel, curating experiences that are as remarkable as
          the places we take you.
        </p>
        <p className="text-gray-600 mt-4">
          Join us on this journey—because at Magnificent Travels, the world is not just a
          destination; it’s a masterpiece waiting to be explored.
        </p>
      </section>
      

      <section className="max-w-5xl mx-auto grid grid-cols-3 gap-10 mt-12 pb-25">
  {[
    {
      name: "Badri Prasad Rijal",
      position: "Managing Director",
      image: "/path/to/image1.jpg",
    },
    {
      name: "Govinda Prasad Paudyal",
      position: "Director",
      image: "/path/to/image2.jpg",
      
    },
    {
      name: "Manoj panta",
      position: "Chief Executive Officer",
      image: "/path/to/image3.jpg",
      
    },
    {
      name: "Mohan Khati",
      position: "HR Director",
      image: "/path/to/image4.jpg",
    },
    {
      name: "Aagya kumari Jha",
      position: "Operations Manager",
      image: "/path/to/image5.jpg",
    },
    {
      name: "Aarjan Adhikari",
      position: "Marketing Head",
      image: "/path/to/image6.jpg",
    },
  ].map((staff, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={staff.image}
        alt={staff.name}
        className="w-60 h-60 rounded-xl shadow-md object-cover"
      />
      <h3 className="font-bold mt-4">{staff.name}</h3>
      <p className="text-gray-500">{staff.position}</p>
    </div>
    
  ))}
</section>
</div>


<div className="container mx-auto px-4  w-full">
<section className="max-w-5xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-left">
    A Message From <span className="text-blue-900">Our Director</span>
  </h2>
  <div className="grid grid-cols-4 gap-1 mt-8 pr-40">
    <img
      src="director1.jpg"
      alt="Director 1"
      className="col-span-2 row-span-2 w-100 h-100 object-cover rounded-xl shadow-md gap-1"
    />
    <img
      src="director2.jpg"
      alt="Director 2"
      className="w-100 h-50 object-cover rounded-xl shadow-md"
    />
    <img
      src="director3.jpg"
      alt="Director 3"
      className="w-100 h-50 object-cover rounded-xl shadow-md"
    />
    <img
      src="director4.jpg"
      alt="Director 4"
      className="w-100 h-50 object-cover rounded-xl shadow-md"
    />
    <img
      src="director5.jpg"
      alt="Director 5"
      className="w-100 h-50 object-cover rounded-xl shadow-md"
    />
  </div>
  <div className="mt-6 text-gray-600">
    <p>Dear Guest,</p>
    <p className="mt-4">
      We, Magnificent Travels and Tours Pvt. Ltd., Kathmandu, welcome you to Nepal, the magnificent Himalayan country with inexhaustible natural, cultural, and adventurous treasures. We have been dedicated to providing best services to our valued clients since our establishment in 1995, putting every single effort to make their trips memorable.
    </p>
    <p className="mt-4">
      Rich in nature and culture, events and festivals, flora and fauna, art and architecture, Nepal boasts of being an awe-inspiring destination in all aspects. It has been fascinating foreigners for more than half a century and continues to do so now and in the future. People from all over the world with different tastes, interests, and purses are fully satisfied once they experience their stay in Nepal.
    </p>
    <p className="mt-4">
      We uphold the belief that every guest must go back as a friend. That is the reason why we are so honored to get the opportunity to organize trips of repeat visitors. We try to design the itinerary of our valued guests as per their interests with maximum possible flexibility so that everyone can feel his/her wish fulfilled. We hold this reputation unabated since we started our service two decades ago.
    </p>
    <p className="mt-4">
      We are proud to share our firm conviction of CSR (Corporate Social Responsibility). We have been involved in supporting some underprivileged class of society in some districts for building drinking water taps, toilets, and schools and sponsoring some marginalized children for their education. This gives us immense pleasure and satisfaction to be close to rural and backward communities and to help them with whatever we can.
    </p>
    <p className="mt-4">
      We believe in sustainable and responsible tourism and motivate others to do the same, because we hold a philosophy that tourism must be for us and for others; now and future. We welcome our valued guests to Nepal and assure them of our fully dedicated services so as to make their trip in Nepal an experience of a lifetime.
    </p>
    <p className="mt-4">Thank you.</p>
    <p className="mt-4 font-bold">Badri Prasad Rijal</p>
    <p>Managing Director</p>
  </div>
</section>

</div>

      <Associations />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default MeetOurTeam;
