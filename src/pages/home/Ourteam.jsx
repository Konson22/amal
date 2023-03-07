import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


export default function Ourteam() {
  return (
    <div className="lg:px-[6%] px-4 py-[8rem]py-[4rem]">
        <h2 className="lg:text-6xl text-4xl font-bold text-center text-teal-600 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 gap-4 mt-12">
            {members.map(member => (
                <div className='border p-4 flex-1'>
                    <div className="flex justify-center">
                        <img className='h-[210px] w-[210px] border-4 border-teal-600 rounded-full' src={member.avatar} alt='' />
                    </div>
                    <div className="p-3 text-center">
                        <h3 className="text-2xl font-semibold">{member.name}</h3>
                        <h3 className="text-xl">{member.title}</h3>
                        {/* <p> Where those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been</p> */}
                        <div className="flex justify-evenly my-4">
                            <span className="bg-teal-200 rounded-full p-2">
                                <FaInstagram className='text-3xl' />
                            </span>
                            <span className="bg-teal-200 rounded-full p-2">
                                <FaTwitter className='text-3xl' />
                            </span>
                            <span className="bg-teal-200 rounded-full p-2">
                                <FaFacebook className='text-3xl' />
                            </span>
                        </div>
                        {/* <div className="flex justify-evenly">
                            <button className="px-3 py-1 bg-teal-500 text-white">Profile</button>
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const members = [
    {
        name:'Buay Moses',
        title:'Manager',
        avatar:process.env.PUBLIC_URL+'./images/ring.jpg'
    },
    {
        name:'Sagaani',
        title:'Manager',
        avatar:process.env.PUBLIC_URL+'./images/kon.png'
    },
    // {
    //     name:'Sosima',
    //     title:'Manager',
    //     avatar:process.env.PUBLIC_URL+'./images/sosima.png'
    // },
    // {
    //     name:'Aman',
    //     title:'Manager',
    //     avatar:process.env.PUBLIC_URL+'./images/aman.png'
    // },
]