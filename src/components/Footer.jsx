import { FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'


export default function Footer() {
  return (
    <footer className="text-white lg:flex justify-between bg-gray-800 lg:py-18 py-10 lg:px-[10%] px-4">
      <div className="flex-1 lg:mb-0 mb-4">
        <h3 className="text-amber-500 text-3xl font-semibold lg:mb-6 mb-2">Our Mission</h3>
        <p>
          We are a group of students from the University of Juba in South Sudan's GDSC club, and we are passionate about using technology to solve issues in our local communities.
        </p>
      </div>
      <div className="lg:ml-20 lg:mb-0 mb-4">
        <h3 className="text-amber-500 text-xl font-semibold">Policy & Privacy</h3>
        <ul className="">
          <li className="my-2">Policy</li>
          <li className="my-2">Privacy</li>
          <li className="my-2">About</li>
        </ul>
      </div>
      <div className="lg:ml-20 lg:mb-0 mb-4">
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
    </footer>
  )
}
