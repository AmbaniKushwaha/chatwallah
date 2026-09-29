import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import UserSidebar from './UserSidebar'

const UserOutlet = () => {

    let userId = JSON.parse(localStorage.getItem("user_id"))

    const [user, setUser] = useState({})

    useEffect(() => {
        let fetchUser = async () => {
            let resp = await fetch('https://api.skillsvarz.com/api/user/' + userId)
            let res = await resp.json()
            // console.log(res)
            setUser(res)
        }
        fetchUser()
    }, [userId])

    return (
        <div className='flex h-screen w-full'>
            <Outlet context={{ user }} />
            <UserSidebar/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default UserOutlet