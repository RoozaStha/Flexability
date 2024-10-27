import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const MenuItem = ({ to, onClick, children }) => (
  <NavLink to={to} onClick={onClick} className="px-4 py-2 rounded inline-block hover:text-primary">
    {children}
  </NavLink>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Simulating user authentication
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      {/* Logo with a fixed size, slight enlargement, and rounded shape */}
      <img 
        onClick={() => navigate('/')} 
        className='w-48 h-20 object-cover cursor-pointer' 
        src={assets.logo} 
        alt="Logo" 
      />
      
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <MenuItem to="/" onClick={() => setShowMenu(false)}>HOME</MenuItem>
        <MenuItem to="/doctors" onClick={() => setShowMenu(false)}>ALL DOCTORS</MenuItem>
        <MenuItem to="/about" onClick={() => setShowMenu(false)}>ABOUT</MenuItem>
        <MenuItem to="/contact" onClick={() => setShowMenu(false)}>CONTACT</MenuItem>
      </ul>

      <div className='flex items-center gap-4 relative'>
        {token ? (
          <div className='flex items-center gap-2'>
            <img 
              src={assets.profile_pic} 
              alt="Profile" 
              className="w-8 h-8 rounded-full cursor-pointer" 
              onClick={toggleDropdown} 
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            />
            <img 
              src={assets.dropdown_icon} 
              alt="Dropdown" 
              className="w-4 h-4 cursor-pointer" 
              onClick={toggleDropdown} 
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                className='absolute right-0 top-full transform translate-y-1 bg-white text-base font-medium text-gray-600 z-20 p-4 shadow-lg' 
                style={{ width: '180px' }}
              >
                <p onClick={() => navigate('/my-profile')} className="cursor-pointer py-1 hover:text-primary">My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className="cursor-pointer py-1 hover:text-primary">My Appointments</p>
                <p onClick={() => setToken(false)} className="cursor-pointer py-1 hover:text-primary">Logout</p>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className='bg-primary text-white px-8 py-3 rounded-full hidden md:block'
          >
            Create account
          </button>
        )}

        <img 
          onClick={() => setShowMenu(true)} 
          className='w-6 md:hidden' 
          src={assets.menu_icon} 
          alt="Menu" 
        />
        
        {/* ---mobile menu---- */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-6' src={assets.logo} alt="Logo" />
            <img 
              className='w-7' 
              onClick={() => setShowMenu(false)} 
              src={assets.cross_icon} 
              alt="Close Menu" 
            />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5'>
            <MenuItem to='/' onClick={() => setShowMenu(false)}>HOME</MenuItem>
            <MenuItem to='/doctors' onClick={() => setShowMenu(false)}>ALL DOCTORS</MenuItem>
            <MenuItem to='/about' onClick={() => setShowMenu(false)}>ABOUT</MenuItem>
            <MenuItem to='/contact' onClick={() => setShowMenu(false)}>CONTACT</MenuItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
