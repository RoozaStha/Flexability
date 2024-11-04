import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, dashData, getDashData } = useContext(AdminContext);
  
   const {slotDateFormat} = useContext(AppContext)
  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.doctor_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.doctors}
              </p>
              <p className="text-gray-400">Doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.appointment_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.patients}
              </p>
              <p className="text-gray-400">Patient</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg mt-8">
          <div className="flex items-center gap-2.5 px-4 py-4 border-b">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest Appointment</p>
          </div>

          <div className="pt-4">
            {dashData.latestAppointments.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border-b">
                <img
                  src={item.docData.image}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.docData.name}</p>
                  <p className="text-sm text-gray-500">
                    Booking on {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-500 text-sm font-medium">Cancelled</p>
                ) : (
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-5 cursor-pointer text-red-400 hover:text-red-600"
                    src={assets.cancel_icon}
                    alt="Cancel appointment"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
