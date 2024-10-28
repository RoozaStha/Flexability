import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios';
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });

        if (data.success) {
          console.log(data.token);
          localStorage.setItem('atoken', data.token);
          setAToken(data.token);
          setEmail('');
          setPassword('');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error("INVALID CRECEDENTIAL");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className="flex flex-col gap-4 items-start p-8 w-full max-w-sm bg-white border rounded-xl text-gray-700 text-sm shadow-lg">
        <p className="text-2xl font-semibold text-gray-800 w-full text-center mb-4">
          <span>{state}</span> Login
        </p>
        <div className="w-full">
          <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-600 mb-1" htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </button>
        <p className="text-sm text-gray-600 mt-3 w-full text-center">
          {state === 'Admin' ? (
            <>Doctor Login? <span onClick={() => setState('Doctor')} className="text-blue-500 hover:underline cursor-pointer">Click here</span></>
          ) : (
            <>Admin Login? <span onClick={() => setState('Admin')} className="text-blue-500 hover:underline cursor-pointer">Click here</span></>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login; // Make sure this is the last line
