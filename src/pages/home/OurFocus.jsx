import { Link } from "react-router-dom"

export default function OurFocus() {
  return (
    <div className="lg:px-[8%] px-3 lg:py-[4rem] py-[2rem]">
      <div className="lg:grid grid-cols-3 gap-5">
        {data.map(category => (
          <div className='lg:bg-gray-700 lg:mb-0 mb-8'>
            <img className='lg:h-[240px] h-[210px] w-full' src={category.image} alt='' />
            <div className="p-3">
              <h3 className="text-xl font-bold mb-1">{category.title}</h3>
              <p>{category.text} </p>
              <div className="mt-5">
                <Link className=" px-3 py-1 bg-rose-500 text-white" to={category.path}>Read more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export const data = [
  {
    title:'Sponsor child',
    text:'When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission.',
    image:process.env.PUBLIC_URL+'./images/ben-white-83tkHLPgg2Q-unsplash.jpg',
    path:'/charity-for-education'
  },
  {
    title:'Feed for Hunger child',
    text:'Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this.',
    image:process.env.PUBLIC_URL+'./images/annie-spratt-cVEOh_JJmEE-unsplash.jpg',
    path:'/sponsor-child'
  },
  {
    title:'Volunteer',
    text:`hope for good is busy and vibrant place to work and there is always room for volunteers to join us and help out
    just bring your time and energy to make difference experience to child`,
    image:process.env.PUBLIC_URL+'./images/people.jpg',
    path:'/volunteer'
  },
]