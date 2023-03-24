import Carousel from 'react-elastic-carousel'
import { campsData } from '../assets/data'
import refugeeImage from '../assets/images/refugee.jpeg'
import refugeeImage2 from '../assets/images/refugee2.jpeg'
import { FaMapMarkerAlt } from 'react-icons/fa'


const breakPoints = [
  {
    width:0,
    itemsToShow:1,
    itemsToScroll:1
  }
]

export default function RefugeeCamps() {
  return (
    <div>
      <div className='causes-header text-center text-white lg:px-[25%] px-2 lg:py-[4rem] py-[2rem]'>
        <h1 className="lg:text-6xl text-3xl font-bold">Refugees camps</h1>
        <p className="lg:text-xl lg:mt-6 mt-3">
          There are both internally displaced and people who left the country prior, and then returned to South Sudan and now live in the camp. Among the internally displaced, most are from Jonglei and Unity states. 
        </p>
      </div>
      <div className="lg:px-[8%] px-2 py-10">
        <div className="lg:grid grid-cols-2 gap-6">
          {campsData.map(camp => <CampCArd camp={camp} />)}
        </div>
      </div>
    </div>
  )
}


const CampCArd = ({camp}) => {
  return(
    <div className="shadow-sm lg:mb-0 mb-8">
      <div className="relative">
        <Carousel breakPoints={breakPoints} className='camps-carousel lg:h-[320px] h-[220px] relative'>
          {[refugeeImage, refugeeImage2, refugeeImage].map(img => (
            <div className='w-full'>
              <img className="lg:h-[320px] h-[220px]" src={img} alt='' />
            </div>
          ))}
        </Carousel>
        <button className="bg-white z-30 bg-opacity-75 hover:bg-opacity-100 rounded flex items-center justify-end absolute right-4 bottom-2 px-2 py-2">
          <FaMapMarkerAlt className='text-orange text-2xl mr-2' />
          View Map
        </button>
      </div>
      <div className="p-2">
        <h3 className="text-xl font-bold my-2">{camp.name}</h3>
        <p className="text-base">{camp.text}</p>
      </div>
    </div>
  )
}
// const CampCArd = ({camp}) => {
//   return(
//     <div className="border bg-gray-50 shadow-sm py-2 lg:mb-0 mb-6">
//       <Carousel breakPoints={breakPoints} className='camps-carousel lg:h-[300px] h-[270px] relative'>
//         {[refugeeImage, refugeeImage2, refugeeImage].map(img => <img className="lg:h-[270px] h-[250px]" src={img} alt='' />)}
//       </Carousel>
//       <div className="px-2">
//         <h3 className="text-xl font-bold">{camp.name}</h3>
//         <p className="text-base">
//           the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
//         </p>
//       </div>
//     </div>
//   )
// }