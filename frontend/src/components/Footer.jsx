import React from 'react'; 
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10 py-10 px-5 md:px-20'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm text-gray-700'>
        {/* ----left section---- */}
        <div className='flex flex-col gap-4'>
          <img className='w-40' src={assets.logo} alt='Flexability Logo' />
          <p className='w-full md:w-2/3 leading-6 text-justify'>
            <strong className='text-gray-900'>FLEXABILITY</strong> is a platform where donors can list their unused mobility aids, allowing those in need to request them for free.
            If an item isn’t used for months, it’s sold as a second-hand product to generate income, creating a sustainable cycle of aid and funding.
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

        {/* ----contact section---- */}
        <div className='flex flex-col gap-4'>
          <p className='text-lg font-semibold text-gray-900'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 list-none'>
            <li className='hover:text-gray-900 transition-all duration-300'>📞 01-23749272</li>
            <li className='hover:text-gray-900 transition-all duration-300'>✉️ support@flexability.com</li>
          </ul>
        </div>
      </div>

      {/* -----copyright-------- */}
      <div className='mt-10 text-center'>
        <p className='py-5 text-xs text-gray-600'>
          &copy; 2024 FLEXABILITY - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;