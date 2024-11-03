import { createContext } from "react";



export const AppContext = createContext()

const AppContextProvider =(props)=>{
    const currency ='Rs'
    const calculateAge = (dob) =>{
     const today = new Date()
     const birthDate = new Date(dob)

     let age = today.getFullYear() - birthDate.getFullYear()

     return age
    }
    const slotDateFormat = (slotDate) => {
        if (!slotDate) return "Invalid Date";
    
        const date = new Date(slotDate);
        if (isNaN(date.getTime())) return "Invalid Date";
    
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
      };
    const value={
        calculateAge,
        slotDateFormat,
        currency
    }
    

    return(
        <AppContext.Provider value={value}>

            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
