import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center text-2xl font-semibold text-gray-500 mb-10">
        <p>
          CONTACT <span className="text-gray-700">US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <img
          src={assets.contact_image}
          alt="Contact Us"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left md:w-2/4 space-y-4 text-gray-600">
          <p className="text-xl font-semibold text-gray-800">Our OFFICE</p>
          <p>
            54709 Maitighar Heights <br /> Suite 250, Kathmandu, Nepal
          </p>
          <p>
            Tel: <span className="font-semibold">(+977) 1-555-0132</span> <br />
            Email:{" "}
            <a
              href="mailto:quickdoctor@example.com"
              className="text-blue-600 hover:underline"
            >
              quickdoctor@example.com
            </a>
          </p>
          <p className="text-xl font-semibold text-gray-800">Careers at QUICKDOCTOR</p>
          <p>Learn more about our teams and job openings.</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
