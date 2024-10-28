import React, { useContext } from 'react';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';

const App = () => {

  const {aToken} = useContext(AdminContext)
  return  aToken ?  (
    <div className='bg-[#F8F9Fd]'>
      <ToastContainer />
      <Navbar />
    </div>
  ):(
    <>
     <Login />
     <ToastContainer />
    </>
  )
};

export default App; // Make sure this is the last line
