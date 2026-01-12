import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
  const submitHandler =async(e)=>{
    e.preventDefault();
    console.log(formData);

    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/register',formData,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      })

      if(res.data.success){
        navigate('/login');
        toast.success(res.data.message);
      }
      
      

    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div className="min-h-fit flex items-center justify-center p-4 rounded-2xl
      bg-slate-900/80 backdrop-blur-lg">

      <div className="bg-slate-800/90 shadow-2xl rounded-2xl w-full max-w-sm p-2 sm:p-12 border border-slate-700">

        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Create an Account
        </h2>

        <form className="space-y-3 " action="" onSubmit={submitHandler} >

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name='fullname'
              required
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg
                bg-slate-900 text-gray-100
                border border-slate-700
                focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

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
          {/* c Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name='confirmPassword'
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg
                bg-slate-900 text-gray-100
                border border-slate-700
                focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Gender
            </label>

            <div className="flex items-center gap-6 text-gray-300 text-xs">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  checked={formData.gender === "male"}

                  onChange={handleChange}

                  className="accent-rose-500"
                />
                Male
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  checked={formData.gender === "female"}

                  onChange={handleChange}
                  className="accent-rose-500"
                />
                Female
              </label>

            </div>
          </div>


          {/* Terms */}
          <div className="flex items-center text-sm text-gray-400">
            <input
              type="checkbox"
              required
              name="terms"
              className="w-4 h-4 mr-2 accent-rose-500"
            />
            <span>
              I agree to the{" "}
              <span className="text-rose-400 hover:underline cursor-pointer">
                terms & conditions
              </span>
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600
              text-gray-900 font-semibold py-3 rounded-lg
              shadow-lg transition-all duration-200"
          >
            Register
          </button>

          {/* Login */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              className="text-rose-400 hover:underline cursor-pointer"
              to='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
