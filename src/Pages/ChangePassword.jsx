import React, { useState } from 'react'
import { BiLock } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate, useOutletContext } from 'react-router-dom'
import { toast } from 'react-toastify'
import SidebarIcons from '../components/SidebarIcons';

const ChangePassword = () => {

    let redirect = useNavigate();
    const { user } = useOutletContext()
    const [resetPass, setResetPass] = useState({
        password: "",
        cpassword: ""
    })

    let handleInput = (event) => {
        setResetPass({ ...resetPass, [event.target.name]: event.target.value })
    }

    let changePass = async () => {
        if (resetPass.password === resetPass.cpassword) {
            // toast.success("Pass match")
            let url = "https://api.skillsvarz.com/api/user/" + user._id
            let resp = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password: resetPass.password })
            })

            if (resp.status === 200 || resp.status === 201) {
                toast.success("Password Changed")
                setTimeout(() => {
                    redirect('/login')
                }, 1000)
            }
            else toast.error("Something went wrong!!")

        }


        else toast.error("Confirm pass not match")
    }

    let deleteAccount = async () => {

        let conf = confirm("Are u sure want to delete ?")
        if (conf) {
            let resp = await fetch("https://api.skillsvarz.com/api/user/" + user._id, {
                method: 'DELETE',
            })

            let res = resp.json()

            if (resp.status === 200 || resp.status === 201) {
                toast.success(res?.message ? res.message : "Account Deleted")
                setTimeout(() => {
                    redirect('/login')
                }, 500)
            }
            else toast.error(res?.error ? res.error : "Try Again")
        }
    }

    return (
        <div className='flex h-full w-full'>
            <div className='h-full w-[5%] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex justify-center '>
             <SidebarIcons/>
            </div>

            <div className="min-h-screen w-[95%] flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">

  <div className="bg-[#111b21] text-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

    <h2 className="text-2xl font-bold text-center mb-6">
      Account Settings
    </h2>

    {/* Password */}
    <div className="mb-4 relative">
      <BiLock className="absolute left-3 top-3 text-gray-400" size={18} />
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
      <BiLock className="absolute left-3 top-3 text-gray-400" size={18} />
      <input
        onChange={handleInput}
        type="password"
        name="cpassword"
        placeholder="Confirm password"
        className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none text-white placeholder-gray-400"
      />
    </div>

    {/* Change Password Button */}
    <button
      onClick={changePass}
      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition mb-6 font-medium cursor-pointer"
    >
      Change Password
    </button>

    {/* Divider */}
    <div className="border-t border-[#2a3942] pt-4">
      <p className="text-sm text-gray-400 mb-3 text-center">
        Danger Zone
      </p>

      {/* Delete Account */}
      <button
        onClick={deleteAccount}
        className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer "
      >
        <FiTrash2 size={18} />
        Delete Account
      </button>
    </div>

  </div>
            </div>

        </div>



    )
}

export default ChangePassword