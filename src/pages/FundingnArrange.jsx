import React, { useState } from 'react';
import DonationRequestPage from './DonationRequestPage';
import DonationPage from './DonationPage';
import PolicyCompliance from './Policies'; // Import the PolicyCompliance component

const FundingnArrange = () => {
  const [showRequestDonationForm, setShowRequestDonationForm] = useState(false);
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false); // State for Policy modal

  // Function to handle form visibility
  const toggleForm = (formType) => {
    setShowRequestDonationForm(formType === 'request');
    setShowDonateForm(formType === 'donate');
    setShowPolicy(formType === 'policy'); // Toggle Policy modal
  };

  return (
    <div className="bg-blue-100 min-h-screen p-6">
      <header className="bg-blue-300 text-white p-4 flex justify-between items-center shadow-md">
        {/* Header content */}
      </header>

      <div className="flex p-6">
        {/* Sidebar with buttons */}
        <aside className="w-1/4 space-y-4">
          <button
            className="w-full bg-blue-400 text-white p-2 rounded"
            onClick={() => {}} // Do nothing when clicked
          >
            Available Donation
          </button>
          <button
            className="w-full bg-blue-400 text-white p-2 rounded"
            onClick={() => toggleForm('request')}
          >
            Request for Donation
          </button>
          <button
            className="w-full bg-blue-400 text-white p-2 rounded"
            onClick={() => toggleForm('donate')}
          >
            Want to donate?
          </button>
          <button
            className="w-full bg-blue-400 text-white p-2 rounded"
            onClick={() => toggleForm('policy')} // Toggle Policy modal
          >
            Policy and Standards
          </button>
        </aside>

        {/* Main content grid */}
        <main className="w-3/4 grid grid-cols-3 gap-4 p-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-md text-center border border-blue-200">
              <div className="bg-gray-300 h-32 rounded-md"></div>
              <p className="text-blue-600 font-semibold mt-2">Category One</p>
              <p className="text-blue-500 text-sm">Available</p>
              <p className="text-gray-600 text-xs">Select category</p>
            </div>
          ))}
        </main>
      </div>

      {/* Request for Donation Form Modal */}
      {showRequestDonationForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Request for Donation Form</h2>
            <DonationRequestPage />
            <button
              onClick={() => setShowRequestDonationForm(false)}
              className="mt-4 w-full bg-red-600 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* DonationPage Modal */}
      {showDonateForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Donation Form</h2>
            <DonationPage />
            <button
              onClick={() => setShowDonateForm(false)}
              className="mt-4 w-full bg-red-600 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Policy Modal */}
      {showPolicy && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <PolicyCompliance /> {/* Render the PolicyCompliance component */}
            <button
              onClick={() => setShowPolicy(false)}
              className="mt-4 w-full bg-red-600 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundingnArrange;