import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
        {/* ----left section---- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Flexability Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-5 text-sm text-justify'>
            <strong>FLEXABILITY</strong> is a platform where donors can list their unused mobility aids, allowing those in need to request them for free. 
            But here’s the twist: if an item isn’t used for months, it’s sold as a second-hand product to generate income. 
            This creates a sustainable cycle—helping those in need while funding the platform. 
            Currently, we’ve built a prototype website and are in talks with local NGOs and hospitals to pilot the project.
          </p>
        </div>

        {/* ----center section---- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600 list-disc pl-5'>
            <li><a href = "/">Home</a></li>
            <li><a href = "/about">About Us</a></li>
            <li><a href = "/contact">Contact Us</a></li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----right section---- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 list-disc pl-5'>
            <li>01-23749272</li>
            <li>support@flexability.com</li>
          </ul>
        </div>
      </div>

      {/* -----copyright-------- */}
      <div className='mt-10'>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ FLEXABILITY - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;