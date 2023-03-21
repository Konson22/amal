// import { FaFacebook, FaTwitter, FaInstagram, FaHandHoldingHeart, FaHandHoldingUsd } from 'react-icons/fa'
import { useState } from 'react'
import { FaBars, FaTimes, FaHeartbeat } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider';

export default function Navbar() {

  const { setOpenModal } = useGlobalContext();

    const [isOpen, setIsOpen] = useState(false);

    // NAVBAR HEADER ON SMALL SCREEN CONTAINING LOGO AND CLOSE BUTTON
    const mobileNavHeader = (
        <div className="lg:hidden flex justify-between items-center px-4 py-3">
            <div className="flex items-center lg:w-auto w-full lg:text-4xl text-2xl lg:mr-8 text-white mr-0">
                <FaHeartbeat className='lg:text-7xl text-4xl text-rose-300 mr-2' />
                Amal
            </div>
            <div className="text-2xl text-white" onClick={() => setIsOpen(false)}>
                <FaTimes />
            </div>
        </div>
    )
  return (
    <nav className='flex items-center justify-between sticky left-0 right-0 top-0 z-40 bg-rose-700 lg:py-3 py-3 lg:px-[3%] px-3'>
        <div className="lg:hidden text-2xl text-white mr-4" onClick={() => setIsOpen(true)}>
            <FaBars />
        </div>
        <div className="flex items-center lg:w-auto w-full lg:text-4xl text-2xl lg:mr-8 text-white mr-0">
            <FaHeartbeat className='lg:text-6xl text-4xl text-rose-300 mr-2' />
            Amal
            {/* <img className="lg:h-[4rem] lg:w-[4rem] h-[2.7rem] w-[2.7rem] rounded-full" src={process.env.PUBLIC_URL+'./images/logo.png'} alt='' /> */}
        </div>
        <div className={`
            lg:static fixed inset-0 lg:bg-transparent bg-opacity-75 bg-rose-400 flex-1 text-white 
            duration-300 eas-in-out lg:translate-x-0 translate-x-[-100%] ${isOpen ? 'translate-x-0':'bg-yellow-300 '} `
        }>
            <ul className="lg:flex w-[85%] h-full lg:bg-transparent bg-red-600">
                {mobileNavHeader}
                {links.map(link => (
                    <li className='px-4 py-2'>
                        <NavLink className='' to={link.path}  onClick={() => setIsOpen(false)}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex">
            <button className="flex items-center text-base px-4 py-2 bg-red-400 rounded text-white mr-3" onClick={() => setOpenModal('login')}>
                <FiUser className='text-2xl mr-2' />
                Login
            </button>
            <button className="lg:flex hidden items-center text-base px-4 py-2 bg-red-400 rounded text-white" onClick={() => setOpenModal('signup')}>
                <FiUser className='text-2xl mr-2' />
                Sign up
            </button>
        </div>
    </nav>
  )
}


const links = [
    {text:'Home', path:'/'},
    {text:'Causes', path:'/causes'},
    {text:'Our Mission', path:'/mission'},
    {text:'Refugee camps', path:'/camps'},
    {text:'About us', path:'/about'},
    {text:'Blog', path:'/blog'},
]
