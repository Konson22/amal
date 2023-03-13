import { Link } from "react-router-dom"

export default function WhatWeFocusOn() {
  return (
    <div className="lg:px-[8%] px-3 lg:py-[4rem] py-[4rem]">
        <h2 className="lg:text-5xl text-3xl font-bold text-center">What we focus on</h2>
        <div className="mt-10">
          <div className="lg:grid grid-cols-3 gap-8">
            {data.map(category => (
              <div className='bg-amber-100 lg:mb-0 mb-8'>
                <img className='lg:h-[270px] h-[260px] w-full' src={category.image} alt='' />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p>{category.text} </p>
                  <div className="mt-5">
                    <Link className=" px-3 py-1 bg-teal-500 text-white" to={category.path}>Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}


const data = [
  {
    title:'Charity for Education',
    text:'When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities..',
    image:process.env.PUBLIC_URL+'./images/ben-white-83tkHLPgg2Q-unsplash.jpg',
    path:'/sponsor-child'
  },
  {
    title:'Feed for Hunger child',
    text:'Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time helps children and youth set their own goals to build a life free from poverty.',
    image:process.env.PUBLIC_URL+'./images/annie-spratt-cVEOh_JJmEE-unsplash.jpg',
    path:'/sponsor-child'
  },
  {
    title:'Home for homeless',
    text:' Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed with initial capital letters or in all capitals.',
    image:process.env.PUBLIC_URL+'./images/siddhant-soni-CvqCzwVOhCM-unsplash.jpg',
    path:'/sponsor-child'
  },
]