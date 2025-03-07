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
          src={assets.budo}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p className="leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">FlexAbility</span>,
            your trusted partner in managing your healthcare needs conveniently
            and efficiently. At Flex-ability, we believe in creating an inclusive 
            and accessible shopping experience for specially-abled individuals. 
            Our mission is to provide high-quality mobility aids and assistive
            devices that enhance independence, comfort, and confidence in everyday life
          </p>
          <p className="leading-relaxed">
           
          </p>
          <b className="text-xl font-semibold text-gray-800">Our Vision</b>
          <p className="leading-relaxed">
          We understand the challenges faced by individuals with disabilities, and we 
          strive to bridge the gap by offering a wide range of carefully curated products, 
          from wheelchairs and walking aids to smart assistive technology. Our platform is 
          designed with accessibility in mind, ensuring a seamless shopping experience for all users
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
          <b className="text-lg text-gray-800">Empowerment</b>
          <p>"Empowering you to make independent choices with ease. Our platform provides simple, straightforward navigation, enabling you to find what you need without barriers."</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Support</b>
          <p>Dedicated support at every step of your journey. From product selection to after-purchase care, our team is here to assist you with any questions or concerns</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Accessibility</b>
          <p>"Designed with accessibility in mind. Whether you have mobility, vision, or hearing challenges, our website ensures a smooth shopping experience through accessible features and easy-to-use design."</p>
        </div>
      </div>
    </div>
  );
};

export default About;