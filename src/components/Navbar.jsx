import { useState } from 'react'
// import { FaFacebook, FaTwitter, FaInstagram, FaHandHoldingHeart, FaHandHoldingUsd } from 'react-icons/fa'
import { FaHeartbeat, FaUser } from 'react-icons/fa'
import { FiBell, FiChevronDown, FiMail } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    
  return (
    <nav className='flex justify-between sticky left-0 right-0 top-0 z-40 bg-gray-100 lg:px-[10%] px-4 py-4'>
        <div className="flex items-center">
            {/* <FaHeartbeat className="text-amber-500 mr-3 lg:text-6xl text-3xl" /> */}
            <span className="lg:text-3xl text-xl">Help</span>
        </div>
        <NavigationLinks />
        <span className="text-2xl">
            <FaUser />
        </span>
    </nav>
  )
}


const NavigationLinks = () => {

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className='lg:flex hidden flex-1 text-white'>
            <ul className="flex h-full lg:bg-transparent bg-gray-700">
                {links.map(link => (
                    <li className='px-4 py-4 hover:bg-amber-500 relative'>
                        {!link.subLinks  ? 
                            <NavLink className='lg:flex items-center' to={link.path}>
                                {link.text}
                                {link.subLinks && <FiChevronDown className='ml-2' />}
                            </NavLink>:
                            <span className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                {link.text}
                                {link.subLinks && <FiChevronDown className='ml-2' />}
                            </span>
                        }
                        {(isOpen && link.subLinks) &&
                            <ul className='hiddens w-[150px] lg:absolute top-full left-0 rounded shadow lg:border lg:bg-white lg:text-gray-600 p-4'>
                                {link.subLinks.map((sub, index) => (
                                    <li className="mb-2" key={index}>
                                        <NavLink className='lg:flex items-center' to={sub.path}>
                                            {sub.text}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

const links = [
    {text:'Home', path:'/'},
    {text:'How To Help', path:'/blog', subLinks:[
        {text:'Volunteer', path:'/volunteer'},
        {text:'Donate', path:'/donate'},
    ]},
    {text:'Camps', path:'/camps'},
    {text:'Our Impact', path:'/our-impact'},
    {text:'News', path:'/news'},
    {text:'Contact', path:'/contact'},
    {text:'About us', path:'/about'},
]
