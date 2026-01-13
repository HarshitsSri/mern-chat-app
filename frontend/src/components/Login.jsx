import { useState } from "react"
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {useDispatch} from 'react-redux'
import { setAuthUser } from "../redux/userSlice.js";

const Login = () => {
  const [formData, setFormData] = useState({

    username: "",
    password: "",

  });
  const dispactch=useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/login', formData, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    console.log(res)
    if (res.data.success) {
      navigate('/');
      toast.success(res.data.message);
      dispactch(setAuthUser(res.data));
    }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    
  }

  return (
    <div className="min-h-fit flex items-center justify-center p-4 rounded-2xl
      bg-slate-900/80 backdrop-blur-lg">

      <div className="bg-slate-800/90 shadow-2xl rounded-2xl w-full max-w-sm p-2 sm:p-12 border border-slate-700">

        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Login your Account
        </h2>

        <form className="space-y-3 " action="" onSubmit={submitHandler}>



          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              name='username'
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg
                bg-slate-900 text-gray-100
                border border-slate-700
                focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name='password'
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg
                bg-slate-900 text-gray-100
                border border-slate-700
                focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600
              text-gray-900 font-semibold py-3 rounded-lg
              shadow-lg transition-all duration-200"
          >
            Login
          </button>

          {/* Login */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link
              className="text-rose-400 hover:underline cursor-pointer"
              to='/register'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}


export default Login