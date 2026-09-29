import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
import { BiMailSend } from 'react-icons/bi'
import { FaLock } from 'react-icons/fa'
import { LuKeyRound } from 'react-icons/lu'



const ForgetPassword = () => {

    let redirect = useNavigate()

    const [resetPass, setResetPass] = useState({
        otp : "",
        email : "",
        password : "",
        cpassword : "",
    })

    const[isOTPSend , setIsOTPSend] = useState(false)
    const[loading , setLoading]  =useState(false)

    let handleInput = (event)=>{
        setResetPass({...resetPass, [event.target.name] : event.target.value })
    }

    let changePass = async ()=>{
        setLoading(true)

        let data = {
            otp : resetPass.otp,
            newPassword : resetPass.password
        }

        let url = "https://api.skillsvarz.com/api/reset-password"
        let resp = await fetch(url,{
           method:'POST',
           headers: {
            'Content-Type' : 'application/json'
           },
           body: JSON.stringify(data)
        })

        let res = await resp.json();

        if(resp.status === 200 || resp.status === 201){
            toast.success("Password Change Succesfully")
            setTimeout(()=>{
                redirect('/login')
            },1000)
        }
        else{
            toast.error(resp?.error? resp.error : "Failed to Change Password")
        }

        setLoading(false)

    }

    let sendOTP = async ()=>{
        setLoading(true)

        let url = "https://api.skillsvarz.com/api/forgot-password"

        let resp = await fetch(url , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({"email" : resetPass.email })
        })

        let res = await resp.json();

        if(resp.status === 200 || resp.status === 201){
            toast.success("OTP Sent to Registered Email")
            setIsOTPSend(true)
        }
        else{
            toast.error(res?.error? res.error : "Try Again")
        }

        setLoading(false)
    }

  return (
    <>

{loading ? <Loading /> : (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

  <div className="bg-[#111b21] text-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#2a3942]">

    <h2 className="text-2xl font-bold text-center mb-6">
      {isOTPSend ? "Reset Password" : "Forgot Password"}
    </h2>

    {isOTPSend ? (
      <>
        {/* OTP */}
        <div className="mb-4 relative">
          <LuKeyRound className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            onChange={handleInput}
            type="number"
            name="otp"
            placeholder="Enter OTP"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Enter new password"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4 relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            onChange={handleInput}
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none text-white placeholder-gray-400"
          />
        </div>

        <button
          onClick={changePass}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-medium"
        >
          Change Password
        </button>
      </>
    ) : (
      <>
        {/* Email */}
        <div className="mb-4 relative">
          <BiMailSend className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            onChange={handleInput}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none text-white placeholder-gray-400"
          />
        </div>

        <button
          onClick={sendOTP}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-medium"
        >
          Send OTP
        </button>
      </>
    )}

  </div>
</div>
)}


      
    </>
  )
}

export default ForgetPassword
