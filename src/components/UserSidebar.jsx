import React, { useState } from 'react'
import SidebarIcons from './SidebarIcons'
import RecentChat from './RecentChat'
import ChatScreen from './ChatScreen'
import chatwallah from '../assets/chatwallah.png'

const UserSidebar = ({user}) => {
   
  const[search, setSearch] = useState("")
  const[searchData, setSearchData] = useState([])

  let handleSearch = async (event) => {
        setSearch(event.target.value);

        // console.log(search);

        let url = 'https://api.skillsvarz.com/api/user/search?query=' + event.target.value
        let resp = await fetch(url)
        let res = await resp.json()

        if (resp.status === 400) {
            setSearchData([])
        }
        else setSearchData(res);
  }

  
  return (
    
     
     <div className='h-screen w-full flex bg-[#0b141a] '>

        {/* sidebar */}
       <SidebarIcons/>

       {/* recent chat */}


       <div className='flex h-full w-[20%] border border-gray-600 flex-col items-center  ' >

         <div className="p-3 border-b text-white border-gray-700 w-[90%]">
                    <input
                        type="search"
                        placeholder="Search chats..."
                        value={search}
                        onChange={(event) => {handleSearch(event)}}
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-green-500"
                    />
          </div>
 
       <RecentChat name = 'Ankita'/>
       <RecentChat  name = 'Golu' />
       <RecentChat  name='Papaji' />

       </div>

       <div className='flex h-full w-[75%] border border-gray-900 flex-col items-center justify-between gap-10 text-4xl ' >
        <img className='h-full w-full object-cover' src={chatwallah} alt="" />
       </div>


       
     </div>


  )
}

export default UserSidebar
