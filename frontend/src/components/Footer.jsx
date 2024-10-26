import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
        {/* ----left section---- */}
        <div>
          <img className='mb-5 w-40'src={assets.logo} alt="QuickDoctor Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-5 text-sm text-justify'>
          QuickDoctor is an innovative online platform that simplifies booking doctor appointments. Connect with trusted healthcare professionals, browse profiles, and schedule visits with just a few clicks. Our user-friendly interface ensures easy access to quality healthcare, empowering you to manage your health conveniently. Experience hassle-free appointments and take charge of your well-being with QuickDoctor!</p>
        </div>

        {/* ----center section---- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className=' flex flex-col gap-2 text-gray-600 list-disc pl-5'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----right section---- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className=' flex flex-col gap-2 text-gray-600 list-disc pl-5'>
            <li>01-23749272</li>
            <li>QuickDoctor@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -----copyright-------- */}
      <div className='mt-10'>
        <hr />
        <p className=' py-5 text-sm text-center'>
          Copyright 2024 @ QuickDoctor - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
