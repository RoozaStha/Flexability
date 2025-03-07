import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docInfo }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality && docInfo) {
      const { _id: docId } = docInfo;
      const doctorData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorData);
    }
  }, [doctors, speciality, docInfo]);

  if (relDoc.length === 0) {
      return <p>No related doctors found.</p>;
  }

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Items to BUY</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of items.
      </p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.slice(0, 5).map(({ _id, image, name, speciality }) => (
          <div 
            onClick={() => {navigate(`/appointment/${_id}`); scrollTo(0,0)}} 
            key={_id} 
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500'
          >
            <img className='bg-blue-50' src={image} alt={name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{name}</p>
              <p className='text-gray-600 text-sm'>{speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }} 
        className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
