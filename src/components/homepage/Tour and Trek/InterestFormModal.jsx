import React, { useState } from "react";
import { createPortal } from "react-dom";

const InterestFormModal = ({ isOpen, onClose, tourTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    groupBooking: "no"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `Tour Interest: ${tourTitle}`;
    const emailBody = `Hello,

I'm interested in the ${tourTitle} tour package.

My Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Country: ${formData.country}
- Arrival Date: ${formData.arrivalDate || 'Not specified'}
- Departure Date: ${formData.departureDate || 'Not specified'}
- Group Booking: ${formData.groupBooking === 'yes' ? 'Yes' : 'No'}

Please contact me with more information and pricing details.

Best regards,
${formData.name}`;

    // Build Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@magnificenttravels.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');
    
    // Close modal and reset form
    onClose();
    setFormData({
      name: "",
      email: "",
      country: "",
      arrivalDate: "",
      departureDate: "",
      groupBooking: "no"
    });
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#14205c]">I'm Interested!</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700 mb-1">
                Approximate Arrival Date
              </label>
              <input
                type="date"
                id="arrivalDate"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleInputChange}
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                Approximate Departure Date
              </label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="groupBooking" className="block text-sm font-medium text-gray-700 mb-1">
                Group Booking
              </label>
              <select
                id="groupBooking"
                name="groupBooking"
                value={formData.groupBooking}
                onChange={handleInputChange}
                className="w-full px-3 py-[6px] text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>


            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default InterestFormModal;
