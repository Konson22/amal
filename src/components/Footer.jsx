import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'


export default function Footer() {
  return (
    <footer className="bg-sky-800 text-white">
      <div className="lg:flex items-center justify-between lg:px-[18%] px-3 lg:py-[2rem] py-[1.5rem]">
        <div className="lg:w-[60%] lg:mb-0 mb-12">
          <p className="lg:font-semibold">
            Subcribe to our news blog, and recieve updats daily..
          </p>
          <div className="flex lg:h-[3.5rem] h-[3rem] bg-white my-3">
            <input className="h-full w-full bg-white px-3"  type="text" placeholder='E-mail Address'/>
            <button className="bg-amber-500 h-full px-4">Subcribe</button>
          </div>
        </div>
        <div className="flex justify-evenly text-3xl">
          <span className="lg:mr-4">
            <FaLinkedin />
          </span>
          <span className="lg:mr-4">
            <FaInstagram />
          </span>
          <span className="lg:mr-4">
            <FaTwitter />
          </span>
          <span className="lg:mr-4">
            <FaYoutube />
          </span>
          <span className="lg:mr-4">
            <FaFacebook />
          </span>
          <span className="lg:mr-4">
            <FaPinterest />
          </span>
        </div>
      </div>
      <div className="lg:bg-sky-700 lg:flex justify-between lg:px-[18%] px-3 lg:py-[3rem] py-[.5rem]">
        <div className="">
          <h3 className="lg:text-2xl font-semibold mb-3">Ways to Help</h3>
          <ul className='lg:text-base text-sm'>
            <li className="mt-2">Meet Critical Needs</li>
            <li className="mt-2">Sponsor a Child</li>
            <li className="mt-2">Press Center</li>
            <li className="mt-2">Estate and Asset Giving</li>
          </ul>
        </div>
        <div className="lg:my-0 my-8">
          <h3 className="lg:text-2xl font-semibold mb-3">Quick Links</h3>
          <ul className='lg:text-base text-sm'>
            <li className="mt-2">Contact Us</li>
            <li className="mt-2">Careers</li>
            <li className="mt-2">Press Center</li>
            <li className="mt-2">Estate and Asset Giving</li>
          </ul>
        </div>
        <div className="">
          <h3 className="lg:text-2xl font-semibold mb-3">Addresses & Contacts</h3>
          <ul>
            <li className="flex items-center mt-2">
              <FaMapMarkerAlt className='mr-2' />
              Steem Center, Near SSBC
            </li>
            <li className="flex items-center mt-2">
              <FaWhatsapp className='mr-2' />
              +211920079070
            </li>
            <li className="flex items-center mt-2">
              <FaPhoneAlt className='mr-2' />
              +211920079070
            </li>
            <li className="flex items-center mt-2">
              <FiMail className='mr-2' />
              info@helpcildcharity.com
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between lg:px-[18%] px-3 lg:py-[2rem] py-[1.5rem]"></div>
    </footer>
  )
}
