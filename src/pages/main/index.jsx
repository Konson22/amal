import BlogSection from "./BlogSection"
import Header from "./Header"
import MoneyUtilization from "./MoneyUtilization"
import OurFocus from "./OurFocus"
import OurTeamSection from "./OurTeamSection"


export default function Main() {
  return (
    <>
      <Header />
      <OurFocus />
      <div className="bg-orange lg:flex items-center text-white lg:px-[10%] px-2 lg:py-[7rem] py-16">
        <div className="flex-1 lg:mb-0 mb-4 relative">
          <img className='lg:h-[410px] h-[250px] lg:rotate-[2deg] border-4 border-amber-300' src={process.env.PUBLIC_URL+'./images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'} alt='' />
          <img className='lg:block hidden lg:h-[200px] w-[300px] rotate-[-12deg] border-4 border-amber-300 absolute top-[260px] right-[-70px]' src={process.env.PUBLIC_URL+'./images/ben-white-83tkHLPgg2Q-unsplash.jpg'} alt='' />
          <img className='lg:block hidden lg:h-[150px] w-[200px] rotate-[-12deg] border-4 border-amber-300 absolute top-[260px] left-[-70px]' src={process.env.PUBLIC_URL+'./images/siddhant-soni-CvqCzwVOhCM-unsplash.jpg'} alt='' />
        </div>
        <div className="flex-1 lg:ml-24 pr-20">
          <h2 className="lg:text-5xl text-3xl font-bold mb-4">Helping is an act of Soft Heart</h2>
          <p>
            When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.
          </p>
          <button className="px-6 py-3 rounded text-yellow-700 bg-white mt-6">Donate</button>
        </div>
      </div>
      <BlogSection />
      <OurTeamSection />
      <MoneyUtilization />
    </>
  )
}
