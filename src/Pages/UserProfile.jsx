import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { useOutletContext } from 'react-router-dom'
import { toast } from 'react-toastify'
import SidebarIcons from '../components/SidebarIcons'

const UserProfile = () => {

    const { user } = useOutletContext()

    const [userData, setUserData] = useState({})
    const [isEdit, setIsEdit] = useState(true)

    useEffect(() => {
        setUserData(user)
    }, [user])


    let handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    let handleEdit = async () => {
        if (isEdit) {
            setIsEdit(false)
        }
        else {

            // API Call for User Data Updation
            // console.log(user._id)
            let URL = "https://api.skillsvarz.com/api/user/" + user._id
            // console.log(URL);

            let resp = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            let res = await resp.json()

            if (resp.status === 200 || resp.status === 201) {
                toast.success('User Updated Successfully')
                setIsEdit(true)
            }
            else toast.error('Try Again')
        }
    }

    let handleCancel = () => {
        setUserData(user)
        setIsEdit(true)
    }

    return (
        <div className='flex h-full w-full'>
            <div className='h-full w-[5%] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex justify-center '>
             <SidebarIcons/>
        </div>

        <div className="w-[95%] min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"> <div className="w-[380px] bg-[#111b21]/90 backdrop-blur-md relative rounded-2xl shadow-2xl p-6 pt-12 space-y-5"> {/* 👤 Avatar */} <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#202c33] p-4 rounded-full shadow-lg border-4 border-[#111b21]"> <FaRegCircleUser className="text-5xl text-green-400" /> </div> {/* 🧾 Title */} <h2 className="text-xl font-semibold text-center mt-2"> Your Profile </h2> {/* Inputs */} <div className="space-y-4"> {/* Name */} <div> <label className="text-sm text-gray-400">Name</label> <input onChange={handleChange} disabled={isEdit} type="text" name="name" value={userData.name} className="w-full mt-1 px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none transition disabled:opacity-50" /> </div> {/* Email */} <div> <label className="text-sm text-gray-400">Email</label> <input onChange={handleChange} disabled={isEdit} type="email" name="email" value={userData.email} className="w-full mt-1 px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none transition disabled:opacity-50" /> </div> {/* Phone */} <div> <label className="text-sm text-gray-400">Phone</label> <input onChange={handleChange} disabled={isEdit} type="number" name="phone" value={userData.phone} className="w-full mt-1 px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none transition disabled:opacity-50" /> </div> {/* Username */} <div> <label className="text-sm text-gray-400">Username</label> <input onChange={handleChange} disabled={isEdit} type="text" name="username" value={userData.username} className="w-full mt-1 px-4 py-2 rounded-lg bg-[#202c33] border border-transparent focus:border-green-400 outline-none transition disabled:opacity-50" /> </div> </div> {/* 🔘 Buttons */} <div className="flex gap-3 pt-2"> <button onClick={handleEdit} className="flex-1 bg-green-500 hover:bg-green-600 py-2 rounded-lg font-medium transition" > {isEdit ? "Edit Profile" : "Save Changes"} </button> {!isEdit && ( <button onClick={handleCancel} className="flex-1 bg-[#202c33] hover:bg-[#2a3942] py-2 rounded-lg transition" > Cancel </button> )} </div> </div> </div>
       </div>

    )
}

export default UserProfile