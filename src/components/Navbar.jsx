import { FaFacebook, FaTwitter, FaInstagram, FaHandHoldingHeart, FaHandHoldingUsd } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='lg:block flex justify-between lg:bg-teal-600 bg-teal-500 lg:py-0 py-3 lg:px-0 px-3'>
        <div className="flex items-center justify-between lg:px-[4%] lg:py-[2.5rem]">
            <h1 className="lg:text-6xl text-3xl font-bold text-teal-100">Amal</h1>
            {/* <img className='h-[6.5rem] w-[6.5rem]' src={process.env.PUBLIC_URL+'./images/logo.png'} alt="" /> */}
            <div className="lg:flex hidden">
                <span className="block border border-teal-100 text-teal-100 rounded-full p-2">
                    <FaTwitter className='text-3xl' />
                </span>
                <span className="block border border-teal-100 text-teal-100 rounded-full p-2 mx-3">
                    <FaInstagram className='text-3xl' />
                </span>
                <span className="block border border-teal-100 text-teal-100 rounded-full p-2">
                    <FaFacebook className='text-3xl' />
                </span>
            </div>
        </div>
        <div className="flex items-center justify-between text-white bg-teal-500 lg:py-4 lg:px-[4%]">
            <ul className="lg:flex hidden">
                {links.map(link => (
                    <li className='px-4'>
                        <NavLink className='' to={link.path}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
            <div className="flex">
                <button className="flex items-center text-base px-4 py-2 bg-yellow-400 rounded text-white mx-3">
                    <FaHandHoldingUsd className='text-2xl mr-2' />
                    <span className="lg:block hidden">Donate</span>
                </button>
                <button className="flex items-center text-base px-4 py-2 bg-teal-600 rounded text-white">
                    <FaHandHoldingHeart className='text-xl mr-2' />
                    <span className="lg:block hidden">Sponser a child</span>
                </button>
            </div>
        </div>
    </nav>
  )
}


const links = [
    {text:'Home', path:'/'},
    {text:'Child in nedd', path:'/child-in-need'},
    {text:'About us', path:'/about'},
    {text:'Our Mission', path:'/Mission'},
    {text:'Services', path:'/Services'},
]
