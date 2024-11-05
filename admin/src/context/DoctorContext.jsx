import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import React from "react";

export const DoctorContext = React.createContext(null);



const DoctorContextProvider = ({children}) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [dToken, setDToken] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const getAppointments = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/doctor/appointments`, {
                headers: { Authorization: `Bearer ${dToken}` }
            });

            if (data.success) {
                setAppointments(data.appointments.reverse());
                console.log("Appointments received:", data.appointments.reverse());
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in getAppointments:", error.response?.data || error.message);
            toast.error("Failed to fetch appointments.");
        }
    };

    const cancelAppointment = async (appointmentId, docId) => {

    
        try {
            const { data } = await axios.post(`${backendUrl}/api/doctor/all-appointments/cancel`, {
                appointmentId,
                docId
            }, {
                headers: { Authorization: `Bearer ${dToken}` }
            });
    
            if (data.success) {
                toast.success("Appointment canceled successfully");
                getAppointments(); // Refresh the appointments list
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in cancelAppointment:", error.response?.data || error.message);
            toast.error("Failed to cancel appointment.");
        }
    };
    
    const completeAppointment = async (appointmentId,docId) => {
        console.log("Completing appointment with ID:", appointmentId, "for doctor ID:", docId);
        try {
            const { data } = await axios.post(`${backendUrl}/api/doctor/all-appointments/complete`, {
                appointmentId,
                docId
            }, {
                headers: { Authorization: `Bearer ${dToken}` }
            });
    
            if (data.success) {
                toast.success("Appointment completed successfully");
                getAppointments(); // Refresh the appointments list
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in completeAppointment:", error.response?.data || error.message);
            toast.error("Failed to complete appointment.");
        }
    };
    

const value = {
    dToken,
    setDToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments,
    cancelAppointment,
    completeAppointment,
};
    return (
        <DoctorContext.Provider value={value}>
            {children}
        </DoctorContext.Provider>
    );
};

export default DoctorContextProvider;
