import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  {
    width:0,
    itemsToShow:1,
    itemsToScroll:1
  },
  {
    width:500,
    itemsToShow:4,
    itemsToScroll:1
  },
]

export default function Ourteam() {
  return (
    <div className="lg:px-[5%] lg:py-[4rem] py-[2rem]">
        <div className="lg:w-[68%] mx-auto text-white mb-10">
            <div className="flex items-center">
              <div className="lg:h-2 h-1 bg-gradient-to-r to-white from-gray-800 rounded-full flex-1"></div>
              <h2 className="lg:text-5xl text-2xl lg:font-bold text-center mx-3">Our Team</h2>
              <div className="lg:h-2 h-1 bg-gradient-to-l to-white from-gray-800 rounded-full flex-1"></div>
            </div>
            <p className="text-xl text-center mt-6">
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
            </p>
        </div>
        <div className="my-[2rem]">
            <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className='images-carousel relative'>
                {members.map((member, index) => (
                    <div className='w-full rounded-lg mx-2 p-2 bg-gray-700' key={index}>
                        <div className="flex justify-center">
                            <img className='h-[210px] w-full rounded' src={member.avatar} alt='' />
                        </div>
                        <div className="p-3">
                            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                            <p> Where those designations appear in this book, and the publisher was aware of a trademark claim</p>
                            <div className="flex mt-6">
                                <span className="text-2xl p-2 text-white bg-rose-500 rounded-full mr-4">
                                    <FaTwitter />
                                </span>
                                <span className="text-2xl p-2 text-white bg-rose-500 rounded-full mr-4">
                                    <FaInstagram />
                                </span>
                                <span className="text-2xl p-2 text-white bg-rose-500 rounded-full mr-4">
                                    <FaFacebook />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
  )
}


const members = [
    {
        name:'Sosima',
        title:'Manager',
        avatar:process.env.PUBLIC_URL+'./images/sosima.png'
    },
    {
        name:'Sagaani',
        title:'Manager',
        avatar:process.env.PUBLIC_URL+'./images/kon.png'
    },
    {
        name:'Aman',
        title:'Manager',
        avatar:process.env.PUBLIC_URL+'./images/aman.png'
    },
    {
        name:'Buay Moses',
        title:'Manager',
        avatar:process.env.PUBLIC_URL+'./images/ring.jpg'
    },
]