import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center text-3xl font-semibold text-gray-700">
        <p>
          ABOUT <span className="text-blue-600 font-bold">US</span>
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center md:flex-row gap-12">
        <img
          className="w-full max-w-sm rounded-lg shadow-lg transition-transform transform hover:scale-105"
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p className="leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">QuickDoctor</span>,
            your trusted partner in managing your healthcare needs conveniently
            and efficiently. At QuickDoctor, we understand the challenges
            individuals face when it comes to scheduling doctor appointments and
            managing their health records.
          </p>
          <p className="leading-relaxed">
            QuickDoctor is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you’re booking your first appointment or managing
            ongoing care, QuickDoctor is here to support you every step of the
            way.
          </p>
          <b className="text-xl font-semibold text-gray-800">Our Vision</b>
          <p className="leading-relaxed">
            Our vision at QuickDoctor is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="text-center text-2xl font-semibold text-gray-700 mt-16">
        <p>
          WHY <span className="text-blue-600 font-bold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
