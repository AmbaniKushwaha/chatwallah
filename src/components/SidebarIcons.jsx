import React from 'react'
import { FaToolbox, FaUsers, FaUserShield } from 'react-icons/fa'
import { GoFileMedia } from 'react-icons/go'
import { GrChannel } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdCall, MdMessage, MdOutlineArchive, MdOutlineWifiChannel, MdWifiChannel } from 'react-icons/md'
import { RiAdvertisementLine, RiFeedbackLine, RiWechatChannelsFill, RiWechatChannelsLine } from 'react-icons/ri'
import { SiChannel4 } from 'react-icons/si'
import RecentChat from './RecentChat'
import ChatScreen from './ChatScreen'
import { FaRegCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import profile from '../Pages/UserProfile'
import ChangePassword from '../Pages/ChangePassword'
import UserSidebar from './UserSidebar'


const SidebarIcons = () => {
  return (
    <>
      <div className='flex h-full w-[5%]  py-4 flex-col items-center text-white justify-between gap-10 text-3xl ' >
        <Link to="/user/usersidebar">
        < MdMessage className='cursor-pointer '/>

        </Link>
        <MdCall className='cursor-pointer ' />
       <FaUsers className='cursor-pointer '/>
       <MdOutlineArchive className='cursor-pointer '/>
        <FaToolbox className='cursor-pointer '/>
        <RiAdvertisementLine className='cursor-pointer '/>
        <RiFeedbackLine  className='cursor-pointer '/>
        <GoFileMedia className='cursor-pointer '/>
        <Link to="/user/changepassword">
        <IoSettingsOutline className='cursor-pointer ' />
        </Link>
       <Link to="/user/profile"> <FaRegCircleUser className='cursor-pointer'/>
       </Link>
       </div>
    </>
  )
}

export default SidebarIcons
