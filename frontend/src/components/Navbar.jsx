import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true); // Simulating user authentication
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <li className='py-1'> Home </li>
        </NavLink>

        <NavLink to="/doctors" className={({ isActive }) => (isActive ? "active" : "")}>
          <li className='py-1'> ALL DOCTORS </li>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          <li className='py-1'> ABOUT </li>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          <li className='py-1'> CONTACT </li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 relative'>
        {token ? (
          <div className='flex items-center gap-2'>
            <img src={assets.profile_pic} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" onClick={toggleDropdown} />
            <img src={assets.dropdown_icon} alt="Dropdown" className="w-4 h-4 cursor-pointer" onClick={toggleDropdown} />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className='absolute right-0 top-full transform translate-y-1 bg-white text-base font-medium text-gray-600 z-20 p-4 shadow-lg' style={{ width: '180px' }}>
                <p onClick={() => navigate('/my-profile')} className="cursor-pointer py-1 hover:text-primary">My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className="cursor-pointer py-1 hover:text-primary">My Appointments</p>
                <p onClick={() => setToken(false)} className="cursor-pointer py-1 hover:text-primary">Logout</p>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full hidden md:block'>
            Create account
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
