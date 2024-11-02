import { createContext, useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = 'Rs';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') || false);
    const [userData, setUserData] = useState(false);

    const getDoctorsData = useCallback(async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
            if (data.success) {
                setDoctors(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to load doctors data.");
        }
    }, [backendUrl]);

    const loadUserProfileData = useCallback(async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                setToken(false);  // Clear token on unauthorized error
                localStorage.removeItem('token');
                toast.error("Session expired, please log in again.");
            } else {
                toast.error("Failed to load user profile data.");
            }
        }
    }, [backendUrl, token]);

    const handleSetToken = (newToken) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem('token', newToken);
        } else {
            localStorage.removeItem('token');
        }
    };

    const value = {
        doctors,
        getDoctorsData,
        currencySymbol,
        token,
        setToken: handleSetToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData,
    };

    useEffect(() => {
        getDoctorsData();
    }, [getDoctorsData]);

    useEffect(() => {
        if (token) {
            loadUserProfileData();
        } else {
            setUserData(false);
        }
    }, [token, loadUserProfileData]);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
