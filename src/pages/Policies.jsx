import React from 'react';

const PolicyCompliance = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Policy Compliance Guide</h1>
        
        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">1. Where to Keep the Policy in Your System</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Dedicated "Policies & Terms" page accessible from the footer.</li>
            <li>Users must agree before proceeding (checkbox in account creation, donation, or rental).</li>
            <li>Admins can update policies and notify users of changes.</li>
          </ul>
        </div>
        
        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">2. How Users Shall Ensure Policy Compliance</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Donors confirm understanding of donation policies before submitting.</li>
            <li>Renters accept terms before making a request.</li>
            <li>Admin monitors compliance and handles violations.</li>
          </ul>
        </div>
        
        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">3. Technical Implementation</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Checkboxes for policy agreement in modals or pop-ups.</li>
            <li>OTP-based digital signature for verification.</li>
            <li>Database logs for reference in case of disputes.</li>
            <li>Automated logs for tracking policy acceptance history.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">4. Policy Display & Acceptance</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Policies must be acknowledged upon signup.</li>
            <li>Users cannot proceed without checking the agreement box.</li>
            <li>Acceptance logs are stored for legal compliance.</li>
            <li>A summary of key policy points appears in a pop-up modal for easy review.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">5. Policy Compliance for Donations & Rentals</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Donors must confirm the usability and condition of donated items.</li>
            <li>Renters accept full responsibility for returning items in good condition.</li>
            <li>Security deposits may be required for rental agreements.</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">6. Admin Control & Monitoring</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Admins can view agreement status within the dashboard.</li>
            <li>Policy violations can trigger actions like warnings, suspensions, or user blacklisting.</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">7. Policy Updates & Notifications</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Users receive notifications when policy updates occur.</li>
            <li>Reacceptance of updated terms is required before continued usage.</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">8. Verification & Legal Compliance</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Users receive an email confirmation after accepting the policies.</li>
            <li>All agreements are recorded in the database for future reference.</li>
            <li>OTP-based verification can be enabled for legal security.</li>
          </ul>
        </div>

        {/* Final Note */}
        <div className="bg-blue-100 p-4 rounded-lg mt-6">
          <h2 className="text-lg font-semibold text-blue-700">Final Note</h2>
          <p className="text-gray-700 mt-2">
            By implementing these steps, WALKING WITH EXCLUDED ensures that users are well-informed of their responsibilities and agree to the terms before participating in donations or rentals.
          </p>
        </div>
        
        {/* Footer */}
        <div className="mt-10">
          <hr className="border-blue-300" />
          <p className="text-center text-gray-600 text-sm mt-4">&copy; 2024 WALKING WITH EXCLUDED - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyCompliance;