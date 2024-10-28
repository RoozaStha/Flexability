import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    // Use consistent casing for token
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Sync the token with local storage
    useEffect(() => {
        localStorage.setItem('aToken', aToken);
    }, [aToken]);

    const value = {
        aToken,
        setAToken,
        backendUrl
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
