import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecentChat = ({ name }) => {

    let redirect = useNavigate() 

    return (
<div
  onClick={() => redirect('/user/chat')}
  className="flex gap-3  px-3 py-3 cursor-pointer hover:bg-[#202c33] transition rounded-lg"
>

  {/* Avatar */}
  <div className="w-11 h-11 rounded-full overflow-hidden">
    <img
      src={`https://ui-avatars.com/api/?name=${name}&background=random`}
      alt=""
    />
  </div>

  {/* Name + Last Message */}
  <div className="flex-1">
    <h2 className="text-m font-semibold text-white">
      {name}
    </h2>
    <p className="text-s text-gray-400 truncate">
      Last message preview...
    </p>
  </div>

  {/* Right Side (Time + Unread) */}
  <div className="flex flex-col items-end gap-1">
    <span className="text-s text-gray-400">2m</span>

    {/* Unread badge (optional) */}
    <span className="bg-green-500 text-[10px] px-2 py-[2px] rounded-full text-white">
      2
    </span>
  </div>

</div>

    )
}

export default RecentChat