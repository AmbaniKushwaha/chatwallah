import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { CgMoreVertical } from 'react-icons/cg'
import SidebarIcons from './SidebarIcons'
import RecentChat from './RecentChat'

const ChatScreen = (props) => {

  const [chats, setChats] = useState([
    {
      role: "you",
      message: "Hey",
      time: "10:34 AM",
      avatar: ""
    },
    {
      role: "me",
      message: "Hello ! Ka haal ba ",
      time: "10:35 AM",
      avatar: ""
    },
   
    {
      role: "you",
      message: "Aur sunao",
      time: "10:34 AM",
      avatar: ""
    },
    {
      role: "me",
      message: " dum dum dedav !",
      time: "10:35 AM",
      avatar: ""
    },
  ])


  let you = (value) => {
    return (
      <div className="flex items-end gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src="https://ui-avatars.com/api/?name=Friend" alt="" />
        </div>

        <div className="bg-gray-800 px-3 py-2 rounded-lg max-w-xs">
          <p className="text-sm">{value.message}</p>
          <span className="text-[10px] text-gray-400">{value.time}</span>
        </div>
      </div>
    )
  }

  let me = (value) => {
    return (
      <div className="flex items-end justify-end gap-2">
        <div className="bg-blue-600 px-3 py-2 rounded-lg max-w-xs text-right">
          <p className="text-sm">{value.message}</p>
          <span className="text-[10px] text-gray-200">{value.time}</span>
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src="https://ui-avatars.com/api/?name=Me" alt="" />
        </div>
      </div>
    )
  }



  return (
  <div className='h-screen w-full flex bg-[#0b141a] '>

        {/* sidebar */}
        <div className='h-full w-[5%] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex justify-center '>
             <SidebarIcons/>
            </div>

       {/* recent chat */}


       <div className='flex h-full w-[20%] border border-gray-600 flex-col items-center  ' >

         <div className="p-3 w-[90%] border-b text-white border-gray-700">
                    <input
                        type="search"
                        placeholder="Search chats..."
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-green-500"
                    />


                </div>

       <RecentChat name = 'Ankita'/>
       <RecentChat  name = 'Golu' />
       <RecentChat  name='Papaji' />

       </div>

       <div className="border-l border-[#2a3942] w-[75%] h-screen  flex flex-col bg-[#0b141a] text-white">

  {/* Header */}
  <div className="h-[60px] bg-[#202c33] flex items-center justify-between px-6 border-b border-[#2a3942]">

    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          src="https://ui-avatars.com/api/?name=Friend&background=random"
          alt=""
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-white">
          Friend Name
        </h2>
        <p className="text-xs text-green-400">
          Online
        </p>
      </div>
    </div>

    <CgMoreVertical className="cursor-pointer text-gray-100 size-6 hover:text-white" />
  </div>


  {/* Chat Area */}
  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0b141a]">

    {chats.map((value, idx) => (
      <div key={idx}>
        {value.role === "you" ? you(value) : me(value)}
      </div>
    ))}

  </div>


  {/* Input */}
  <div className="h-[70px] bg-[#202c33] flex items-center gap-3 px-4 border-t border-[#2a3942]">

    <input
      type="text"
      placeholder="Type a message..."
      className="flex-1 px-5 py-2 text-sm rounded-full bg-[#2a3942] text-white outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
    />

    <button className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition">
      <BiSend size={20} />
    </button>

  </div>

</div>
    
  </div>

  )
}


export default ChatScreen