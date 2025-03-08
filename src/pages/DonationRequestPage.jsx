import React, { useState } from 'react';

const DonationRequestPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    residentialAddress: '',
    reasonForRequest: '',
    assistanceType: '',
    monthlyIncome: '',
    isReceivingAid: '',
    referenceName: '',
    referenceContact: '',
    supportingDocument: null,
    declaration: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required';
    if (!formData.residentialAddress) newErrors.residentialAddress = 'Residential Address is required';
    if (!formData.reasonForRequest) newErrors.reasonForRequest = 'Reason for Request is required';
    if (!formData.assistanceType) newErrors.assistanceType = 'Type of Assistance is required';
    if (!formData.monthlyIncome) newErrors.monthlyIncome = 'Monthly Income is required';
    if (!formData.isReceivingAid) newErrors.isReceivingAid = 'Please specify if you are receiving aid';
    if (!formData.referenceName) newErrors.referenceName = 'Reference Name is required';
    if (!formData.referenceContact) newErrors.referenceContact = 'Reference Contact is required';
    if (!formData.declaration) newErrors.declaration = 'You must agree to the declaration';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        residentialAddress: '',
        reasonForRequest: '',
        assistanceType: '',
        monthlyIncome: '',
        isReceivingAid: '',
        referenceName: '',
        referenceContact: '',
        supportingDocument: null,
        declaration: false,
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb', textAlign: 'center', marginBottom: '20px' }}></h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.fullName && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.email}</p>}
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your contact number"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.contactNumber && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.contactNumber}</p>}
          </div>

          {/* Residential Address */}
          <div>
            <label htmlFor="residentialAddress" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Residential Address</label>
            <textarea
              id="residentialAddress"
              name="residentialAddress"
              value={formData.residentialAddress}
              onChange={handleChange}
              placeholder="Enter your residential address"
              rows="4"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.residentialAddress && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.residentialAddress}</p>}
          </div>

          {/* Reason for Request */}
          <div>
            <label htmlFor="reasonForRequest" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Reason for Requesting Donation</label>
            <textarea
              id="reasonForRequest"
              name="reasonForRequest"
              value={formData.reasonForRequest}
              onChange={handleChange}
              placeholder="Explain the reason for requesting donation"
              rows="4"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.reasonForRequest && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.reasonForRequest}</p>}
          </div>

          {/* Type of Assistance Needed */}
          <div>
            <label htmlFor="assistanceType" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Type of Assistance Needed</label>
            <select
              id="assistanceType"
              name="assistanceType"
              value={formData.assistanceType}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            >
              <option value="">Select type of assistance</option>
              <option value="money">Money</option>
              <option value="wheelchair">Wheelchair</option>
              <option value="crutches">Crutches</option>
              <option value="hearing_aids">Hearing Aids</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>
            {errors.assistanceType && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.assistanceType}</p>}
          </div>

          {/* Monthly Income */}
          <div>
            <label htmlFor="monthlyIncome" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Monthly Income (if any)</label>
            <input
              type="number"
              id="monthlyIncome"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              placeholder="Enter your monthly income"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.monthlyIncome && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.monthlyIncome}</p>}
          </div>

          {/* Are you receiving any other aid? */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Are you receiving any other aid?</label>
            <div style={{ display: 'flex', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="radio"
                  name="isReceivingAid"
                  value="Yes"
                  checked={formData.isReceivingAid === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="radio"
                  name="isReceivingAid"
                  value="No"
                  checked={formData.isReceivingAid === 'No'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
            {errors.isReceivingAid && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.isReceivingAid}</p>}
          </div>

          {/* Reference Person Name */}
          <div>
            <label htmlFor="referenceName" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Reference Person Name</label>
            <input
              type="text"
              id="referenceName"
              name="referenceName"
              value={formData.referenceName}
              onChange={handleChange}
              placeholder="Enter reference person name"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.referenceName && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.referenceName}</p>}
          </div>

          {/* Reference Person Contact */}
          <div>
            <label htmlFor="referenceContact" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Reference Person Contact</label>
            <input
              type="tel"
              id="referenceContact"
              name="referenceContact"
              value={formData.referenceContact}
              onChange={handleChange}
              placeholder="Enter reference person contact"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
            {errors.referenceContact && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.referenceContact}</p>}
          </div>

          {/* Supporting Document Upload */}
          <div>
            <label htmlFor="supportingDocument" style={{ display: 'block', marginBottom: '8px', color: '#2563eb' }}>Supporting Document Upload</label>
            <input
              type="file"
              id="supportingDocument"
              name="supportingDocument"
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
            />
          </div>

          {/* Declaration */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb' }}>
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                required
              />
              I confirm that the information provided is true.
            </label>
            {errors.declaration && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.declaration}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' }}
            >
              Submit Donation Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationRequestPage;