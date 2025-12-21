import React, { useState } from "react";
import InterestFormModal from "./InterestFormModal";
import ShareTourModal from "./ShareTourModal";

const BookingCard = ({ tourTitle = "Tour Package" }) => {
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleTalkToExpert = () => {
    const emailSubject = `Inquiry about ${tourTitle}`;
    const emailBody = `Hello,

I'm interested in learning more about the ${tourTitle}.

Please contact me with more information and pricing details.

Best regards`;

    // Build Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=magnific@mail.com.np&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <div className="bg-gray-50 rounded-md shadow-md p-4 sm:p-6 text-center mt-6 sm:mt-8 lg:mt-10 w-full">
        <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-[#14205c]">Price: Contact Us</div>
        <div className="text-xs sm:text-sm text-gray-600 mb-6">
          Get a personalized quote for your perfect adventure
        </div>

        {/* Main Action Buttons */}
        <div className="space-y-3 mb-6">
          <button 
            onClick={() => setShowInterestModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md w-full text-sm sm:text-base transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            I'm Interested
          </button>

          <button 
            onClick={handleTalkToExpert}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md w-full text-sm sm:text-base transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Talk to an Expert
          </button>

          <button 
            onClick={() => setShowShareModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md w-full text-sm sm:text-base transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Share This Tour
          </button>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-200 pt-4">
          <div className="text-sm font-medium text-gray-700 mb-2">Direct Contact</div>
          <div className="text-xs sm:text-sm text-gray-600 mb-2">
            <a href="tel:+97714523218" className="hover:text-green-600 transition-colors">
              +977 1 4523218
            </a>
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            <a href="mailto:magnific@mail.com.np" className="hover:text-green-600 transition-colors">
            magnific@mail.com.np
            </a>
          </div>
        </div>
      </div>

      {/* Modals */}
      <InterestFormModal 
        isOpen={showInterestModal} 
        onClose={() => setShowInterestModal(false)} 
        tourTitle={tourTitle}
      />
      
      <ShareTourModal 
        isOpen={showShareModal} 
        onClose={() => setShowShareModal(false)} 
        tourTitle={tourTitle}
      />
    </>
  );
};

export default BookingCard;
