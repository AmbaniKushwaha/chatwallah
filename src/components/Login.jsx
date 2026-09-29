import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { TbEyeBitcoin, TbEyeClosed } from "react-icons/tb";

const Login = () => {

     let redirect = useNavigate();

    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const [loading , setLoading] = useState(false)
    const[isHide , setIsHide] = useState(true)


    let handleLogin = async () => {
        // toast.success("Login Feature")
          setLoading(true)

        let loginData = {
            email: login.username,
            password: login.password
        }


        let URL = "https://api.skillsvarz.com/api/login"
        let resp = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        let res = await resp.json()
        // console.log(res)

        if (resp.status === 200 || res.status === 201) {
            localStorage.setItem("user_id", JSON.stringify(res.user._id))
            toast.success(res.message)
            setTimeout(() => {
                redirect("/user")
            }, 1000)
        }

        else toast.error(res.error)


        setLoading(false)

    }


    let handlePass = ()=>{
      if(isHide){
        setIsHide(false)
      }
      else{
        setIsHide(true)
      }
    }
      

  // console.log(login)

  return (
<>
 {
  loading ? <Loading message="Checking Credential..." /> : <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      
  <div className="w-full max-w-md bg-[#111b21] text-white rounded-2xl shadow-2xl p-8 relative">
    
    <h2 className="text-2xl font-bold text-center text-white mb-2">
      Welcome Back 👋
    </h2>

    <p className="text-center text-gray-400 mb-6">
      Login to continue chatting
    </p>

    {/* Username */}
    <div className="mb-4">
      <label className="block text-sm text-gray-400 mb-1">
        Username / Email
      </label>
      <input
        type="text"
        className="w-full px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none"
        placeholder="Enter your username or email..."
        onChange={(e) => setLogin({ ...login, username: e.target.value })}
      />
    </div>

    {/* Password */}
    <div className="mb-6">
      <label className="block text-sm text-gray-400 mb-1">
        Password
      </label>
      <input
        type={isHide ? "password" : "text"}
        id="password"
        className="w-full px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none"
        placeholder="Enter your password..."
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
      />
      
      <div className="h-10 w-10 absolute top-59 right-10 text-2xl"> {isHide ? <TbEyeClosed onClick={handlePass} /> : <TbEyeBitcoin onClick={handlePass} />}</div>

       <div className="text-red-500 my-3 ml-60">
         <Link to="forgetpassword">Forget Password ?</Link>
       </div>


    </div>

    {/* Button */}
    <button
      onClick={handleLogin}
      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-200 cursor-pointer"
    >
      Login
    </button>

    {/* Divider */}
    <div className="flex items-center my-6">
      <div className="flex-1 h-px bg-gray-600"></div>
      <span className="px-3 text-gray-400 text-sm">OR</span>
      <div className="flex-1 h-px bg-gray-600"></div>
    </div>

    {/* Signup */}
    <p className="text-center text-sm text-gray-400">
      Don’t have an account?{" "}
      <Link
        to="/signup"
        className="text-green-400 font-medium hover:underline"
      >
        Register Now
      </Link>
    </p>

  </div>
</div>
 }

</>

  );
};

export default Login;
