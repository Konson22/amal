import { Link } from "react-router-dom"
import homelessImage from '../../assets/images/homeless.jpeg'
import feedImage from '../../assets/images/feed.jpeg'
import schoolImage from '../../assets/images/cam-school.jpeg'


export default function OurFocus() {
  return (
    <div className="lg:px-[8%] px-3 lg:py-[4rem] py-[2rem]">
        <div className="lg:w-[75%] mx-auto my-0">
            <h2 className="lg:text-4xl text-3xl font-bold text-center">What we focus on</h2>
            <p className="text-xl text-center mt-4">
              We focus on helping those who have been forcibly uprooted from their homes due to wars, including the most vulnerable individuals and families (conflicts). We accomplish this by developing the Amal platform, which provides a user-friendly application or web interface and links refugees and internally displaced persons with the outside world so they can get assistance.
            </p>
        </div>
        <div className="mt-10">
          <div className="lg:grid grid-cols-3 gap-8">
            {data.map(category => (
              <div className='bg-gray-1000 lg:mb-0 mb-8'>
                <img className='lg:h-[220px] h-[190px] w-full' src={category.image} alt='' />
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p>{category.text} </p>
                  <div className="mt-5">
                    <Link className=" px-3 py-2 rounded bg-orange text-white" to={category.path}>Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}


export const data = [
  {
    title:'Charity for Education',
    text:'When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from.',
    image:schoolImage,
    path:'/charity-for-education'
  },
  {
    title:'Feed for Hunger child',
    text:'Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being.',
    image:feedImage,
    path:'/sponsor-child'
  },
  {
    title:'Home for homeless',
    text:' Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this.',
    image:homelessImage,
    path:'/sponsor-child'
  },
]