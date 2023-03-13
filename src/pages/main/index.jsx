import Header from './Header'
// import Sponsorship from './Sponsorship'
import WhatWeFocusOn from './WhatWeFocusOn'
// import { FaHandHoldingHeart, FaHandHoldingUsd } from 'react-icons/fa'
// import { FiHome } from 'react-icons/fi'

export default function Home() {
  return (
    <div>
      <Header />
      {/* <div className="lg:grid grid-cols-3 gap-8 bg-teal-400 lg:px-[8%] px-3 lg:py-[2rem] py-[4rem]">
        {services.map(service => (
          <div className="lg:flex items-center">
            <div className="text-7xl mr-5">
              {service.icon}
            </div>
            <div className="">
              <h4 className="text-2xl font-semibold mb-1">{service.title}</h4>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
        
      </div> */}
      <div className="lg:w-[70%] mx-auto my-0 py-[3rem] px-3">
        <h2 className="lg:text-4xl text-2xl font-bold lg:text-center mb-3">You can help end poverty for good by sponsoring a child</h2>
        <p className="text-xl lg:text-center">
          Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good
        </p>
      </div>
      {/* <Sponsorship /> */}
      <WhatWeFocusOn />
    </div>
  )
}


// const services = [
//   {
//     title:'Donation',
//     text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware ',
//     icon: <FaHandHoldingHeart />
//   },
//   {
//     title:'Fund raising',
//     text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware ',
//     icon: <FaHandHoldingUsd />
//   },
//   {
//     title:'Sponsor',
//     text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware ',
//     icon: <FiHome />
//   },
// ]

