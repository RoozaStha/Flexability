import React, { useEffect, useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import {assets} from '../../assets/assets'

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments,cancelAppointment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat,currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken, getAllAppointments]);

  return (
    <div className='w-full max-w-6xl m-5'>
      <h2 className='mb-3 text-lg font-medium'>All Appointments</h2>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {/* Table Rows */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50'
          >
            <p className='max-sm:hidden'>{index + 1}</p>

            {/* Patient Info */}
            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full' src={item.userData?.image} alt="Patient" />
              <p>{item.userData?.name || 'N/A'}</p>
            </div>

            <p>{calculateAge(item.userData?.dob) || 'N/A'}</p>
            <p>{`${slotDateFormat(item.slotDate)}, ${item.slotTime}`}</p>

            {/* Doctor Info */}
            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full' src={item.docData?.image} alt="Doctor" />
              <p>{item.docData?.name || 'N/A'}</p>
            </div>

            <p>{currency}{item.amount}</p>
            {item.cancelled
            ?<p className='text-red-200 text-sm text-medium'>Cancelled</p>
          : 
          

            <img onClick={()=>{cancelAppointment(item._id)}} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
            }
            </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
