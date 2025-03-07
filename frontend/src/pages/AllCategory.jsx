import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const AllCategory = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // Apply filter to the doctors list
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    // Ensure `doctors` is populated before applying the filter
    if (doctors) {
      applyFilter();
    }
  }, [doctors, speciality]);

  // Navigate and apply the filter when clicking on a specialty
  const handleSpecialityClick = (speciality) => {
    navigate(`/doctors/${speciality}`);
  };

  return (
    <div>
      <p className='text-gray-600'>Browse through the special items.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary' : ''}`}
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filters
        </button>
        
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec) => (
            <p
              key={spec}
              onClick={() => handleSpecialityClick(spec)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === spec ? "bg-indigo-100 text-black" : ""}`}
            >
              {spec}
            </p>
          ))}
        </div>
      </div>

      {/* Display filtered doctors */}
      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-5'>
        {filterDoc.length > 0 ? (
          filterDoc.map((item) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={item._id}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500'
            >
              <img className='bg-blue-50 w-full h-48 object-cover' src={item.image} alt={item.name} />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-5">No doctors found for the selected specialty.</p>
        )}
      </div>
    </div>
  );
};

export default AllCategory;
