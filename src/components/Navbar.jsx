import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FiMenu, FiSearch, FiUser, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/amal-logo.jpg'
import { auth } from '../config'
import { useGlobalContext } from '../contexts/GlobalContextProvider';


export default function Navbar() {
    
  const { profile, setProfile, setOpenModal } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [profileDropdwon, setProfileDropdwon] = useState(false);


  const logOut = () => {
    signOut(auth).then(res => {
      setProfile(null)
    }).catch(err => console.log(err))
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-50 shadow-mdd border-b sticky top-0 left-0 right-0 z-40">
        <div className="border border-primary text-primary h-[2.1rem] w-[2.5rem] flex items-center justify-center rounded px-1 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> :  <FiMenu /> }
        </div>
        <div className="flex-1 ml-3">
          <img className='h-[2.8rem] w-[6.3rem]' src={logo} alt='Amal' />
        </div>
        <div className="flex items-center">
          <div 
            className="text-primary h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-xl text-2xl"
          >
            <FiSearch />
          </div>
          <div className="flex" onClick={() => setProfileDropdwon(!profileDropdwon)}>
            {profile ? 
              <>
                {profile.avatar ? 
                  <img src={profile.avatar} alt='' className="lg:h-[35px] h-[30px] w-[30px] lg:w-[35px] rounded-full" /> :
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU' alt='' className="lg:h-[35px] h-[30px] w-[30px] lg:w-[35px] rounded-full" /> }
                  <span className="flex items-center ml-1">
                    {profile.name.split(' ')[0]}
                    {/* <FiChevronDown className={`text-xl ml-1 duration-200 ${profileDropdwon ? 'rotate-[180deg]':''}`} /> */}
                  </span>
                  {profileDropdwon && 
                    <div className="bg-gray-200 text-gray-600 rounded absolute right-0 top-full py-2">
                      <NavLink className="flex items-center hover:bg-orange hover:text-white cursor-pointer px-6 py-2" to='/accout'>
                        <FaUser className="text-sm mr-2" />
                        Profile
                      </NavLink>
                      <div className="flex items-center hover:bg-orange hover:text-white cursor-pointer px-6 py-2" onClick={logOut}>
                        <FaUser className="text-sm mr-2" />
                        Logout
                      </div>
                  </div>
                }
              </> :
              <div className="flex items-center ml-2" onClick={() => setOpenModal('login')}>
                <FiUser className='text-2xl mr-1' />
                Login
              </div>
            }
          </div>
          {/* {profile ?
            <div className="flex items-center ml-2">
              span.h-
              <FiUser className='text-2xl mr-1' />
            </div> :
            <div className="flex items-center ml-2" onClick={() => setOpenModal('login')}>
              <FiUser className='text-2xl mr-1' />
              Login
            </div>
          } */}
        </div>
    </div>
  )
}

