import Header from './Header'
import Sponsorship from './Sponsorship'
import { FaHandHoldingHeart, FaHandHoldingUsd } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="lg:grid grid-cols-3 gap-8 bg-teal-400 lg:px-[8%] px-3 lg:py-[2rem] py-[4rem]">
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
        
      </div>
      <div className="lg:px-[8%] px-3 lg:py-[6rem] py-[4rem]">
        <div className="mb-10">
          <h2 className="lg:text-6xl text-3xl font-bold text-center mb-3">Our mission</h2>
          <p className="text-xl lg:w-[50%] text-center mx-auto my-0">
            sellers to distinguish their products are claimed as trademarks. Where those designations appear
            book, and the publisher was aware of a trademark claim
          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-8">
            {data.map(item => (
              <div className='bg-white lg:mb-0 mb-8'>
                <img className='lg:h-[270px] h-[260px] w-full' src={item.image} alt='' />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p>{item.text} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-teal-400 lg:flex lg:px-[8%] px-6 lg:py-[8rem] py-[4rem]">
        <div className="flex-1">
          <img className='lg:h-[470px] h-[230px] w-full lg:border-4 border-teal-50 rounded-lg' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
        </div>
        <div className="flex-1 lg:px-10 px-4 lg:mt-0 mt-3">
          <h2 className="lg:text-5xl text-2xl font-bold text-white mb-4">Be a sponser and make a child life better </h2>
          <div className="mt-4">
            <p>
              Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where
              those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed
              with initial capital letters or in all capitals.
            </p>
          </div>
        </div>
      </div>
      <Sponsorship />
    </div>
  )
}


const services = [
  {
    title:'Donation',
    text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware ',
    icon: <FaHandHoldingHeart />
  },
  {
    title:'Fund raising',
    text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware ',
    icon: <FaHandHoldingUsd />
  },
  {
    title:'Sponsor',
    text:'Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware ',
    icon: <FiHome />
  },
]

const data = [
    {
        title:'Charity for Education',
        text:' Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed with initial capital letters or in all capitals.',
        image:process.env.PUBLIC_URL+'./images/education.jpg'
    },
    {
        title:'Feed for Hunger child',
        text:' Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed with initial capital letters or in all capitals.',
        image:process.env.PUBLIC_URL+'./images/students.jpg'
    },
    {
        title:'Home for homeless',
        text:' Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed with initial capital letters or in all capitals.',
        image:process.env.PUBLIC_URL+'./images/people.jpg'
    },
]