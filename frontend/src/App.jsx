import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllCategory from './pages/AllCategory';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer  />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        
        {/* Updated route to use the singular path "/appointment/:docId" */}
        <Route path='/appointment/:docId' element={<Appointment />} />

        <Route path='/allcategory' element={<AllCategory />} />

        <Route path='/wheelchair' element={<AllCategory category="Wheelchairs" />} />
          <Route path='/transportboards' element={<AllCategory category="Transport Boards" />} />
          <Route path='/orthepedic' element={<AllCategory category="orthepedic" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
