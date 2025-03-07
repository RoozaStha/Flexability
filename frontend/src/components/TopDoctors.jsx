import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  
  // Check if doctors is defined and is an array
  if (!doctors || !Array.isArray(doctors)) {
    return <p className="text-center text-gray-600 mt-10">No doctors available at the moment.</p>;
  }

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      {/* Section Title */}
      <h1 className="text-3xl font-semibold">Popular Items</h1>
      
      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor) => (
          <div 
            key={doctor._id} 
            className="doctor-card"
            onClick={() => { navigate(`/appointment/${doctor._id}`); scrollTo(0, 0); }}
          >
            <img className="doctor-image" src={doctor.image} alt={doctor.name} />
            <div className="doctor-info">
              <div className="availability">
                <span className="availability-dot"></span>
                <p>Available</p>
              </div>
              <p className="doctor-name">{doctor.name}</p>
              <p className="doctor-speciality">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button 
  onClick={() => { navigate('/doctors'); scrollTo(0, 0); }} 
  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
>
  View More
</button>

    </div>
  );
};

export default TopDoctors;
