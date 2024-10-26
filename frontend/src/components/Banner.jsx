import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { assets } from '../assets/assets';

const Banner = () => {
  const navigate = useNavigate(); // Correctly using useNavigate

  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-14 my-20 md:mx-10'>
      {/* -------left side---- */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div>
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>Book Appointment</p>
          <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>
        <button 
          onClick={() => { navigate('/login'); scrollTo(0, 0); }} // Changed to onClick
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:scale-105 transition-all duration-500'
        >
          Create Account
        </button>
      </div>
      {/* -------right side---- */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img
          className='w-full absolute bottom-0 right-0 max-w-md'
          src={assets.appointment_img}
          alt="Appointment Illustration" 
        />
      </div>
    </div>
  );
};

export default Banner;
