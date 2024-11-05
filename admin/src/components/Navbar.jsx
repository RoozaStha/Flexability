import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const logout = () => {
    // Clear admin token
    if (aToken) {
      setAToken('');
      localStorage.removeItem('aToken');
    }

    // Clear doctor token
    if (dToken) {
      setDToken(''); // Corrected from setdToken to setDToken
      localStorage.removeItem('dToken');
    }

    // Navigate to home
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center px-4 py-3 sm:px-6 md:px-10 lg:px-12 xl:px-16 transition-all duration-300 border-b bg-white ${
        isScrolled ? 'py-5 shadow-lg border-gray-300' : 'py-3'
      }`}
    >
      {/* Left Section - Logo and Role */}
      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
        <img
          className="w-28 sm:w-32 md:w-36 lg:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt="Admin Logo"
        />
        <p className="border px-2 py-1 rounded-full border-gray-500 text-gray-600 text-xs sm:text-sm md:text-base">
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>

      {/* Right Section - Logout Button */}
      <button
        onClick={logout}
        className="bg-primary text-white text-xs sm:text-sm md:text-base lg:text-lg px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
