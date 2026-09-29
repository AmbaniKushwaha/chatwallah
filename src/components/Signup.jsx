import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'

const Signup = () => {
  const [signup, setSignup] = useState({
    yourname: "",
    youremail: "",
    yourmobile: "",
    password: "",
    cpass: "",
  });

  let handleChange = (event) => {
    setSignup({ ...signup, [event.target.name]: event.target.value });
  };

  let handleSignup = async () => {
    let signupData = {
      email: signup.youremail,
      name: signup.yourname,
      password: signup.password,
      phone: signup.yourmobile,
    };

    let resp = await fetch("https://api.skillsvarz.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    let res = await resp.json();
  };

  return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      
  <div className="w-full max-w-md bg-[#111b21] text-white rounded-2xl shadow-2xl p-8">
    
    <h2 className="text-2xl font-bold text-center mb-2">
      Create Account
    </h2>

    <p className="text-center text-gray-400 mb-6">
      Join and start chatting instantly
    </p>

    {/* Name */}
    <div className="mb-4">
      <label className="block text-sm text-gray-400 mb-1">
        Your Name
      </label>
      <input
        onChange={handleChange}
        name="yourname"
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-sm text-gray-400 mb-1">
        Your Email
      </label>
      <input
        onChange={handleChange}
        name="youremail"
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none"
      />
    </div>

    {/* Phone */}
    <div className="mb-4">
      <label className="block text-sm text-gray-400 mb-1">
        Phone Number
      </label>
      <input
        onChange={handleChange}
        name="yourmobile"
        type="number"
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none"
      />
    </div>

    {/* Password */}
    <div className="mb-4">
      <label className="block text-sm text-gray-400 mb-1">
        Password
      </label>
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none"
      />
    </div>

    {/* Confirm Password */}
    <div className="mb-6">
      <label className="block text-sm text-gray-400 mb-1">
        Confirm Password
      </label>
      <input
        onChange={handleChange}
        name="cpass"
        type="password"
        placeholder="Confirm your password"
        className="w-full px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none"
      />
    </div>

    {/* Button */}
    <button
      onClick={handleSignup}
      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-200 cursor-pointer"
    >
      Register Now
    </button>

    {/* Divider */}
    <div className="flex items-center my-6">
      <div className="flex-1 h-px bg-gray-600"></div>
      <span className="px-3 text-gray-400 text-sm">OR</span>
      <div className="flex-1 h-px bg-gray-600"></div>
    </div>

    {/* Login */}
    <p className="text-center text-sm text-gray-400">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-green-400 font-medium hover:underline"
      >
        Login Now
      </Link>
    </p>

  </div>
</div>


  );
};

export default Signup;
