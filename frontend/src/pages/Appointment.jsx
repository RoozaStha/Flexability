import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const navigate = useNavigate();

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    const getDocInfo = () => {
        const doctor = doctors.find(doc => doc._id === docId);
        setDocInfo(doctor);
    };

    const getAvailableSlots = () => {
        const slots = [];
        const today = new Date();
    
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
    
            const startTime = new Date(currentDate.setHours(10, 0, 0, 0)); // Starting at 10:00 AM
            const endTime = new Date(currentDate.setHours(21, 0, 0, 0));   // Ending at 9:00 PM
    
            const timeSlots = [];
            let currentTime = startTime;
    
            // Adjust currentTime for today to start from the next nearest half-hour
            if (i === 0 && today > startTime) {
                const minutes = today.getMinutes();
                const nextHalfHour = minutes < 30 ? 30 : 60;
                currentTime = new Date(today.setMinutes(nextHalfHour, 0, 0));
            }
    
            // Generate 30-minute interval slots
            while (currentTime < endTime) {
                const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                timeSlots.push({
                    datetime: new Date(currentTime),
                    time: formattedTime
                });
                currentTime = new Date(currentTime.getTime() + 30 * 60 * 1000); // Add 30 minutes
            }
    
            slots.push(timeSlots);
        }
        setDocSlots(slots);
    };
    

    const bookAppointment = async () => {
        if (!token) {
            toast.warn("Login to book an appointment 🤬");
            return navigate('/login');
        }

        try {
            const date = docSlots[slotIndex]?.[0]?.datetime;
            const slotDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

            if (!slotTime) {
                toast.warn("Please select a time slot before booking!");
                return;
            }

            const { data } = await axios.post(
                `${backendUrl}/api/user/book-appointments`,
                { docId, slotDate, slotTime },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (data.success) {
                toast.success("Appointment booked successfully!");
                getDoctorsData();
                navigate("/my-appointments");
            } else {
                toast.error("Failed to book appointment");
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("Slot Already Booked. Please Select Another Slot");
        }
    };

    useEffect(() => {
        getDocInfo();
    }, [doctors, docId]);

    useEffect(() => {
        getAvailableSlots();
    }, [doctors, docId]);

    return docInfo && (
        <div>
            {/* Doctor Details */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-72 rounded-lg' src={docInfo?.image} alt="" />
                </div>
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0'>
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        {docInfo?.name} <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{docInfo?.degree} - {docInfo?.speciality}</p>
                        <button className='py-0 px-2 border text-xs rounded-full'>{docInfo?.experience}</button>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                            About <img src={assets.info_icon} alt="" />
                        </p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo?.about}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4'>
                        Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo?.fees}</span>
                    </p>
                </div>
            </div>

            {/* Booking Slots */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {docSlots.map((item, index) => (
                        <div 
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} 
                            key={index} 
                            onClick={() => setSlotIndex(index)}
                        >
                            <p>{item[0]?.datetime && daysOfWeek[item[0].datetime.getDay()]}</p>
                            {item[0]?.datetime && item[0].datetime.getDate()}
                        </div>
                    ))}
                </div>
                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {docSlots[slotIndex]?.map((item, index) => (
                        <p 
                            onClick={() => setSlotTime(item.time)} 
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} 
                            key={index}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
            </div>
            <RelatedDoctors speciality={docInfo?.speciality} docInfo={docInfo} />
        </div>
    );
};

export default Appointment;
