import { FaHandHoldingHeart, FaHandHoldingUsd } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import Header from './Header'
import OurFocus from './OurFocus'
import AboutSection from './AboutSection'
import OurTeamSection from './OurTeamSection'

export default function HomePage() {
  return (
    <div>
        <Header />
        <div className="flex justify-between bg-rose-500 lg:px-[8%] px-3 lg:py-[2rem] py-[1rem]">
          {services.map(service => (
            <div className="lg:flex items-center text-white">
              <div className="flex items-center justify-center lg:text-7xl text-4xl lg:mr-5 ">
                {service.icon}
              </div>
              <div>
                <h4 className="lg:text-2xl lg:font-semibold mb-1">{service.title}</h4>
                <p className="lg:block hidden">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
        <OurFocus />
        <OurTeamSection />
        <AboutSection />
    </div>
  )
}




const services = [
    {
      title:'Donation',
      text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks.',
      icon: <FaHandHoldingHeart />
    },
    {
      title:'Fund raising',
      text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks.',
      icon: <FaHandHoldingUsd />
    },
    {
      title:'Sponsor',
      text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks.',
      icon: <FiHome />
    },
  ]