import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'
import { FaBars, FaTimes, FaHeartbeat } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider';

export default function Navbar() {

  const { setOpenModal } = useGlobalContext();

    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

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
    <nav className='flex items-center justify-between sticky left-0 right-0 top-0 z-40 bg-sky-600 text-white lg:py-3 py-3 lg:px-[3%] px-3'>
        <div className="lg:hidden text-2xl text-white mr-4" onClick={() => setIsOpen(true)}>
            <FaBars />
        </div>
        <div className="flex items-center lg:w-auto w-full lg:text-4xl text-2xl lg:mr-8 text-amber-300 mr-0">
            <FaHeartbeat className='lg:text-6xl text-4xl text-amber-300 mr-2' />
            Amal
        </div>
        <div className={`
            lg:static fixed inset-0 lg:bg-transparent bg-opacity-75 bg-rose-400 flex-1 text-whitee 
            duration-300 eas-in-out lg:translate-x-0 translate-x-[-100%] ${isOpen ? 'translate-x-0':'bg-yellow-300 '} `
        }>
            <ul className="lg:flex w-[85%] h-full lg:bg-transparent bg-red-600">
                {mobileNavHeader}
                {links.map(link => (
                    <li className='px-4 py-2'>
                        {!link.subLinks ? 
                            <NavLink className='' to={link.path}  onClick={() => setIsOpen(false)}>{link.text}</NavLink> : 
                            <div 
                                className="cursor-pointer relative flex items-center" 
                                onMouseEnter={() => setOpenDropdown(!openDropdown)}
                                onMouseLeave={() => setOpenDropdown(!openDropdown)}
                                onClick={() => setOpenDropdown(!openDropdown)}
                            >
                                {link.text}
                                <FiChevronDown className={`ml-2 duration-200 ${openDropdown ? 'rotate-[180deg]' : ''}`} />
                                {openDropdown &&
                                    <div className="absolute left-0 top-full bg-white border rounded py-2">
                                        {link.subLinks.map(sublink => (
                                            <NavLink className='block px-6 py-1' to={sublink.path}  onClick={() => setIsOpen(false)}>{sublink.text}</NavLink>
                                        ))}
                                    </div>
                                }
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex">
            <button className="flex items-center text-base px-4 py-2 bg-amber-500 rounded text-white mr-3" onClick={() => setOpenModal('login')}>
                <FiUser className='text-2xl mr-2' />
                Login
            </button>
            <button className="lg:flex hidden items-center text-base px-4 py-2 bg-blue-400 rounded text-white" onClick={() => setOpenModal('signup')}>
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
    {text:'Our Work', path:'/our-work'},
    {text:'Refugee camps', path:'/refugee-camps'},
    {text:'About us', path:'/about'},
    {text:'Blog', path:'/blog'},
    {text:'Others', subLinks:[
        { text:'Services', path:'/services' },
        { text:'Services', path:'/services' },
        { text:'Services', path:'/services' },
    ], path:'/other'},
]
