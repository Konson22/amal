// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
// import Carousel from 'react-elastic-carousel'


// const breakPoints = [
//   {
//     width:0,
//     itemsToShow:1,
//     itemsToScroll:1
//   },
//   {
//     width:500,
//     itemsToShow:4,
//     itemsToScroll:1
//   },
// ]

export default function OurTeamSection() {
  return (
    <div className="lg:px-[15%] px-3 lg:py-[6rem] py-[2rem] lg:flex items-center">
      <div className="flex-1 lg:mr-12">
        <img className='lg:hidden block lg:h-[400px] w-full rounded mb-3' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
        <h2 className="lg:text-4xl text-3xl font-bold">Our Team</h2>
        <p>
          We are a group of students from the University of Juba in South Sudan's GDSC club, and we are passionate about using technology to solve issues in our local communities.
        </p>
        <p className="lg:block hidden mt-4">
          We intend to use technology to link refugees and internally displaced persons to donors who could supply them with food, shelter, medical care, and other essential items.
          To see people impacted by conflict live regular lives, with access to basic necessities and opportunities to thrive.
        </p>
        <button className="mt-8 px-3 py-2 bg-orange text-white rounded">Join Us Now!</button>
      </div>
      <div className="lg:block hidden flex-1 relative">
        <img className='lg:h-[400px] w-full rounded' src={process.env.PUBLIC_URL+'./images/people.jpg'} alt='' />
        <div className="lg:block hidden absolute h-full w-full border-2 border-orange top-[1rem] left-[1rem] z-[-1]"></div>
      </div>
      {/* <h2 className="lg:text-6xl text-3xl font-bold text-center">Our Team</h2>
      <div className="lg:mt-[1.3rem] mt-[.5rem]">
        <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className='images-carousel relative'>
          {members.map((member, index) => (
            <div className='w-full rounded-lg mx-2 p-3 border bg-gray-100' key={index}>
              <div className="flex justify-center">
                <img className='h-[210px] w-full rounded' src={member.avatar} alt='' />
              </div>
              <div className="p-3">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-xl">{member.title}</p>
                <p> Where those designations appear in this book, and the publisher was</p>
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
      </div> */}
    </div>
  )
}


// const members = [
//   {
//       name:'Sosima',
//       title:'Manager',
//       avatar:process.env.PUBLIC_URL+'./images/sosima.png'
//   },
//   {
//       name:'Sagaani',
//       title:'Manager',
//       avatar:process.env.PUBLIC_URL+'./images/kon.png'
//   },
//   {
//       name:'Aman',
//       title:'Manager',
//       avatar:process.env.PUBLIC_URL+'./images/aman.png'
//   },
//   {
//       name:'Buay Moses',
//       title:'Manager',
//       avatar:process.env.PUBLIC_URL+'./images/ring.jpg'
//   },
// ]
