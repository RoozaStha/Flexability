import React, { useContext, useState, useEffect } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { DoctorContext } from '../context/DoctorContext';

const Sidebar = () => {
    const { aToken } = useContext(AdminContext);
    const{dToken} = useContext(DoctorContext)
    const [isScrolled, setIsScrolled] = useState(false);

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
        <div className={`min-h-screen bg-white border-r transition-all duration-300 ${isScrolled ? 'pt-8 shadow-lg' : 'pt-5'} px-4 sm:px-6 md:px-8 lg:px-10`}>
            {aToken && (
                <ul className='text-[#515151]'>
                    <NavLink
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-8 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}
                        to={'/admin-dashboard'}
                    >
                        <img src={assets.home_icon} alt="Dashboard Icon" />
                        <p>Dashboard</p>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-8 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}
                        to={'/all-appointments'}
                    >
                        <img src={assets.appointment_icon} alt="Appointments Icon" />
                        <p>Appointments</p>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-8 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}
                        to={'/add-doctor'}
                    >
                        <img src={assets.add_icon} alt="Add Doctor Icon" />
                        <p>Add Doctor</p>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-8 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}
                        to={'/doctor-list'}
                    >
                        <img src={assets.people_icon} alt="Doctors List Icon" />
                        <p>Doctors List</p>
                    </NavLink>
                </ul>
            )}
            {/* doctor panel sidebar */}
            {dToken && (
                <ul className='text-[#515151]'>
                    <NavLink
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-8 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}
                        to={'/doctor-dashboard'}
                    >
                        <img src={assets.home_icon} alt="Dashboard Icon" />
                        <p>Dashboard</p>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-8 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}
                        to={'/doctor-appointments'}
                    >
                        <img src={assets.appointment_icon} alt="Appointments Icon" />
                        <p>Appointments</p>
                    </NavLink>

                   
                    <NavLink
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-8 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}
                        to={'/doctor-profile'}
                    >
                        <img src={assets.people_icon} alt="Doctors List Icon" />
                        <p>Profile</p>
                    </NavLink>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
