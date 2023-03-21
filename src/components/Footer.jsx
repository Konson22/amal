import { FaMapMarkedAlt, FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'


export default function Footer() {
  return (
    <footer className="text-white relative">
      {/* <div className="lg:flex items-center bg-gray-700 lg:py-20 py-10 lg:px-[10%] px-6">
        <div className="flex-1">
          <span className="block text-2xl mb-4">Subcribe</span>
          <div className="h-[3.5rem] flex lg:mr-16">
            <input type="email" className="h-full bg-gray-200 focus:border-none w-full" />
            <button className="px-4 bg-blue-500">Subcribe</button>
          </div>
        </div>
        <div className="">
          <span className="block text-2xl mb-4">Socila media</span>
          <div className="flex">
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaTwitter />
            </span>
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaInstagram />
            </span>
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaFacebook />
            </span>
            <span className="p-2 text-3xl bg-gray-400 rounded-full mr-6">
              <FaTwitter />
            </span>
          </div>
        </div>
      </div> */}
      <div className="lg:flex justify-between bg-gray-800 lg:py-18 py-10 lg:px-[10%] px-4">
        <div className="flex-1">
          <h3 className="text-amber-500 text-3xl font-semibold mb-6">Our Mission</h3>
          <p>
            Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
          </p>
        </div>
        <div className="lg:ml-20">
          <h3 className="text-amber-500 text-xl font-semibold">Policy & Privacy</h3>
          <ul className="">
            <li className="my-2">Policy</li>
            <li className="my-2">Privacy</li>
            <li className="my-2">About</li>
          </ul>
        </div>
        <div className="lg:ml-20">
          <h3 className="text-amber-500 text-xl font-semibold">Donate</h3>
          <ul className="">
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
            <li className="my-2">About</li>
          </ul>
        </div>
        <div className="lg:ml-20">
          <h3 className="text-amber-500 text-xl font-semibold mb-4">Contacts & Address</h3>
          <ul className="">
            <li className="flex items-center mb-4">
              <FaMapMarkedAlt className='text-2xl mr-2' />
              <span>Juba, Malakia</span>
            </li>
            <li className="flex items-center mb-4">
              <FaPhoneAlt className='text-2xl mr-2' />
              <span>+211920079070</span>
            </li>
            <li className="flex items-center mb-4">
              <FaWhatsapp className='text-2xl mr-2' />
              <span>+211920079070</span>
            </li>
            <li className="flex items-center mb-4">
              <FiMail className='text-2xl mr-2' />
              <span>info@amal-mail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
