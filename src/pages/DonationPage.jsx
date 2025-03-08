import React, { useState } from 'react';

const DonationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    donationType: '',
    amount: '',
    itemType: '',
    itemCondition: '',
    serviceType: '',
    availability: '',
    message: '',
    isAnonymous: false,
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Form Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center"></h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donor Information */}
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your contact number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700"> Address</label>
            <input
              type="tel"
              id="Address"
              name="Address"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        

        {/* Donation Type */}
        <div>
          <label htmlFor="donationType" className="block text-sm font-medium text-gray-700">Donation Type</label>
          <select
            id="donationType"
            name="donationType"
            value={formData.donationType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select donation type</option>
            <option value="money">Money</option>
            <option value="items">Items</option>
            <option value="services">Services</option>
          </select>
        </div>

        {/* Money Donation */}
        {formData.donationType === 'money' && (
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (in USD)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        )}

        {/* Item Donation */}
        {formData.donationType === 'items' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Item Type</label>
              <input
                type="text"
                id="itemType"
                name="itemType"
                value={formData.itemType}
                onChange={handleChange}
                placeholder="Enter item type (e.g., wheelchair)"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="itemCondition" className="block text-sm font-medium text-gray-700">Item Condition</label>
              <select
                id="itemCondition"
                name="itemCondition"
                value={formData.itemCondition}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
          </div>
        )}

        {/* Service Donation */}
        {formData.donationType === 'services' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                placeholder="Enter service type (e.g., volunteering)"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
              <input
                type="text"
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="Enter availability (e.g., weekends)"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Add a personal message (optional)"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          />
        </div>

        {/* Anonymous Donation */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isAnonymous"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="isAnonymous" className="ml-2 block text-sm text-gray-700">Donate anonymously</label>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">I agree to the terms and conditions</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default DonationPage;