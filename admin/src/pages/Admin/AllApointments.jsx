import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext.jsx';

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, loading } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div>
      <h2>All Appointments</h2>
      <div>
        <div style={{ display: 'flex', fontWeight: 'bold', paddingBottom: '10px' }}>
          <p style={{ width: '50px' }}>#</p>
          <p style={{ flex: 1 }}>Patient</p>
          <p style={{ width: '50px' }}>Age</p>
          <p style={{ flex: 1 }}>Date & Time</p>
          <p style={{ flex: 1 }}>Doctor</p>
          <p style={{ width: '100px' }}>Fees</p>
          <p style={{ width: '100px' }}>Actions</p>
        </div>
        {loading ? (
          <p>Loading appointments...</p>
        ) : appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div key={appointment._id} style={{ display: 'flex', padding: '10px 0' }}>
              <p style={{ width: '50px' }}>{index + 1}</p>
              <p style={{ flex: 1 }}>{appointment.patientName}</p>
              <p style={{ width: '50px' }}>{appointment.age}</p>
              <p style={{ flex: 1 }}>{new Date(appointment.date).toLocaleString()}</p>
              <p style={{ flex: 1 }}>{appointment.doctorName}</p>
              <p style={{ width: '100px' }}>{appointment.fees}</p>
              <p style={{ width: '100px' }}>
                {/* You can add action buttons here, such as Edit or Delete */}
                <button>Edit</button>
                <button>Delete</button>
              </p>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default AllAppointments;
